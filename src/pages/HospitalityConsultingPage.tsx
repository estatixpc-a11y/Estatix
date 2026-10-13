import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hotel, 
  Compass, 
  Building, 
  Calculator, 
  Handshake, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Award
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';

interface HospitalityConsultingPageProps {
  onOpenConsultation: () => void;
}

export const HospitalityConsultingPage: React.FC<HospitalityConsultingPageProps> = ({
  onOpenConsultation,
}) => {
  const advisoryPillars = [
    {
      title: 'Hospitality Suitability Assessment',
      desc: 'Evaluating land parcel accessibility, tourist inflow corridors, seasonal seasonality patterns, views, and infrastructure readiness for hotel operations.',
      icon: Compass,
    },
    {
      title: 'Hotel Concept & Key Positioning',
      desc: 'Determining room inventory sizing (e.g. 50–100 keys), F&B outlets, banqueting/wedding lawns, spa facilities, and guest experience differentiation.',
      icon: Hotel,
    },
    {
      title: 'Brand & Operator Identification',
      desc: 'Shortlisting appropriate hotel management brands (upscale, midscale, boutique resort) and initiating discussions with leading national hospitality chains.',
      icon: Handshake,
    },
    {
      title: 'Development Cost & Capex Benchmarking',
      desc: 'Preliminary capital expenditure modeling per key, civil shell estimates, interior fitout allowances, and MEP provisioning requirements.',
      icon: Calculator,
    },
    {
      title: 'Revenue Feasibility Modeling',
      desc: 'Formulating multi-year operational models based on stated Average Room Rate (ARR), occupancy benchmarks, and departmental EBITDA assumptions.',
      icon: Building,
    },
    {
      title: 'Brand Engagement Coordination',
      desc: 'Structuring commercial terms, Management Contract or Franchise Agreement reviews, and owner-operator coordination within the agreed advisory scope.',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-800 border border-teal-700 text-xs font-semibold text-brand-accent tracking-widestBrand uppercase">
              LEISURE & COMMERCIAL HOSPITALITY
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Hospitality Feasibility & Development Consulting
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Connecting leisure land assets with recognized hotel brands and viable operating models. From site feasibility and room inventory sizing to brand operator matchmaking across Maharashtra.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Evaluate Your Hospitality Opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Advisory Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC CASE STUDY: SAROVAR HOTELS ALIBAUG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-300 overflow-hidden shadow-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 bg-teal-950">
              <img loading="lazy"
                src="/assets/projects/hospitality-sarovar-alibaug.jpg"
                alt="Sarovar Hotels & Resorts Signing Ceremony with Estatix"
                className="w-full h-full object-cover object-center min-h-[340px]"
              />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-accent/15 text-teal-900 border border-brand-accent/30 text-[10px] font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-brand-accentDark" />
                  <span>Verified Hospitality Engagement</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                  80-Room Hotel near Alibaug, Maharashtra
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  A signed hotel brand engagement for a planned 80-room beachside property in Alibaug.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Planned hotel capacity: 80 rooms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hospitality brand engagement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Signed engagement</span>
                  </div>
                </div>
              </div>

              {/* Explicit status disclosure */}
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg text-[11px] text-slate-600 space-y-1">
                <span className="font-semibold text-slate-800">Engagement Status: </span>
                <span>
                  Hotel brand engagement signed. Construction and operating status are not stated.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIX PILLARS OF HOSPITALITY ADVISORY */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Advisory Scope"
            title="Hospitality Development Services"
            subtitle="Guiding landowners and investors through each stage of concept formulation, operator matching, and commercial evaluation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advisoryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feasibility Disclaimer Notice */}
          <div className="mt-10 bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 text-xs text-amber-900 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Important Feasibility Disclosure:</span>
              <p className="leading-relaxed text-amber-800">
                Hospitality revenue projections, Average Room Rates (ARR), and occupancy estimates prepared during consulting are modeled on stated operational assumptions and historic market data. Estatix Property Consultants LLP does not guarantee hospitality revenue or present estimates as assured financial yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-teal-800 shadow-corporate max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Evaluating a Land Parcel for Hotel Development?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Contact our hospitality consulting practice to evaluate site suitability, concept positioning, and operator matchmaking options.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Evaluate Your Hospitality Opportunity
            </button>
            <a
              href={siteConfig.contact.callUrl}
              className="px-6 py-3 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
