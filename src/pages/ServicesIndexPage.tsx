import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Grid, 
  Landmark, 
  Hotel, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Compass
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';

interface ServicesIndexPageProps {
  onOpenConsultation: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenConsultation }) => {
  const servicesList = [
    {
      title: 'Mandate Sales & Project Marketing',
      href: '/services/mandate-sales',
      targetAudience: 'Residential & Commercial Developers',
      icon: Building2,
      summary:
        'Sole project sales mandates bridging product positioning, pricing, brand storytelling, channel partner network activation, and disciplined on-ground customer closing.',
      keyCapabilities: [
        'Micro-market absorption & competitor pricing benchmarks',
        'Project launch planning & marketing collateral design',
        'Channel partner sourcing, onboarding, and training',
        'Dedicated on-site mandate sales managers & lounge execution',
        'Stage-wise builder collections & weekly velocity reporting',
      ],
      ctaText: 'Explore Mandate Sales',
    },
    {
      title: 'Plotting Development & Planning',
      href: '/services/plotting-development',
      targetAudience: 'Landowners & Plotted Community Developers',
      icon: Grid,
      summary:
        'End-to-end commercial strategy for land subdivisions and plotted gated communities. From master layout planning support to buyer positioning and phased launch execution.',
      keyCapabilities: [
        'Topography & micro-market demand assessment',
        'Layout planning support (plot sizing, road grids, open spaces)',
        'Buyer segmentation (weekend villas vs long-term land investors)',
        'Master plan brand storytelling & marketing collateral',
        'Phased sales release & regional broker mobilization',
      ],
      ctaText: 'Explore Plotted Development',
    },
    {
      title: 'Land Monetization & Acquisition',
      href: '/services/land-monetization',
      targetAudience: 'Landowners, Institutional Funds & Grade-A Developers',
      icon: Landmark,
      summary:
        'Unlocking optimal value for raw land parcels across Pune and Maharashtra. Evaluating JDA, outright sale, and joint venture options backed by risk-reducing due diligence.',
      keyCapabilities: [
        'Commercial feasibility & development yield calculation',
        'Joint Development Agreement (JDA) model structuring',
        'Due diligence coordination with legal & technical specialists',
        'Commencement Certificate (CC) & TPS sanction review',
        'Confidential matchmaking with vetted builder partners',
      ],
      ctaText: 'Explore Land Monetization',
    },
    {
      title: 'Hospitality Consulting',
      href: '/services/hospitality-consulting',
      targetAudience: 'Hospitality Developers, Resort Owners & Investors',
      icon: Hotel,
      summary:
        'Feasibility analysis and brand operator matchmaking for resort and hotel developments. Sizing room inventory, assessing tourist flows, and structuring brand agreements.',
      keyCapabilities: [
        'Location tourist flow & seasonal demand assessment',
        'Hotel sizing (50–100 keys) & amenity concept design',
        'National brand operator matching & pitch coordination',
        'Preliminary Capex benchmarking per room key',
        'Feasibility modeling under stated ARR & occupancy assumptions',
      ],
      ctaText: 'Explore Hospitality Advisory',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              COMPREHENSIVE ADVISORY SCOPE
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Specialist Real Estate Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Connecting land, development strategy, branding, marketing, and sales execution. We provide clear, audience-specific solutions rather than an unexplained list of services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Practice Areas"
          title="Four Specialized Service Verticals"
          subtitle="Explore how Estatix delivers measurable value across developer mandates, plotted developments, land transactions, and hospitality ventures."
        />

        <div className="space-y-12 mt-12">
          {servicesList.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-corporate transition-all duration-200 p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accentDark bg-brand-accent/10 px-2 py-0.5 rounded">
                          {svc.targetAudience}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans mt-1">
                          {svc.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {svc.summary}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        to={svc.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        <span>{svc.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables & Execution Scope
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CLOSING CONSULTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-teal-800 shadow-corporate max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Have a Mandate or Land Opportunity to Discuss?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Speak with our team about your requirements and the next steps.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Book an Advisory Consultation
            </button>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
