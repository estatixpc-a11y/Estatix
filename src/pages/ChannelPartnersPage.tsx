import { submitEnquiry } from '../components/common/submitEnquiry';
import { EnquiryReady } from '../components/common/EnquiryReady';
import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  CheckCircle, 
  GraduationCap, 
  Handshake, 
  MessageSquare, 
  Building2, 
  FileText, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { ChannelPartnerFormData } from '../types';

export const ChannelPartnersPage: React.FC = () => {
  const [formData, setFormData] = useState<ChannelPartnerFormData>({
    fullName: '',
    businessName: '',
    city: 'Pune',
    phone: '',
    email: '',
    experienceSummary: '',
    consent: false,
    sourcePage: 'Channel Partners Page',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or agency name.';
    if (!formData.city.trim()) errs.city = 'Please enter your primary operating city.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^(?:91)?[6-9][0-9]{9}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.consent) errs.consent = 'Your consent is required to register as a partner.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    if (isSubmitting) return;
    setIsSubmitting(true);
    try { await submitEnquiry(formData, e.currentTarget); setSubmitted(true); }
    catch(error) {setErrors(previous=>({...previous, submit:error instanceof Error?error.message:'Unable to save. Please try again.'}));}
    finally {setIsSubmitting(false);}
  };

  const onboardingSteps = [
    {
      step: '01',
      title: 'Partner Registration & RERA Verification',
      desc: 'Independent real estate brokers, consultancy firms, and wealth advisors submit credentials and regional operating focus.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Direct Project Briefings & Material Kit',
      desc: 'Registered partners receive transparent project master plans, floor layouts, sanctioned RERA numbers, and verified price sheets.',
      icon: BookOpen,
    },
    {
      step: '03',
      title: 'Sales Strategy & Micro-Market Training',
      desc: 'We conduct in-person and digital briefings for your team on project positioning, target buyer profiles, and handling client queries.',
      icon: GraduationCap,
    },
    {
      step: '04',
      title: 'On-Ground Site Visit & Closing Support',
      desc: 'Our dedicated Estatix mandate sales managers welcome your clients at the site lounge, deliver professional presentations, and protect your relationship.',
      icon: Handshake,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              ESTATIX CHANNEL PARTNER NETWORK
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              A Professional Distribution Ecosystem for Real Estate Advisors
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Partner with Estatix to access structured developer mandates, verified inventory, transparent project briefs, and dedicated closing coordination across Pune and Maharashtra.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#register"
                className="px-7 py-3.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Register as a Channel Partner</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-slate-400 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Partner Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO CAN JOIN & ONBOARDING JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Onboarding"
          title="How the Estatix Partner Network Operates"
          subtitle="We welcome certified property brokers, corporate wealth managers, and independent real estate consultants seeking direct access to high-velocity project mandates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {onboardingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-accent font-mono">
                      STEP {step.step}
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

      {/* 3. PARTNER ACTIVATION PHOTOGRAPHS & REPUTATION */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Active Network"
                title="Transparent Collaboration with Regional Consultants"
                subtitle="We recognize that channel partners are the lifeblood of real estate distribution in Pune. Our mandate teams ensure your clients receive exceptional care while your commercial alignment remains protected."
              />
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Immediate access to marketing brochures, videos, and price configurations</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent client tagging and registration records at site lounges</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Regular micro-market briefings and builder leadership roundtables</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-corporate">
                <img loading="lazy"
                  src="/assets/events/channel-partner-western-breeze.jpg"
                  alt="Channel Partner Event by Estatix"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-5 bg-teal-950 text-white">
                  <p className="text-xs font-semibold text-brand-accent">
                    Western Breeze Villas Partner Launch
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Authentic photograph: Estatix leadership briefing regional channel partners on project positioning and unit releases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGISTRATION FORM */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="register">
        <div className="bg-white rounded-2xl border border-slate-300 shadow-corporate overflow-hidden">
          <div className="bg-teal-900 text-white p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-widestBrand text-brand-accent block mb-1">
              NETWORK REGISTRATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans">
              Register as an Estatix Channel Partner
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Share your introduction below. Our team will review your registration enquiry and contact you about onboarding.
            </p>
          </div>

          {submitted ? (
<EnquiryReady data={formData} onReset={() => setSubmitted(false)} />
) : (
<form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
<p hidden><label>Leave this empty<input name="website" autoComplete="off" tabIndex={-1} /></label></p>
{errors.submit && <p role="alert" className="text-sm text-red-700">{errors.submit}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="cpName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cpName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Amit Kulkarni"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="cpBiz" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Agency / Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cpBiz"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Kulkarni Real Estate Consultants"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.businessName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City */}
                <div>
                  <label htmlFor="cpCity" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Operating City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cpCity"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Mumbai, Nashik"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.city ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="cpPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="cpPhone"
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

              {/* Email */}
              <div>
                <label htmlFor="cpEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="cpEmail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@agency.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
              </div>

              {/* Experience Summary */}
              <div>
                <label htmlFor="cpExp" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Relevant Experience & Micro-Market Focus
                </label>
                <textarea
                  id="cpExp"
                  rows={3}
                  value={formData.experienceSummary}
                  onChange={(e) => setFormData({ ...formData, experienceSummary: e.target.value })}
                  placeholder="e.g. 5+ years specializing in East Pune residential (Kharadi, Viman Nagar) and weekend plots..."
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
                    I consent to Estatix contacting me regarding channel partner onboarding, project briefings, and distribution opportunities.
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
                  Submit Enquiry
                </button>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
