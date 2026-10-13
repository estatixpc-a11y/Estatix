import React, { useState } from 'react';
import { 
  TrendingUp, 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  FileText, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  Info,
  Building,
  Clock
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';

interface InvestorsHomebuyersPageProps {
  onOpenConsultation: (type: 'investment' | 'homebuyer') => void;
}

export const InvestorsHomebuyersPage: React.FC<InvestorsHomebuyersPageProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'investor' | 'homebuyer'>('all');

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              ADVISORY FOR PRIVATE CAPITAL & FAMILIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Investor & Homebuyer Advisory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether allocating capital into high-growth Pune micro-markets or selecting a long-term family residence, Estatix replaces aggressive sales pitches with data-backed property consulting.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onOpenConsultation('investment')}
                className="px-6 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Discuss an Investment
              </button>
              <button
                onClick={() => onOpenConsultation('homebuyer')}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Find a Home
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6-STEP ADVISORY JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Guidance"
          title="The 6-Stage Buyer & Investor Journey"
          subtitle="Every recommendation follows a transparent process designed to evaluate value, verify facts, and protect your capital."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Requirement & Budget Assessment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We define your objective: capital growth, rental yield, or lifestyle criteria. We map strict budget limits, down payment plans, and borrowing eligibility.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Property & Location Shortlisting
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Screening live micro-markets in Pune. We compare upcoming transit infrastructure, historical price trends, and civic amenities to shortlist 2–3 viable options.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Product & Unit Evaluation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rigorous inspection of floor plans, genuine RERA carpet areas (versus inflated saleable metrics), natural ventilation, privacy, and building density.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Site Visit Coordination
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curated, non-intrusive site tours accompanied by an Estatix advisor who points out real site advantages, ongoing construction pace, and neighbourhood context.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              05
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Document Review Coordination
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Coordinating review of MahaRERA registrations, sanctioned plans, commencement certificates, and draft sale agreements to ensure complete clarity before deposit.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-900 font-mono font-bold flex items-center justify-center text-xs">
              06
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Negotiation & Transaction Support
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Representing your commercial interests during builder negotiations to secure fair pricing, favorable payment schedules, and hassle-free registration assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DISTINCT SECTION: REAL ESTATE INVESTORS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200" id="investors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widestBrand text-teal-850 block">
                FOR REAL ESTATE INVESTORS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-sans leading-tight">
                Data-Driven Property Investment in Pune & Maharashtra
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Investing in real estate should be rooted in micro-market economics, not speculative euphoria. Whether your goal is steady residential rental yields or capitalizing on emerging commercial & plotted corridors, our team evaluates every deal with institutional discipline.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-850 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-slate-900">Corridor Growth Analysis: </span>
                    Evaluating infrastructure drivers like the Pune Ring Road, Metro corridors, and IT/industrial corridor expansions.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-850 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-slate-900">Yield vs Capital Appreciation: </span>
                    Differentiating high-rental 1/2 BHK units in IT hubs from high-capital-appreciation plotted and luxury land assets.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-850 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-slate-900">Exit Liquidity Strategy: </span>
                    Evaluating developer brand reputation and resale demand so you maintain an achievable exit horizon.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('investment')}
                  className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Discuss an Investment Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Investor Focus Areas
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <h4 className="font-bold text-slate-900">Early-Stage Mandate Entry</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Access to pre-launch and structured developer inventory at disciplined pricing before public surges.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <h4 className="font-bold text-slate-900">Plotted Land Assets</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Clear-title plotted development parcels in high-growth peripheral Pune nodes with strong long-term capital appreciation.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <h4 className="font-bold text-slate-900">Commercial & Hospitality Assets</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Evaluated commercial spaces and leisure hospitality opportunities structured with realistic, unexaggerated feasibility metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DISTINCT SECTION: HOMEBUYERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="homebuyers">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              What Homebuyers Experience with Estatix
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900">Genuine Carpet Area Scrutiny</h4>
                <p className="text-slate-600 leading-relaxed">
                  We verify actual usable room dimensions and balconies so you only pay for tangible living space.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900">MahaRERA & Sanction Checks</h4>
                <p className="text-slate-600 leading-relaxed">
                  We inspect developer track records, sanction validity, and delivery milestones to safeguard your family’s savings.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900">Unbiased Multi-Project Comparison</h4>
                <p className="text-slate-600 leading-relaxed">
                  Because we advise across multiple leading developers, we compare options impartially rather than pushing a single site.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-teal-850 block">
              FOR HOMEBUYERS & FAMILIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-sans leading-tight">
              A Transparent, Stress-Free Path to Your Next Home
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Buying a home is one of the most consequential decisions a family makes. Yet buyers are frequently inundated with misleading floor plans, complex payment slabs, and aggressive call centers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Estatix, we act as your personal real estate advocates. We understand your family’s commute, school requirements, and comfort priorities, shortlisting only verified developments that meet our strict quality benchmark.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('homebuyer')}
                className="px-6 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Find a Home with Our Advisors</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp an Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURRENT OPPORTUNITIES STRUCTURE (HONEST CONSULTATION INVITATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-3xl p-8 sm:p-12 text-white border border-teal-800 shadow-corporate">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-800/80 border border-teal-700 text-xs font-semibold text-brand-accent uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" />
              <span>Current Opportunities Structure</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-sans">
              Curated Opportunities Shared Directly by Advisor Consultation
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              In accordance with our strict data integrity policy, <span className="font-semibold text-white">Estatix does not display fabricated listings or mock inventory cards</span>. Real estate availability in Pune changes weekly based on developer releases, stage approvals, and booking cancellations.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our previous mandates—such as <span className="font-semibold text-white">Ekaant</span> and <span className="font-semibold text-white">Eminence</span>—are 100% sold out and are not presented as available stock. For current, verified inventory currently matching your specific criteria, please connect directly with our advisory desk.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenConsultation('investment')}
                className="px-6 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
              >
                Request Current Inventory Match
              </button>
              <a
                href={siteConfig.contact.callUrl}
                className="px-6 py-3.5 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 7000489767</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
