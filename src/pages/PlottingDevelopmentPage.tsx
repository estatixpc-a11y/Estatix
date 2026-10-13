import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Map, 
  Compass, 
  Tag, 
  Megaphone, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';

interface PlottingDevelopmentPageProps {
  onOpenConsultation: () => void;
}

export const PlottingDevelopmentPage: React.FC<PlottingDevelopmentPageProps> = ({
  onOpenConsultation,
}) => {
  const scopeItems = [
    {
      title: 'Land & Micro-Market Assessment',
      desc: 'Topographical review, access road evaluation, boundary scrutiny, and studying regional weekend home or suburban plot absorption demand.',
      icon: Map,
    },
    {
      title: 'Plotted Layout Planning Support',
      desc: 'Collaborating with town planning architects to evaluate optimal plot dimensions (e.g. 2,000–5,000 sq.ft.), internal road grids, and recreation green pockets.',
      icon: Grid,
    },
    {
      title: 'Product & Buyer Segmentation',
      desc: 'Positioning plots for targeted buyer personas: high-net-worth weekend home builders, capital-growth land investors, or future custom villa owners.',
      icon: Tag,
    },
    {
      title: 'Branding & Master Plan Narrative',
      desc: 'Formulating an aspirational master-community brand identity, theme guidelines (eco-wellness, orchard living, active sports), and visual collateral.',
      icon: Megaphone,
    },
    {
      title: 'Go-to-Market & Sales Strategy',
      desc: 'Phased inventory release modeling to maximize rate appreciation across Phase 1, 2, and 3, supported by regional broker activation.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-800 border border-teal-700 text-xs font-semibold text-brand-accent tracking-widestBrand uppercase">
              LAND DEVELOPMENT & SUBDIVISION STRATEGY
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Plotting Development & Planning Advisory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Transforming raw acreage into structured, high-value plotted communities. Estatix provides commercial feasibility, layout planning support, buyer positioning, and phased marketing execution for landowners and developers.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Discuss Your Land Parcel</span>
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

      {/* 2. AUTHENTIC PLOTTED COMMUNITY CONCEPTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Conceptual Master Planning"
          title="From Raw Acreage to Aspirational Communities"
          subtitle="Our planning support ensures plotted developments are designed with intuitive road grids, communal recreation buffers, and optimal plot sizing that commands premium market rates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle group">
            <div className="h-72 w-full bg-slate-100 overflow-hidden">
              <img loading="lazy"
                src="/assets/projects/plotted-masterplan-layout.png"
                alt="Plotted Community Masterplan Layout"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-850">
                LAYOUT CIRCULATION BLUEPRINT
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Internal Circulation & Plot Tiering
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Balancing internal road hierarchies (12m/9m access roads), cul-de-sacs, and green buffer zones to maximize sellable area while preserving open vistas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle group">
            <div className="h-72 w-full bg-slate-100 overflow-hidden">
              <img loading="lazy"
                src="/assets/projects/plotted-community-concept.png"
                alt="Community Recreation Nodes Concept"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-850">
                AMENITY INTEGRATION
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Communal Recreation Nodes & Open Spaces
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structuring central civic amenities—clubhouses, wellness decks, and natural water buffers—that turn commodity plots into branded lifestyle destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SCOPE */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Advisory"
            title="The 5 Key Areas of Plotted Development Support"
            subtitle="How Estatix assists landowners and developers through every step of layout formulation and commercial sales."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {scopeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

            {/* Scope boundary box */}
            <div className="bg-teal-900 text-white rounded-xl p-6 border border-teal-800 shadow-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-brand-accent flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Clear Scope Boundary
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estatix provides commercial layout planning support, marketing strategy, and sales execution. Statutory town planning sanctions, civil engineering, and environmental clearances are executed by certified technical and legal specialists within the client’s project team.
                </p>
              </div>
              <div className="pt-2 text-[11px] text-brand-accent font-semibold">
                Transparent Advisory Integrity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-teal-800 shadow-corporate max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Have a Land Parcel Suited for Plotted Development?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Connect with our land advisory specialists for a confidential assessment of micro-market demand, feasible plot yields, and commercial monetization structures.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Discuss Your Land Parcel
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
