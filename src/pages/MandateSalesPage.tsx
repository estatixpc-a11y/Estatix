import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Megaphone, 
  Rocket, 
  Users, 
  LineChart, 
  GraduationCap, 
  Wallet, 
  ClipboardCheck, 
  ArrowRight, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';

interface MandateSalesPageProps {
  onOpenConsultation: () => void;
}

export const MandateSalesPage: React.FC<MandateSalesPageProps> = ({ onOpenConsultation }) => {
  const processSteps = [
    {
      step: '01',
      title: 'Market Assessment & Product Insights',
      desc: 'Deep-dive micro-market study analyzing competitor absorption rates, buyer demographics, pricing bands, and unmet unit requirements.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Project Positioning & Pricing Strategy',
      desc: 'Formulating the unique value proposition, tiering unit inventory, structuring payment milestones, and establishing commercial targets.',
      icon: Building2,
    },
    {
      step: '03',
      title: 'Branding, Marketing & Collateral',
      desc: 'Creating high-impact project collateral, sales lounge experience design, digital narratives, and buyer-facing brochures.',
      icon: Megaphone,
    },
    {
      step: '04',
      title: 'Launch Planning & CP Activation',
      desc: 'Mobilizing hundreds of regional channel partners, conducting project walk-throughs, incentive announcements, and pre-launch booking campaigns.',
      icon: Rocket,
    },
    {
      step: '05',
      title: 'Sales Execution & Lounge Management',
      desc: 'Deploying our trained on-site mandate sales managers to conduct high-conversion customer presentations, negotiations, and closing.',
      icon: Users,
    },
    {
      step: '06',
      title: 'Collections Coordination & Reporting',
      desc: 'Rigorous tracking of builder payment demand letters, banker sanction follow-ups, weekly sales velocity reviews, and inventory audits.',
      icon: Wallet,
    },
  ];

  const deliverables = [
    'Comprehensive micro-market benchmarking & pricing recommendations',
    'Full project branding, messaging framework & sales collateral',
    'Onboarding & active engagement of 250+ certified channel partners',
    'Dedicated mandate sales directors & trained on-site closing personnel',
    'Lead management system integration & disciplined follow-up SLAs',
    'Customer payment tracking and coordination with builder accounts',
    'Weekly sales velocity, inventory status & cashflow reporting',
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-800 border border-teal-700 text-xs font-semibold text-brand-accent tracking-widestBrand uppercase">
              DEVELOPER MANDATE SERVICES
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Mandate Sales & Project Marketing
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              End-to-end sales management for residential and commercial developments across Pune. We take sole accountability for project positioning, branding, channel partner distribution, on-site sales execution, and cashflow collections.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
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

      {/* 2. THE 10 PILLARS OF MANDATE SALES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="End-to-End Scope"
          title="Complete Scope of Estatix Mandate Services"
          subtitle="We do not just hand over leads. We manage every touchpoint of the sales lifecycle from initial site analysis to post-booking collections."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-corporate transition-all duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-accent font-mono tracking-wider">
                      PHASE {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PRACTICAL PROCESS TIMELINE */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Structured Process"
                title="A Predictable Timeline from Mandate to Closing"
                subtitle="How we structure the engagement during the critical pre-launch, launch, and sustenance phases."
              />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By establishing clear operational SLAs, weekly review cadences, and aligned incentives, we deliver disciplined inventory turnover without eroding project price integrity.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Schedule a Mandate Presentation
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-6">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Mandate Deliverables Checklist
              </h3>
              <div className="space-y-3">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 text-xs text-teal-950 space-y-1">
                <span className="font-bold block">Verified Track Record:</span>
                <p className="text-slate-700 leading-relaxed">
                  Our previous residential mandate, <span className="font-semibold text-slate-900">Ekaant</span> (Pune), was completely sold out in less than one year, achieving an average project rate above the developer’s initial expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-teal-800 shadow-corporate max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Ready to Discuss Your Project Mandate?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Contact our leadership team directly for a confidential assessment of your project, pricing feasibility, and distribution potential across Pune.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Discuss Your Project
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
