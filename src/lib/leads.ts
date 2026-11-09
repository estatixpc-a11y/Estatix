import { supabaseConfig } from '../config/supabase';

export interface FsiLead {
  full_name: string; phone: string; land_location: string;
  authority: string; area_type: string; zone: string; intended_use: string;
  plot_area_sqm: number; road_width_m: number; on_highway: boolean;
  total_builtup_sqm: number; effective_fsi: number; summary: string;
}

/** Saves a calculator lead to Supabase (insert-only table). Returns false instead of throwing. */
export async function saveFsiLead(lead: FsiLead): Promise<boolean> {
  if (!supabaseConfig.url || !supabaseConfig.publishableKey) return false;
  try {
    const res = await fetch(`${supabaseConfig.url}/rest/v1/fsi_leads`, {
      method: 'POST',
      headers: {
        apikey: supabaseConfig.publishableKey,
        Authorization: `Bearer ${supabaseConfig.publishableKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
    });
    return res.ok;
  } catch {
    return false;
  }
}
