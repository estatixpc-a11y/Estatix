import { BusinessHighlights } from '../components/common/BusinessHighlights';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Landmark, 
  Compass, 
  Users, 
  Hotel, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight,
  ExternalLink,
  Award,
  PhoneCall,
  Clock
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { caseStudies } from '../data/caseStudies';
import { leadershipMembers } from '../data/leadership';
import { SectionHeading } from '../components/common/SectionHeading';
import { CaseStudyModal } from '../components/common/CaseStudyModal';
import { CaseStudy } from '../types';

interface HomePageProps {
  onOpenConsultation: (type?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const featuredStudies = caseStudies.filter((c) => c.featured);

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-teal-900 text-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden border-b border-teal-800">
        {/* Subtle architectural background texture */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('/assets/projects/plotted-community-concept.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/95 to-teal-950/80 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Tagline / Market Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-800/80 border border-teal-700/80 text-xs font-semibold text-brand-accent tracking-widestBrand uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>{siteConfig.primaryMarket} Real Estate Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans leading-[1.15] text-white">
              Mandate Expertise. <br className="hidden sm:inline" />
              <span className="text-brand-accent font-serif italic font-normal">Investment Clarity.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {siteConfig.supportingCopy}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenConsultation('consultation')}
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-150 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-150 flex items-center justify-center gap-2.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/our-work"
                className="px-6 py-3.5 border border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Explore Track Record</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            {/* Quick Micro-credentials */}
            <div className="pt-6 sm:pt-10 border-t border-teal-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="font-bold text-white block text-sm">Project Sales Mandates</span>
                <span className="text-slate-400 text-[11px]">Positioning to direct sales</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block text-sm">Land Monetization</span>
                <span className="text-slate-400 text-[11px]">JV / outright structuring</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block text-sm">Hospitality Feasibility</span>
                <span className="text-slate-400 text-[11px]">Brand operator matchmaking</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block text-sm">Investor Advisory</span>
                <span className="text-slate-400 text-[11px]">Opportunity & product assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BusinessHighlights />
      {/* 2. AUDIENCE PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tailored Advisory Pathways"
          title="How Estatix Serves Your Specific Real Estate Objectives"
          subtitle="Real estate outcomes depend on alignment. We connect land parcels, capital, development strategy, and sales execution with clear value for every stakeholder."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 3: Developers */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                Real Estate Developers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sole sales mandates and marketing management for residential and commercial projects. From launch planning and branding to broker onboarding and collections coordination.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Project positioning & go-to-market strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Channel partner sourcing, onboarding & training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>On-ground sales execution & collections tracking</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/services/mandate-sales"
                className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Mandate Sales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('mandate_sales')}
                className="text-xs text-brand-accentDark hover:underline font-semibold"
              >
                Submit a Project
              </button>
            </div>
          </div>

          {/* Card 1: Investors */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                Real Estate Investors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective evaluation of Pune growth corridors, rental yields, capital appreciation potential, and entry pricing. We filter out speculative claims and present verified opportunities.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Micro-market data & absorption trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Rental yield & capital gains profiling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Risk screening on approvals & delivery track</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/for-investors"
                className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Investor Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('investment')}
                className="text-xs text-brand-accentDark hover:underline font-semibold"
              >
                Discuss an Investment
              </button>
            </div>
          </div>

          {/* Card 4: Landowners */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                Landowners & Families
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlocking optimal value for land parcels across Pune and Maharashtra. Feasibility analysis, JV / JDA structuring, outright sale evaluation, and due diligence coordination.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Commercial & development feasibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Due diligence coordination with legal experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Matchmaking with reputed Grade-A builders</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/services/land-monetization"
                className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Land Monetization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/services/land-monetization#submit-land"
                className="text-xs text-brand-accentDark hover:underline font-semibold"
              >
                Submit a Land Parcel
              </Link>
            </div>
          </div>

          {/* Card 5: Hospitality Investors */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                Hospitality Investors & Developers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating land suitability for resorts and boutique hotels. Concept planning, revenue feasibility models, and introducing national hotel operators for formal brand engagements.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Location & hospitality tourist flow study</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Brand and operator fit identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Feasibility modeling using stated assumptions</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/services/hospitality-consulting"
                className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Hospitality Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('hospitality')}
                className="text-xs text-brand-accentDark hover:underline font-semibold"
              >
                Discuss Hospitality Opportunity
              </button>
            </div>
          </div>

          {/* Card 6: Channel Partners */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                Channel Partners
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A structured network for verified property consultants across Maharashtra. Direct access to developer mandates, transparent project briefs, and reliable closing coordination.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Curated developer mandates with price clarity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Regular product walk-throughs & sales material</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                  <span>Dedicated transaction and closing assistance</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/channel-partners"
                className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Partner Network</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/channel-partners#register"
                className="text-xs text-brand-accentDark hover:underline font-semibold"
              >
                Register as a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECT OUTCOMES (THE PROOF POINTS) */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Selected Outcomes"
            title="Selected Project Outcomes"
            subtitle="Selected outcomes from Estatix’s sales mandates and advisory engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Outcome 1: Ekaant */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Completed Sales Mandate
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Ekaant
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Pune
                </p>
                <p className="text-xs text-slate-700 leading-relaxed pt-2">
                  Ekaant was completely sold in less than one year, achieving an average project rate above the developer’s expectations.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>100% Sold Out in &lt; 1 Year</span>
              </div>
            </div>

            {/* Outcome 2: Eminence */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Bulk Residential Sales
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Eminence
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Pune Residential Market
                </p>
                <p className="text-xs text-slate-700 leading-relaxed pt-2">
                  Bulk residential sales completed through Estatix. Eminence was not an exclusive project mandate.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Bulk Sales Completed</span>
              </div>
            </div>

            {/* Outcome 3: Hospitality Engagement */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Signed Hospitality Engagement
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  80-Room Hotel
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Alibaug, Maharashtra
                </p>
                <p className="text-xs text-slate-700 leading-relaxed pt-2">
                  A signed hotel brand engagement for a planned 80-room beachside property in Alibaug.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-teal-850 flex items-center gap-1.5">
                <Award className="w-4 h-4 shrink-0 text-brand-accent" />
                <span>Signed Brand Engagement</span>
              </div>
            </div>

            {/* Outcome 4: Ongoing Planning */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 inline-block">
                  Ongoing Advisory
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Aviation / FTO
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Airmanship Academy
                </p>
                <p className="text-xs text-slate-700 leading-relaxed pt-2">
                  Estatix planned the business; the institutional aviation venture remains an active engagement under process.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                <Clock className="w-4 h-4 shrink-0 text-teal-800" />
                <span>Business Planning in Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPROACH: HOW ESTATIX WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="Our Working Approach"
              title="A Disciplined Journey from Land to Execution"
              subtitle="Real estate is too often reduced to aggressive brokerage. At Estatix, we operate as strategic advisors who understand land mechanics, development economics, and buyer behavior."
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              From evaluating an investment to supporting a developer’s sales mandate, our approach connects client requirements with practical execution.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-900 hover:text-teal-700"
              >
                <span>Read More About Our Principles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle space-y-2">
              <span className="text-xs font-bold text-brand-accent tracking-widest font-mono">01.</span>
              <h4 className="text-sm font-bold text-slate-900">Understanding Client Requirements</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Listening deeply to financial parameters, cash flow expectations, and timelines before recommending products.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle space-y-2">
              <span className="text-xs font-bold text-brand-accent tracking-widest font-mono">02.</span>
              <h4 className="text-sm font-bold text-slate-900">Evaluating Opportunities</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Screening micro-market inventory, municipal permissions, title clarity, and competitor benchmarks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle space-y-2">
              <span className="text-xs font-bold text-brand-accent tracking-widest font-mono">03.</span>
              <h4 className="text-sm font-bold text-slate-900">Positioning Products for Market</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Framing compelling buyer propositions, pricing segments, and marketing collateral aligned with realistic buyer demand.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle space-y-2">
              <span className="text-xs font-bold text-brand-accent tracking-widest font-mono">04.</span>
              <h4 className="text-sm font-bold text-slate-900">Coordinating Execution</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobilizing channel partners, managing site visit teams, and conducting transparent buyer presentations.
              </p>
            </div>

            <div className="sm:col-span-2 bg-teal-900 text-white p-5 rounded-xl border border-teal-800 shadow-corporate space-y-2">
              <span className="text-xs font-bold text-brand-accent tracking-widest font-mono">05.</span>
              <h4 className="text-sm font-bold text-white">Supporting Transactions & Collections</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Managing end-to-end documentation coordination, banker alignment, stage-wise builder collections, and clear post-booking assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES USING AUTHENTIC PHOTOGRAPHS */}
      <section className="bg-teal-950 text-white py-20 border-y border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              dark
              badge="Case Studies"
              title="Featured Engagements & Mandates"
              subtitle="Explore selected project engagements across Pune and Maharashtra."
            />
            <Link
              to="/our-work"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accentLight shrink-0"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-teal-900/90 rounded-xl overflow-hidden border border-teal-800/80 shadow-corporate flex flex-col justify-between group hover:border-brand-accent/50 transition-all duration-200"
              >
                <div>
                  <div className="relative h-56 w-full bg-teal-950 overflow-hidden">
                    <img loading="lazy"
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-teal-950/85 text-brand-accent text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-teal-800">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] text-slate-400 font-medium">
                      {study.location}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-teal-800/60 mt-4">
                  <button
                    onClick={() => setSelectedCaseStudy(study)}
                    className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership"
          title="Meet the Founders"
          subtitle="Direct accountability and leadership on every engagement. Adarsh Chouksey and Kevin John bring complementary strengths across transaction strategy and brand execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {leadershipMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle hover:shadow-corporate transition-all duration-200 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden bg-teal-900 shrink-0 border border-slate-200 shadow-sm">
                <img loading="lazy"
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-teal-850 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
                <a href={`tel:${member.phone}`} className="inline-flex py-2 text-sm font-semibold text-teal-800 underline underline-offset-4" aria-label={`Call ${member.name} on ${member.phoneDisplay}`}>{member.name.split(' ')[0]} · {member.phoneDisplay}</a>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Core Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.slice(0, 3).map((fa, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded"
                      >
                        {fa}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CHANNEL PARTNERS & EVENT PREVIEW */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Partner Ecosystem"
                title="A Trusted Distribution Network for Developers"
                subtitle="We do not operate as an isolated brokerage. Estatix nurtures, briefs, and trains an active community of regional channel partners across Pune."
              />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By organizing transparent project walk-throughs, structured commercial terms, and dedicated on-site closing support, we turn regional property consultants into motivated advocates for developer mandates.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/channel-partners#register"
                  className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Register as a Channel Partner
                </Link>
                <Link
                  to="/channel-partners"
                  className="px-5 py-3 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Learn About Onboarding
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-corporate bg-teal-950">
                <img loading="lazy"
                  src="/assets/events/channel-partner-western-breeze.jpg"
                  alt="Estatix Channel Partner Event"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-4 bg-teal-950/95 text-white border-t border-teal-800/80">
                  <p className="text-xs font-semibold text-brand-accent">
                    Channel Partner Engagement
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Estatix leadership hosting regional brokers and developer partners at a project briefing showcase in Pune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CONSULTATION INVITATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden border border-teal-800 shadow-elevated">
          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widestBrand text-brand-accent block">
              BEGIN YOUR JOURNEY WITH ESTATIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans">
              Looking for Trusted Real Estate Direction in Pune?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are evaluating an investment, exploring a land parcel, or seeking a mandate partner for your development, schedule a focused conversation with our advisory team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenConsultation('consultation')}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-150 shadow-md"
              >
                Book a Consultation
              </button>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-150 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={siteConfig.contact.callUrl}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-400 hover:border-white text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              Office: {siteConfig.contact.officeAddress.full}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => onOpenConsultation('consultation')}
      />
    </div>
  );
};
