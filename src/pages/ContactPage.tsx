import { EnquiryReady } from '../components/common/EnquiryReady';
import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../components/common/SocialIcons';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { ConsultationFormData, EnquiryCategory } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'consultation',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    notes: '',
    consent: false,
    sourcePage: 'Contact Page',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^(?:91)?[6-9][0-9]{9}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.consent) errs.consent = 'Your consent is required to contact you.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="bg-teal-900 text-white py-16 sm:py-24 border-b border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widestBrand text-brand-accent block">
              GET IN TOUCH WITH ESTATIX
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans leading-tight">
              Connect with Our Advisory Team in Pune
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are an investor evaluating a micro-market, a developer with an upcoming mandate, or a landowner seeking monetization options, we look forward to a focused conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & CONSULTATION FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-850">
                PUNE HEADQUARTERS
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-sans">
                Office & Location
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our advisory lounge is centrally located in East Pune at Bramhacorp Business Park, accessible from Kalyani Nagar, Viman Nagar, and Kharadi.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-850 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">
                    Bramhacorp Business Park
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    610, Bramhacorp Business Park, Wadgaon Sheri, Pune, Maharashtra 411014.
                  </p>
                  <a
                    href={siteConfig.contact.officeAddress.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-850 hover:underline pt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Advisory Desk Phone:</span>
                  <a
                    href={siteConfig.contact.callUrl}
                    className="font-semibold text-slate-900 hover:text-teal-850 transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">WhatsApp Desk:</span>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 hover:underline"
                  >
                    +91 7000489767
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Official Media Channels
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-colors shadow-subtle text-xs font-medium"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>@estatix.in on Instagram</span>
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-colors shadow-subtle text-xs font-medium"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-600" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-300 shadow-corporate overflow-hidden">
              <div className="bg-teal-900 text-white p-6 sm:p-8">
                <span className="text-[11px] font-bold uppercase tracking-widestBrand text-brand-accent block mb-1">
                  CONSULTATION REQUEST
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans">
                  Request a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Requested consultation times are confirmed directly by our advisory team. We review every brief prior to scheduling.
                </p>
              </div>

              {submitted ? (
<EnquiryReady data={formData} onReset={() => setSubmitted(false)} />
) : (
<form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Deshmukh"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
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
                      <label htmlFor="contactEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label htmlFor="contactType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Enquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contactType"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as EnquiryCategory })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                      >
                        <option value="consultation">General Property Advisory</option>
                        <option value="investment">Real Estate Investment Advisory</option>
                        <option value="homebuyer">Homebuyer Search & Verification</option>
                        <option value="mandate_sales">Developer Mandate Sales</option>
                        <option value="plotted_development">Plotted Development Planning</option>
                        <option value="land_parcel">Land Parcel Monetization</option>
                        <option value="hospitality">Hospitality Consulting Opportunity</option>
                        <option value="channel_partner">Channel Partner Onboarding</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="contactSlot" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Contact Slot <span className="text-slate-400 font-normal">(Subject to confirmation)</span>
                    </label>
                    <select
                      id="contactSlot"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="contactNotes" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Message or Requirement
                    </label>
                    <textarea
                      id="contactNotes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share micro-market, budget or specific questions..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
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
                        I consent to Estatix contacting me via phone, WhatsApp, or email regarding this enquiry.
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
                      {isSubmitting ? 'Preparing...' : 'Review & Continue on WhatsApp'}
                    </button>
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
