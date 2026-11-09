import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, AlertTriangle, MessageSquare, CheckCircle, Info } from 'lucide-react';
import {
  calculateFsi, estimateKeys, AUTHORITY_LABEL, UNITS, SQFT_PER_SQM,
  type Authority, type AreaType, type Zone, type Use, type Unit,
} from '../lib/fsi';
import { siteConfig } from '../config/siteConfig';
import { submitEnquiry } from '../components/common/submitEnquiry';
import { saveFsiLead } from '../lib/leads';

const fmt = (n: number) => Math.round(n).toLocaleString('en-IN');
const inr = (n: number) => '₹' + (n >= 1e7 ? (n / 1e7).toFixed(2) + ' Cr' : n >= 1e5 ? (n / 1e5).toFixed(2) + ' L' : fmt(n));

const field = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:border-teal-700 focus:outline-none';
const labelCls = 'block text-sm font-medium text-teal-950 mb-1.5';

function Toggle<T extends string>({ value, options, onChange, name }: { value: T; options: [T, string][]; onChange: (v: T) => void; name: string }) {
  return (
    <div role="radiogroup" aria-label={name} className="grid grid-cols-2 gap-2">
      {options.map(([v, l]) => (
        <button key={v} type="button" role="radio" aria-checked={value === v} onClick={() => onChange(v)}
          className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${value === v ? 'border-teal-900 bg-teal-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-teal-700'}`}>
          {l}
        </button>
      ))}
    </div>
  );
}

export function FsiCalculatorPage() {
  const [authority, setAuthority] = useState<Authority>('pmrda');
  const [areaType, setAreaType] = useState<AreaType>('non_congested');
  const [zone, setZone] = useState<Zone>('developable');
  const [use, setUse] = useState<Use>('residential');
  const [area, setArea] = useState('20');
  const [unit, setUnit] = useState<Unit>('guntha');
  const [road, setRoad] = useState('18');
  const [onHighway, setOnHighway] = useState(false);
  const [deduction, setDeduction] = useState('');
  const [asr, setAsr] = useState('');
  const [sqmPerKey, setSqmPerKey] = useState(65);

  const plotSqm = (parseFloat(area) || 0) * UNITS[unit].toSqm;
  const result = useMemo(() => calculateFsi({
    authority, areaType, zone, use,
    plotAreaSqm: plotSqm,
    deductionSqm: (parseFloat(deduction) || 0) * UNITS[unit].toSqm,
    roadWidthM: parseFloat(road) || 0,
    onHighway,
    asrRate: parseFloat(asr) || undefined,
  }), [authority, areaType, zone, use, plotSqm, deduction, unit, road, onHighway, asr]);

  const keys = use === 'hotel' && result.permitted ? estimateKeys(result.totalBuiltUpSqm, sqmPerKey) : 0;

  const summary = [
    `Location: ${AUTHORITY_LABEL[authority]}, ${zone === 'agricultural' ? 'Agricultural zone' : areaType === 'congested' ? 'Congested area' : 'Non-congested area'}`,
    `Plot: ${area} ${UNITS[unit].label} (${fmt(plotSqm)} sq.m.)`,
    `Road: ${road} m${onHighway ? ', NH/SH/MDR frontage' : ''}`,
    `Use: ${use === 'hotel' ? 'Hotel / resort' : use === 'commercial' ? 'Commercial' : 'Residential'}`,
    result.permitted ? `Estimate: ${fmt(result.totalBuiltUpSqm)} sq.m. (${fmt(result.totalBuiltUpSqm * SQFT_PER_SQM)} sq.ft.) total built-up, effective FSI ${result.effectiveFsi.toFixed(2)}${keys ? `, approx. ${keys} keys` : ''}` : 'Estimate: use not permitted in this zone',
  ].join('\n');

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Estatix, I used the FSI calculator and would like a verified report for my land.\n\n${summary}`)}`;

  // Lead form
  const [lead, setLead] = useState({ fullName: '', phone: '', location: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[+\d][\d\s-]{8,}$/.test(lead.phone.trim())) { setStatus('error'); setError('Please enter a valid phone number.'); return; }
    setStatus('sending'); setError('');
    const payload = {
      fullName: lead.fullName, phone: lead.phone, consent: lead.consent ? 'yes' : 'no',
      enquiryType: use === 'hotel' ? 'hospitality' : 'land_parcel',
      sourcePage: 'FSI Calculator', location: lead.location,
      areaSize: `${area} ${UNITS[unit].label}`, description: summary,
    };
    const saved = await saveFsiLead({
      full_name: lead.fullName, phone: lead.phone, land_location: lead.location,
      authority, area_type: areaType, zone, intended_use: use,
      plot_area_sqm: Math.round(plotSqm), road_width_m: parseFloat(road) || 0, on_highway: onHighway,
      total_builtup_sqm: result.permitted ? Math.round(result.totalBuiltUpSqm) : 0,
      effective_fsi: result.permitted ? Number(result.effectiveFsi.toFixed(2)) : 0, summary,
    });
    try {
      await submitEnquiry(payload, e.currentTarget);
      setStatus('done');
    } catch (err) {
      if (saved) setStatus('done');
      else { setStatus('error'); setError(err instanceof Error ? err.message : 'Could not send. Please use WhatsApp instead.'); }
    }
  };

  return (
    <div className="pb-20">
      <section className="bg-teal-900 text-white py-14 sm:py-20 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widestBrand uppercase text-brand-accent mb-4">Free tool · UDCPR 2020</p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight max-w-4xl">FSI Calculator for land in Pune & PMRDA</h1>
          <p className="text-lg text-slate-300 mt-6 max-w-3xl">Estimate how much you can build on your plot: basic FSI, premium FSI, TDR, ancillary FSI and, for hotels, an approximate room count. Based on the Unified Development Control and Promotion Regulations (consolidated up to January 2023).</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 space-y-5 rounded-xl border border-slate-200 p-6 shadow-subtle h-fit">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-950"><Calculator className="w-5 h-5" /> Your plot</h2>

            <div>
              <label className={labelCls} htmlFor="authority">Planning authority</label>
              <select id="authority" className={field} value={authority} onChange={e => setAuthority(e.target.value as Authority)}>
                {(Object.keys(AUTHORITY_LABEL) as Authority[]).map(a => <option key={a} value={a}>{AUTHORITY_LABEL[a]}</option>)}
              </select>
            </div>

            <div>
              <span className={labelCls}>Zone</span>
              <Toggle name="Zone" value={zone} onChange={setZone} options={[['developable', 'Residential / Commercial'], ['agricultural', 'Agricultural']]} />
            </div>

            {zone === 'developable' && (
              <div>
                <span className={labelCls}>Area type</span>
                <Toggle name="Area type" value={areaType} onChange={setAreaType} options={[['non_congested', 'Non-congested'], ['congested', 'Congested / Gaothan']]} />
              </div>
            )}

            <div>
              <span className={labelCls}>Intended use</span>
              <div className="grid grid-cols-3 gap-2">
                {([['residential', 'Residential'], ['commercial', 'Commercial'], ['hotel', 'Hotel / Resort']] as [Use, string][]).map(([v, l]) => (
                  <button key={v} type="button" aria-pressed={use === v} onClick={() => setUse(v)}
                    className={`rounded-lg border px-2 py-2.5 text-sm font-medium ${use === v ? 'border-teal-900 bg-teal-900 text-white' : 'border-slate-300 text-slate-700 hover:border-teal-700'}`}>{l}</button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-3">
                <label className={labelCls} htmlFor="area">Plot area</label>
                <input id="area" inputMode="decimal" className={field} value={area} onChange={e => setArea(e.target.value)} />
              </div>
              <div className="col-span-2">
                <label className={labelCls} htmlFor="unit">Unit</label>
                <select id="unit" className={field} value={unit} onChange={e => setUnit(e.target.value as Unit)}>
                  {(Object.keys(UNITS) as Unit[]).map(u => <option key={u} value={u}>{UNITS[u].label}</option>)}
                </select>
              </div>
            </div>
            <p className="-mt-3 text-xs text-slate-500">= {fmt(plotSqm)} sq.m. / {fmt(plotSqm * SQFT_PER_SQM)} sq.ft.</p>

            <div>
              <label className={labelCls} htmlFor="road">Width of the road the plot faces (m)</label>
              <input id="road" inputMode="decimal" className={field} value={road} onChange={e => setRoad(e.target.value)} />
              <label className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" checked={onHighway} onChange={e => setOnHighway(e.target.checked)} /> Fronts a National / State Highway or MDR
              </label>
              {onHighway && <p className="mt-1 text-xs text-slate-500">Highways usually count as 30 m+. NH right of way is 60 m, SH 45 m (Reg. 3.3.8).</p>}
            </div>

            <details className="rounded-lg bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-teal-900">Advanced (optional)</summary>
              <div className="mt-4 space-y-4">
                <div>
                  <label className={labelCls} htmlFor="ded">Area under DP road / road widening / reservation ({UNITS[unit].label})</label>
                  <input id="ded" inputMode="decimal" className={field} value={deduction} onChange={e => setDeduction(e.target.value)} placeholder="0" />
                </div>
                <div>
                  <label className={labelCls} htmlFor="asr">ASR land rate (₹ per sq.m.)</label>
                  <input id="asr" inputMode="decimal" className={field} value={asr} onChange={e => setAsr(e.target.value)} placeholder="From the Ready Reckoner" />
                  <p className="mt-1 text-xs text-slate-500">Used only to estimate premium payable.</p>
                </div>
                {use === 'hotel' && (
                  <div>
                    <label className={labelCls} htmlFor="key">Built-up area per room (sq.m.)</label>
                    <select id="key" className={field} value={sqmPerKey} onChange={e => setSqmPerKey(Number(e.target.value))}>
                      <option value={45}>45 — budget / economy</option>
                      <option value={65}>65 — midscale (default)</option>
                      <option value={100}>100 — upscale</option>
                      <option value={150}>150 — luxury / resort</option>
                    </select>
                  </div>
                )}
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {!result.permitted ? (
              <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-950"><AlertTriangle className="w-5 h-5 text-amber-600" /> Not permitted in this zone</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">{result.message}</p>
              </div>
            ) : (
              <>
                <div className="rounded-xl bg-teal-950 text-white p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-widestBrand text-brand-accent">Estimated total built-up area</p>
                  <p className="mt-3 text-4xl sm:text-5xl font-semibold">{fmt(result.totalBuiltUpSqm * SQFT_PER_SQM)} <span className="text-2xl font-normal text-slate-300">sq.ft.</span></p>
                  <p className="mt-1 text-slate-300">{fmt(result.totalBuiltUpSqm)} sq.m. · effective FSI {result.effectiveFsi.toFixed(2)} incl. ancillary</p>
                  <div className="mt-6 grid sm:grid-cols-3 gap-4 border-t border-white/15 pt-5 text-sm">
                    <div><p className="text-slate-400">Land FSI (without ancillary)</p><p className="text-lg font-medium">{(result.landPotentialSqm / (result.grossSqm || 1)).toFixed(2)}</p></div>
                    <div><p className="text-slate-400">Rule applied</p><p className="font-medium">{result.table}</p></div>
                    <div><p className="text-slate-400">Road band</p><p className="font-medium">{result.roadBand}</p></div>
                  </div>
                  {keys > 0 && <p className="mt-5 rounded-lg bg-white/10 px-4 py-3">Approx. <strong>{fmt(keys)} rooms</strong> at {sqmPerKey} sq.m. per room, as a planning ceiling. The right size depends on demand and brand standards.</p>}
                  {result.estimatedPremium !== undefined && <p className="mt-3 text-sm text-slate-300">Estimated premium payable to the authority: <strong className="text-white">{inr(result.estimatedPremium)}</strong> (excludes TDR purchase cost).</p>}
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-600">
                      <tr><th className="p-3 font-medium">Component</th><th className="p-3 font-medium text-right">FSI</th><th className="p-3 font-medium text-right">sq.m.</th><th className="p-3 font-medium text-right">sq.ft.</th></tr>
                    </thead>
                    <tbody>
                      {result.lines.map(l => (
                        <tr key={l.label} className="border-t border-slate-200 align-top">
                          <td className="p-3"><span className="font-medium text-teal-950">{l.label}</span>{l.note && <span className="block text-xs text-slate-500 mt-0.5">{l.note}</span>}</td>
                          <td className="p-3 text-right">{l.fsi.toFixed(2)}</td>
                          <td className="p-3 text-right">{fmt(l.areaSqm)}</td>
                          <td className="p-3 text-right">{fmt(l.areaSqm * SQFT_PER_SQM)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-teal-900 font-semibold text-teal-950">
                        <td className="p-3">Total</td><td className="p-3 text-right">{result.effectiveFsi.toFixed(2)}</td>
                        <td className="p-3 text-right">{fmt(result.totalBuiltUpSqm)}</td><td className="p-3 text-right">{fmt(result.totalBuiltUpSqm * SQFT_PER_SQM)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {result.warnings.length > 0 && (
              <ul className="space-y-2">
                {result.warnings.map(w => <li key={w} className="flex gap-2 text-sm text-slate-700"><Info className="w-4 h-4 mt-0.5 shrink-0 text-teal-700" />{w}</li>)}
              </ul>
            )}

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700 leading-relaxed">
              <strong>Indicative estimate only.</strong> Final FSI depends on the sanctioned Development Plan, zone certificate, reservations, road widening, CRZ / eco-sensitive zone, heritage and airport height limits, and the authority’s interpretation. Get a verified report before you buy, sell or sign a JV.
            </div>

            {/* Lead capture */}
            <div className="rounded-xl border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-teal-950">Get a verified FSI & feasibility report</h2>
              <p className="mt-2 text-slate-600">Estatix checks your 7/12, zone and DP remarks, and tells you what can be built, which use fits best and who to approach: developers for a JV, or hotel brands.</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#1f8f4e] px-5 py-3 font-semibold text-white">
                <MessageSquare className="w-5 h-5" /> Send these results on WhatsApp
              </a>
              {status === 'done' ? (
                <p className="mt-6 flex items-center gap-2 font-medium text-teal-900"><CheckCircle className="w-5 h-5" /> Thank you. Our team will call you shortly.</p>
              ) : (
                <form name="estatix-enquiries" onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div><label className={labelCls} htmlFor="ln">Name</label><input id="ln" required className={field} value={lead.fullName} onChange={e => setLead({ ...lead, fullName: e.target.value })} /></div>
                  <div><label className={labelCls} htmlFor="lp">Phone</label><input id="lp" required inputMode="tel" className={field} value={lead.phone} onChange={e => setLead({ ...lead, phone: e.target.value })} /></div>
                  <div className="sm:col-span-2"><label className={labelCls} htmlFor="ll">Land location (village / survey no.)</label><input id="ll" required className={field} value={lead.location} onChange={e => setLead({ ...lead, location: e.target.value })} /></div>
                  <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600"><input type="checkbox" required checked={lead.consent} onChange={e => setLead({ ...lead, consent: e.target.checked })} className="mt-1" /> I agree to be contacted by Estatix about this enquiry. See our <Link to="/privacy" className="underline">privacy notice</Link>.</label>
                  {status === 'error' && <p className="sm:col-span-2 text-sm text-red-700">{error}</p>}
                  <button type="submit" disabled={status === 'sending'} className="sm:col-span-2 rounded-lg bg-teal-900 px-6 py-3 font-semibold text-white disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Request a Verified Report'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-teal-950 mb-6">Common questions</h2>
          <div className="space-y-4">
            {[
              ['What is FSI?', 'Floor Space Index is the ratio of total built-up area to plot area. An FSI of 2.5 on a 1,000 sq.m. plot allows 2,500 sq.m. of construction, before ancillary FSI.'],
              ['What is ancillary FSI?', 'An optional extra allowance under UDCPR of up to 60% (residential) or 80% (non-residential) of the proposed FSI, for staircases, lifts, lobbies and similar areas, on payment of premium.'],
              ['Why does road width matter so much?', 'Under Tables 6A and 6G, premium FSI and TDR increase as the road in front of the plot gets wider. Below 9 m, only basic FSI is available.'],
              ['Do hotels get extra FSI?', 'Yes. Starred hotels (2-star and above, certified by the Tourism Department) are allowed the building potential of the next wider road band, at a 20% premium, and need no amenity space (Table 7A).'],
              ['Can I build a hotel on agricultural land?', 'Hotels, resorts and tourist homes are permitted in the Agricultural Zone at 0.2 FSI without premium, up to 1.0 with premium. 3-star+ hotels need highway or 18 m+ road frontage. Plots of 1 hectare or more can qualify as a tourist resort complex at 0.25 base FSI.'],
            ].map(([q, a]) => (
              <details key={q} className="rounded-lg border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold text-teal-950">{q}</summary><p className="mt-3 text-sm text-slate-600 leading-relaxed">{a}</p></details>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">Planning a hotel? See our <Link to="/services/hospitality-consulting" className="underline">hospitality consulting</Link>. Looking for a JV or outright sale? See <Link to="/services/land-monetization" className="underline">land monetization</Link>.</p>
        </div>
      </section>
    </div>
  );
}
