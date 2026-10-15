import { submitEnquiry } from './submitEnquiry';
import { useDialog } from './useDialog';
import { EnquiryReady } from './EnquiryReady';
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ConsultationFormData, EnquiryCategory } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEnquiryType?: EnquiryCategory;
  sourceContext?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultEnquiryType = 'consultation',
  sourceContext = 'General Consultation',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: defaultEnquiryType,
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    notes: '',
    consent: false,
    sourcePage: sourceContext,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
      setFormData(previous => ({...previous, enquiryType: defaultEnquiryType, sourcePage: sourceContext}));
    }
  }, [isOpen, defaultEnquiryType, sourceContext]);
  const dialogRef = useDialog(isOpen, onClose);
  if (!isOpen) return null;

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
    if (!formData.consent) {
      errs.consent = 'Your consent is required to contact you.';
    }
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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      enquiryType: defaultEnquiryType,
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      notes: '',
      consent: false,
      sourcePage: sourceContext,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start sm:items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90dvh] overflow-y-auto border border-slate-200"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-teal-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widestBrand text-brand-accent font-semibold block mb-1">
              ESTATIX ADVISORY
            </span>
            <h2 id="modal-title" className="text-xl font-bold font-sans">
              Book an Advisory Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
<EnquiryReady data={formData} onReset={() => setSubmitted(false)} />
) : (
<form onSubmit={handleSubmit} className="p-6 space-y-4">
<p hidden><label>Leave this empty<input name="website" autoComplete="off" tabIndex={-1} /></label></p>
{errors.submit && <p role="alert" className="text-sm text-red-700">{errors.submit}</p>}
            <p className="text-xs text-slate-600 leading-relaxed">
              Share your details below. Your enquiry is saved securely for our team to review.
            </p>

            {/* Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-teal-800`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-teal-800`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Enquiry Category */}
            <div>
              <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Enquiry Category <span className="text-red-500">*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as EnquiryCategory })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
              >
                <option value="residential_sales">High-End Residential Sales</option>
<option value="consultation">General Strategic Advisory</option>
                <option value="investment">Real Estate Investment Advisory</option>
                <option value="mandate_sales">Developer Mandate Sales & Marketing</option>
                <option value="plotted_development">Plotted Development Planning & Sales</option>
                <option value="land_parcel">Land Parcel Monetization & Acquisition</option>
                <option value="hospitality">Hospitality Concept & Brand Operator Fit</option>
                <option value="channel_partner">Channel Partner Network Onboarding</option>
              </select>
            </div>

            {/* Preferred Time */}
            <div>
              <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Preferred Contact Slot <span className="text-slate-400 font-normal">(Subject to confirmation)</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
              >
                <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                * Note: Requested slot is subject to advisor schedule confirmation.
              </p>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Brief Requirement Details <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Micro-market, budget range, or specific developer brief..."
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded text-teal-900 focus:ring-teal-800"
                />
                <span>
                  I consent to Estatix Property Consultants contacting me via phone, WhatsApp, or email regarding this enquiry.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
            </div>

            {/* Submit & Alternatives */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex-1 px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            <div className="text-center pt-1">
              <a 
                href={siteConfig.contact.callUrl}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Or call directly at {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
