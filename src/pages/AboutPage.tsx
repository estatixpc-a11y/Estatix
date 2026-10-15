import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Search, 
  Layers, 
  Users2, 
  CheckCircle, 
  ArrowRight, 
  MapPin,
  Compass,
  FileCheck2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { leadershipMembers } from '../data/leadership';
import { SectionHeading } from '../components/common/SectionHeading';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              ABOUT ESTATIX PROPERTY CONSULTANTS LLP
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              A Disciplined Real Estate Advisory Bridging Land, Strategy & Sales
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Estatix was established to solve real estate with analytical rigor and ground execution. Headquartered in Pune, we serve real estate investors, developers, and landowners across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR POSITIONING & ETHOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Our Purpose"
              title="From Speculation to Informed Decisions"
              subtitle="The Indian real estate market has matured rapidly. Buyers demand clarity, developers need predictable sales velocity, and landowners seek transparent commercial viability."
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              We reject high-pressure brokerage tactics and unsupported promises. Our work connects deep micro-market research with real-world sales execution, providing clarity at every juncture of a property transaction.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              When we coordinate due diligence for a land parcel, we do not make irresponsible claims that land is free from every conceivable future dispute; instead, we work with qualified legal and technical professionals to rigorously identify, assess, and mitigate risks before commitments are finalized.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Book a Consultation with Our Founders</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Search className="w-4 h-4 text-brand-accentDark" />
                <span>Micro-Market Intelligence</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ground-level understanding of Pune residential corridors, industrial nodes, and coastal Maharashtra hospitality pockets.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <FileCheck2 className="w-4 h-4 text-brand-accentDark" />
                <span>Risk-Reducing Due Diligence</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective document examination, RERA compliance checks, and municipal sanction scrutiny coordinated with qualified specialists.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Users2 className="w-4 h-4 text-brand-accentDark" />
                <span>Collaborative Network</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active alignment with grade-A developers, certified channel partners, hospitality operators, and financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKING APPROACH: THE 5 PILLARS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Execution Framework"
            title="How Estatix Executes Every Assignment"
            subtitle="A systematic, five-stage methodology applied across both private client advisory and institutional developer mandates."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
              <span className="text-xs font-bold text-brand-accent font-mono block">STAGE 01</span>
              <h3 className="text-sm font-bold text-slate-900">
                Understanding Requirements
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive mapping of client goals, budget constraints, risk appetite, and planned holding periods before evaluating products.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
              <span className="text-xs font-bold text-brand-accent font-mono block">STAGE 02</span>
              <h3 className="text-sm font-bold text-slate-900">
                Evaluating Opportunities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Screening micro-market inventory, assessing municipal sanctions, competitor absorption rates, and verifying project fundamentals.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
              <span className="text-xs font-bold text-brand-accent font-mono block">STAGE 03</span>
              <h3 className="text-sm font-bold text-slate-900">
                Positioning Products
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formulating pricing structures, buyer value propositions, and targeted launch narratives aligned with realistic demand.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
              <span className="text-xs font-bold text-brand-accent font-mono block">STAGE 04</span>
              <h3 className="text-sm font-bold text-slate-900">
                Coordinating Execution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobilizing channel partners, briefing sales lounges, coordinating site tours, and ensuring customer-advisor transparency.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-3">
              <span className="text-xs font-bold text-brand-accent font-mono block">STAGE 05</span>
              <h3 className="text-sm font-bold text-slate-900">
                Supporting Outcomes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Managing documentation, coordinating banking workflows, tracking builder collections milestones, and maintaining relationship integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP PROFILES (ADARSH CHOUKSEY & KEVIN JOHN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Founding Partners"
          title="Leadership Profiles"
          subtitle="Experienced leadership directly involved in every strategic mandate and consulting engagement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {leadershipMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start border-b border-slate-100">
                  <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden bg-teal-900 shrink-0 border border-slate-200 shadow-sm">
                    <img loading="lazy"
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-2.5 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accentDark bg-brand-accent/10 px-2.5 py-1 rounded inline-block">
                      Founding Partner
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-sans">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-850 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                <a href={`tel:${member.phone}`} className="inline-flex py-2 text-sm font-semibold text-teal-800 underline underline-offset-4" aria-label={`Call ${member.name} on ${member.phoneDisplay}`}>{member.name.split(' ')[0]} · {member.phoneDisplay}</a>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 bg-slate-50/50">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Core Functional Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.focusAreas.map((fa, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2 rounded border border-slate-200"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-teal-850 shrink-0" />
                          <span>{fa}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
                    <span className="font-semibold text-slate-700">Practice Note: </span>
                    {member.backgroundNote}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOCATION & CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-850 block">
                HEADQUARTERS
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-sans">
                Operating from Pune’s Commercial Core
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located at Bramhacorp Business Park, Wadgaon Sheri, our team coordinates mandates across Eastern Pune (Kalyani Nagar, Koregaon Park, Viman Nagar, Kharadi, Fursungi, Hadapsar), Western Pune growth corridors, and destination markets across coastal Maharashtra.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium pt-2">
                <MapPin className="w-4 h-4 text-brand-accentDark shrink-0" />
                <span>{siteConfig.contact.officeAddress.full}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-5 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
              >
                Schedule an In-Person Meeting
              </button>
              <a
                href={siteConfig.contact.officeAddress.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
