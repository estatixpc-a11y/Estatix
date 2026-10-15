import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Filter, 
  Tag, 
  Eye, 
  Clock, 
  Award, 
  Users, 
  Building2 
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { CaseStudy, CaseStudyStatus } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CaseStudyModal } from '../components/common/CaseStudyModal';
import { siteConfig } from '../config/siteConfig';

interface OurWorkPageProps {
  onOpenConsultation: () => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | CaseStudyStatus>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories: Array<'All' | CaseStudyStatus> = [
    'All',
    'Completed Sales Mandate',
    'Bulk Residential Sales',
    'Hospitality Engagement (Signed)',
    'Ongoing Business-Planning Engagement',
    'Channel Partner Alliance',
  ];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              SELECTED PROJECTS & ENGAGEMENTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Our Work: Mandates, Bulk Sales & Advisory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A transparent record of completed project sales mandates, bulk residential sales, signed hospitality agreements, ongoing planning advisory, and channel partner showcases across Pune and Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS & CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group ${study.id === 'ekaant' ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full bg-teal-950 overflow-hidden">
                  <img loading="lazy"
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-teal-950/90 text-brand-accent text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-teal-800">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-accentDark shrink-0" />
                    <span>{study.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-teal-900 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {study.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-xs text-teal-950 font-semibold flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{study.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <Link to={`/our-work/${study.id}`}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-teal-900 hover:text-white text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Case Study Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DISCLOSURE & DATA INTEGRITY NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 text-xs text-slate-600 space-y-3">
          <span className="font-bold text-slate-800 uppercase tracking-wider block">
            Portfolio Integrity & Classification Standards
          </span>
          <p className="leading-relaxed">
            Estatix Property Consultants LLP strictly distinguishes between completed sales mandates, signed pre-development hospitality engagements, and ongoing advisory initiatives. We do not feature sold-out inventory as active stock, nor do we present early-stage feasibility studies as completed commercial assets. All photographs displayed above reflect authentic project sites, master planning blueprints, and official signing events.
          </p>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-teal-800 shadow-corporate max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Ready to Partner with Estatix on Your Next Mandate?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Contact our leadership team to evaluate how our sales execution and development strategy can accelerate your project milestones.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Discuss Your Project
            </button>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              WhatsApp Our Desk
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
};
