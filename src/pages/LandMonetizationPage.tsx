import { EnquiryReady } from '../components/common/EnquiryReady';
import React, { useState } from 'react';
import { 
  Landmark, 
  Handshake, 
  FileSearch, 
  Calculator, 
  ShieldCheck, 
  Building, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  MessageSquare,
  Clock,
  Phone
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { LandSubmissionFormData } from '../types';

interface LandMonetizationPageProps {
  onOpenConsultation: () => void;
}

export const LandMonetizationPage: React.FC<LandMonetizationPageProps> = ({
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState<LandSubmissionFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    areaSize: '',
    ownershipStatus: 'Sole Owner',
    description: '',
    consent: false,
    sourcePage: 'Land Monetization Page',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^(?:91)?[6-9][0-9]{9}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.location.trim()) errs.location = 'Please specify the land parcel location.';
    if (!formData.areaSize.trim()) errs.areaSize = 'Please specify approximate area (e.g. 2 Acres, 10 Gunthas).';
    if (!formData.consent) errs.consent = 'Your consent is required to review this parcel.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  };

  const monetizationModels = [
    {
      title: 'Joint Development Agreement (JDA)',
      desc: 'The landowner contributes land while a vetted Grade-A developer finances, builds, and markets the project. Proceeds or built-up area are shared based on negotiated ratios.',
      benefit: 'Ideal for maximizing total financial return while retaining prime built-up inventory.',
    },
    {
      title: 'Outright Sale / Direct Monetization',
      desc: 'Immediate cash realization for the entire parcel. Estatix evaluates fair market value, prepares the pitch brief, and conducts targeted negotiations with institutional buyers.',
      benefit: 'Ideal for landowners prioritizing immediate liquidity and zero development exposure.',
    },
    {
      title: 'Joint Venture (JV) / Special Purpose Entity',
      desc: 'Co-equity partnership for large-scale townships, plotted communities, or commercial parks, structured with legal frameworks protecting title and distribution priority.',
      benefit: 'Structured for multi-acre institutional holdings seeking phased high-yield returns.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-800 border border-teal-700 text-xs font-semibold text-brand-accent tracking-widestBrand uppercase">
              LANDOWNER ADVISORY & TRANSACTION SUPPORT
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Land Monetization & Acquisition
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Unlocking optimal financial value for land parcels across Pune and Maharashtra. From development feasibility and joint development structuring to risk-mitigating due diligence and direct builder matchmaking.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#submit-land"
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Submit a Land Parcel</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Land Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MONETIZATION MODELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Strategic Pathways"
          title="Monetization Structures for Landowners"
          subtitle="Every land parcel possesses distinct zoning, access, and capital characteristics. We analyze your commercial requirements to recommend the most advantageous transaction structure."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {monetizationModels.map((model, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-corporate transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-850 bg-teal-50 px-2.5 py-1 rounded inline-block">
                  Option 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  {model.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {model.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-teal-950 font-medium">
                <span className="font-semibold text-slate-900">Key Advantage: </span>
                {model.benefit}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DUE DILIGENCE & RISK REDUCTION */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Risk Mitigation"
                title="Due Diligence that Protects Transactions"
                subtitle="In land transactions, unverified claims cause costly disputes. Estatix coordinates due diligence with qualified legal advocates and municipal planning engineers to identify and resolve issues early."
              />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We coordinate relevant title, ownership, planning, and approval reviews with qualified legal and technical specialists. The scope depends on the parcel and the proposed transaction.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Revenue & mutation entry search conducted with legal specialists</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zoning and FSI potential verification (Residential, Commercial, Agricultural)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Physical boundary demarkation & road access validation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-3">
                <div className="relative rounded-lg overflow-hidden border border-slate-200 h-64 bg-slate-100">
                  <img loading="lazy"
                    src="/assets/projects/plotted-masterplan-layout.png"
                    alt="Illustrative plotted development planning material"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-teal-950/90 text-white p-2.5 rounded text-[11px] backdrop-blur-sm">
                    Illustrative planning material. Legal and technical reviews are coordinated separately for each parcel.
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  Planning material shown for illustration; parcel-specific reviews require relevant legal and technical documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAND SUBMISSION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="submit-land">
        <div className="bg-white rounded-2xl border border-slate-300 shadow-corporate overflow-hidden">
          <div className="bg-teal-900 text-white p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-widestBrand text-brand-accent block mb-1">
              DIRECT LANDOWNER PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans">
              Submit a Land Parcel for Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Prepare the details of your land parcel below, then review and send your enquiry through WhatsApp to discuss evaluation and monetization options.
            </p>
          </div>

          {submitted ? (
<EnquiryReady data={formData} onReset={() => setSubmitted(false)} />
) : (
<form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="landName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="landName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Suresh Patil"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="landPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="landPhone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="landEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="landEmail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                  />
                </div>

                {/* Ownership Status */}
                <div>
                  <label htmlFor="landStatus" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Ownership / Representative Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="landStatus"
                    value={formData.ownershipStatus}
                    onChange={(e) => setFormData({ ...formData, ownershipStatus: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                  >
                    <option value="Sole Owner">Sole Landowner</option>
                    <option value="Joint Owner">Joint Family / Co-Owner</option>
                    <option value="Authorized Representative">Authorized Power of Attorney / Representative</option>
                    <option value="Mandated Broker">Mandated Advisory Representative</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div>
                  <label htmlFor="landLoc" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Land Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="landLoc"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Wagholi, Fursungi, Uruli, Alibaug"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.location ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                </div>

                {/* Approximate Area */}
                <div>
                  <label htmlFor="landArea" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Approximate Area & Unit <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="landArea"
                    value={formData.areaSize}
                    onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                    placeholder="e.g. 3.5 Acres or 25 Gunthas"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.areaSize ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.areaSize && <p className="text-xs text-red-500 mt-1">{errors.areaSize}</p>}
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <label htmlFor="landDesc" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Description & Preferred Monetization Goal
                </label>
                <textarea
                  id="landDesc"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mention road frontage, current zoning (R-zone / agricultural), whether seeking JDA or outright sale..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-teal-900 focus:ring-teal-800"
                  />
                  <span>
                    I confirm that I am the owner or authorized representative for this parcel and consent to Estatix contacting me for evaluation purposes.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm disabled:opacity-70"
                >
                  Review & Continue on WhatsApp
                </button>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
