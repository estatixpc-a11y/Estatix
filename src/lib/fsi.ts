/**
 * Indicative FSI engine based on UDCPR-2020 (consolidated up to 30 January 2023).
 *
 * Sources inside the regulation:
 * - Table 6A (congested area) and Table 6G (non-congested area): basic FSI, premium FSI, TDR loading.
 * - Note (viii) below Table 6G: premium FSI at 35% of ASR land rate.
 * - Note 1 below Table 6A / note (i) below 6G: ancillary area FSI 60% (residential) / 80% (non-residential),
 *   premium 15% of ASR for Pune Municipal Corporation, 10% for other corporations, metropolitan authorities,
 *   councils and RP areas.
 * - Note (xiv) below Table 6G: basic FSI on net plot; premium FSI and TDR on the entire plot.
 * - Regulation 3.5.1: amenity space nil below 20,000 sq.m., 5% at 20,000 sq.m. or more (not for Table 7A uses).
 * - Regulation 7.0 & Table 7A (D): starred hotels (2-star and above) get the maximum building potential of
 *   one road-width step higher, premium 20% of ASR, no amenity space.
 * - Regulation 4.11 (xxxiii, xxxiv, xxxxi): agricultural-zone hotels/resorts FSI 0.2 free (0.25 for a tourist
 *   resort complex of 1 ha+ on a 9 m+ road), up to 1.00 with premium at 20% of ASR.
 *
 * This is an estimate tool. Site-specific DP remarks, reservations, CRZ/ESZ, heritage, airport height
 * limits and authority interpretations can change the result.
 */

export type Authority = 'pmc' | 'pcmc' | 'pmrda' | 'council';
export type AreaType = 'non_congested' | 'congested';
export type Zone = 'developable' | 'agricultural';
export type Use = 'residential' | 'commercial' | 'hotel';

export interface FsiInput {
  authority: Authority;
  areaType: AreaType;
  zone: Zone;
  use: Use;
  plotAreaSqm: number;
  deductionSqm: number; // DP road, road widening, reservation
  roadWidthM: number;
  onHighway: boolean; // NH / SH / MDR frontage
  asrRate?: number; // ₹ per sq.m. land rate in Annual Statement of Rates (optional)
}

export interface FsiLine {
  label: string;
  fsi: number; // FSI factor, expressed on the gross plot
  areaSqm: number;
  premiumRate?: number; // fraction of ASR land rate
  note?: string;
}

export interface FsiResult {
  permitted: boolean;
  message?: string;
  table: string;
  roadBand: string;
  grossSqm: number;
  netSqm: number;
  amenitySqm: number;
  lines: FsiLine[];
  landPotentialSqm: number; // basic + premium + TDR (or hotel additional / agri)
  ancillaryPct: number;
  ancillarySqm: number;
  totalBuiltUpSqm: number;
  effectiveFsi: number; // total built-up / gross plot
  estimatedPremium?: number; // ₹, only when ASR supplied
  warnings: string[];
}

export const SQFT_PER_SQM = 10.7639;
export const UNITS = {
  sqm: { label: 'sq. m.', toSqm: 1 },
  sqft: { label: 'sq. ft.', toSqm: 1 / SQFT_PER_SQM },
  guntha: { label: 'Guntha', toSqm: 101.17 },
  acre: { label: 'Acre', toSqm: 4046.86 },
  hectare: { label: 'Hectare', toSqm: 10000 },
} as const;
export type Unit = keyof typeof UNITS;

export const AUTHORITY_LABEL: Record<Authority, string> = {
  pmc: 'Pune Municipal Corporation (PMC)',
  pcmc: 'Pimpri Chinchwad Municipal Corporation (PCMC)',
  pmrda: 'PMRDA area',
  council: 'Municipal Council / Nagar Panchayat',
};

type Row = { band: string; min: number; basic: number; corp: [number, number, number]; other: [number, number, number] };

// [premium FSI, max TDR loading, max building potential incl. in-situ]
const TABLE_6G: Row[] = [
  { band: 'Below 9 m', min: 0, basic: 1.1, corp: [0, 0, 1.1], other: [0, 0, 1.1] },
  { band: '9 m to below 12 m', min: 9, basic: 1.1, corp: [0.5, 0.4, 2.0], other: [0.3, 0.3, 1.7] },
  { band: '12 m to below 15 m', min: 12, basic: 1.1, corp: [0.5, 0.65, 2.25], other: [0.3, 0.6, 2.0] },
  { band: '15 m to below 24 m', min: 15, basic: 1.1, corp: [0.5, 0.9, 2.5], other: [0.3, 0.7, 2.1] },
  { band: '24 m to below 30 m', min: 24, basic: 1.1, corp: [0.5, 1.15, 2.75], other: [0.3, 0.9, 2.3] },
  { band: '30 m and above', min: 30, basic: 1.1, corp: [0.5, 1.4, 3.0], other: [0.3, 1.1, 2.5] },
];

const TABLE_6A: Row[] = [
  { band: 'Below 9 m', min: 0, basic: 1.5, corp: [0, 0, 1.5], other: [0, 0, 1.5] },
  { band: '9 m to below 18 m', min: 9, basic: 2.0, corp: [0.3, 0.3, 2.6], other: [0.3, 0.1, 2.4] },
  { band: '18 m to below 30 m', min: 18, basic: 2.0, corp: [0.3, 0.5, 2.8], other: [0.3, 0.2, 2.5] },
  { band: '30 m and above', min: 30, basic: 2.0, corp: [0.3, 0.7, 3.0], other: [0.3, 0.2, 2.5] },
];

const isCorporation = (a: Authority) => a === 'pmc' || a === 'pcmc';
const ancillaryPremium = (a: Authority) => (a === 'pmc' ? 0.15 : 0.1);
const round = (n: number) => Math.round(n * 100) / 100;

function rowIndex(rows: Row[], road: number) {
  let i = 0;
  rows.forEach((r, idx) => { if (road >= r.min) i = idx; });
  return i;
}

export function calculateFsi(input: FsiInput): FsiResult {
  const gross = Math.max(0, input.plotAreaSqm);
  const deduction = Math.min(Math.max(0, input.deductionSqm), gross);
  const warnings: string[] = [];
  const base = { grossSqm: gross, lines: [] as FsiLine[], warnings };

  if (input.zone === 'agricultural') {
    if (input.use !== 'hotel') {
      return {
        ...base, permitted: false, table: 'Regulation 4.11 (Agricultural Zone)', roadBand: `${input.roadWidthM} m`,
        netSqm: gross, amenitySqm: 0, landPotentialSqm: 0, ancillaryPct: 0, ancillarySqm: 0, totalBuiltUpSqm: 0, effectiveFsi: 0,
        message: 'Residential and commercial projects are not permitted in the Agricultural Zone (apart from limited uses such as an individual house up to 150 sq.m.). A zone change or a specific scheme is needed. Hotels, resorts and tourism projects are permitted, so try the hotel option.',
      };
    }
    const resortComplex = gross >= 10000 && input.roadWidthM >= 9;
    const freeFsi = resortComplex ? 0.25 : 0.2;
    if (input.roadWidthM < 6) warnings.push('Agricultural-zone uses need at least a 6 m approach road (non-special building).');
    if (!(input.onHighway || input.roadWidthM >= 18)) warnings.push('For a 3-star or higher hotel in the Agricultural Zone, the plot must be on a National / State Highway, MDR or a road of at least 18 m. Smaller hotels, resorts and tourist homes are still permitted at the same FSI.');
    if (resortComplex) warnings.push('Plot is 1 hectare or more on a 9 m+ road, so it qualifies for the Tourist Resort Complex rule (0.25 FSI without premium). Subdivision is not allowed and lake-side height limits apply.');
    warnings.push('Ancillary FSI is shown as per Note (i) below Table 6G ("all buildings in all zones"). Confirm with the authority for your specific plot.');
    const freeArea = freeFsi * gross;
    const premArea = (1 - freeFsi) * gross;
    const land = freeArea + premArea;
    const ancillarySqm = 0.8 * land;
    const total = land + ancillarySqm;
    const lines: FsiLine[] = [
      { label: 'FSI without premium', fsi: freeFsi, areaSqm: freeArea, note: resortComplex ? 'Tourist Resort Complex, Reg. 4.11 (xxxiv)' : 'Reg. 4.11 (xxxiii / xxxxi)' },
      { label: 'Additional FSI on premium', fsi: round(1 - freeFsi), areaSqm: premArea, premiumRate: 0.2, note: 'Up to 1.00 total, premium 20% of ASR' },
      { label: 'Ancillary FSI (80%)', fsi: round(0.8), areaSqm: ancillarySqm, premiumRate: ancillaryPremium(input.authority), note: 'Non-residential, on premium' },
    ];
    return finish({ ...base, lines, permitted: true, table: 'Regulation 4.11 (Agricultural Zone)', roadBand: input.onHighway ? 'NH / SH / MDR frontage' : `${input.roadWidthM} m road`, netSqm: gross, amenitySqm: 0, landPotentialSqm: land, ancillaryPct: 80, ancillarySqm, totalBuiltUpSqm: total, effectiveFsi: total / (gross || 1) }, input);
  }

  const rows = input.areaType === 'congested' ? TABLE_6A : TABLE_6G;
  const tableName = input.areaType === 'congested' ? 'Table 6A (congested area)' : 'Table 6G (non-congested area)';
  const idx = rowIndex(rows, input.roadWidthM);
  const row = rows[idx];
  const corp = isCorporation(input.authority);
  const [premF, tdrF] = corp ? row.corp : row.other;
  const isHotel = input.use === 'hotel';

  const afterRoads = gross - deduction;
  const amenity = !isHotel && afterRoads >= 20000 ? 0.05 * afterRoads : 0;
  const net = afterRoads - amenity;
  const basicArea = row.basic * net;
  const lines: FsiLine[] = [{ label: 'Basic FSI', fsi: row.basic, areaSqm: basicArea, note: 'On net plot (after roads, reservations, amenity)' }];
  let land = basicArea;

  if (amenity > 0) warnings.push(`Plot is 20,000 sq.m. or more, so 5% amenity space (${Math.round(amenity).toLocaleString('en-IN')} sq.m.) is deducted before basic FSI (Reg. 3.5.1).`);
  if (input.roadWidthM < 9) warnings.push('Premium FSI and TDR are only available on roads 9 m or wider.');

  if (isHotel) {
    const canStep = input.roadWidthM >= 9;
    const stepIdx = canStep ? Math.min(idx + 1, rows.length - 1) : idx;
    const stepRow = rows[stepIdx];
    const potHotel = (corp ? stepRow.corp : stepRow.other)[2];
    const addl = Math.max(0, potHotel - row.basic);
    const addlArea = addl * gross;
    land += addlArea;
    if (addl > 0) lines.push({ label: 'Hotel additional FSI', fsi: round(addl), areaSqm: addlArea, premiumRate: 0.2, note: stepIdx > idx ? `Road width considered one step higher (${stepRow.band}), Table 7A` : 'Highest road band already, Table 7A' });
    warnings.push('Hotel benefit needs a 2-star or higher category certificate from the Tourism Department, GOI. Without it, use the commercial option.');
    warnings.push('No amenity space is required for starred hotels (Reg. 7.0 h).');
  } else {
    if (premF > 0) { lines.push({ label: 'Premium FSI', fsi: premF, areaSqm: premF * gross, premiumRate: 0.35, note: 'On entire plot, premium 35% of ASR' }); land += premF * gross; }
    if (tdrF > 0) { lines.push({ label: 'TDR loading (max.)', fsi: tdrF, areaSqm: tdrF * gross, note: 'Purchased TDR; 30–50% must be slum / URT / amenity TDR' }); land += tdrF * gross; }
  }

  const ancillaryPct = input.use === 'residential' ? 60 : 80;
  const ancillarySqm = (ancillaryPct / 100) * land;
  lines.push({ label: `Ancillary FSI (${ancillaryPct}%)`, fsi: round((ancillaryPct / 100) * land / (gross || 1)), areaSqm: ancillarySqm, premiumRate: Math.min(ancillaryPremium(input.authority), isHotel ? 0.2 : 1), note: `Optional, premium ${input.authority === 'pmc' ? '15' : '10'}% of ASR` });
  const total = land + ancillarySqm;

  return finish({ ...base, lines, permitted: true, table: tableName, roadBand: row.band, netSqm: net, amenitySqm: amenity, landPotentialSqm: land, ancillaryPct, ancillarySqm, totalBuiltUpSqm: total, effectiveFsi: total / (gross || 1) }, input);
}

function finish(r: FsiResult, input: FsiInput): FsiResult {
  if (input.asrRate && input.asrRate > 0) {
    r.estimatedPremium = r.lines.reduce((sum, l) => sum + (l.premiumRate ? l.areaSqm * input.asrRate! * l.premiumRate : 0), 0);
  }
  return r;
}

/** Rough room capacity for a hotel from total built-up area. Gross floor area per key is an assumption. */
export function estimateKeys(totalBuiltUpSqm: number, sqmPerKey: number) {
  return sqmPerKey > 0 ? Math.floor(totalBuiltUpSqm / sqmPerKey) : 0;
}
