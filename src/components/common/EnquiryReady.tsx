import React from 'react';
import { siteConfig } from '../../config/siteConfig';
export function EnquiryReady({data, onReset}: {data: object; onReset: () => void}) {
  const names: Record<string,string> = {fullName:'Name', phone:'Phone', email:'Email', enquiryType:'Enquiry', preferredTime:'Preferred contact time', notes:'Requirement', location:'Land location', areaSize:'Approximate area and unit', ownershipStatus:'Ownership', description:'Description', businessName:'Business', city:'City', experienceSummary:'Experience', sourcePage:'Website page'};
  const message = ['Hello Estatix, I would like to discuss an enquiry.', ...Object.entries(data).filter(([key,value])=>key !== 'consent' && value).map(([key,value])=>`${names[key] || key}: ${String(value).replace(/_/g,' ')}`), 'Please contact me regarding this enquiry.'].join('\n');
  const href = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  return <div className="p-6 sm:p-8 space-y-5" role="status">
    <h3 className="text-2xl font-semibold text-teal-900">Your enquiry is ready</h3>
    <p className="text-sm text-slate-600">Review your details, then open WhatsApp and press Send to share them with Estatix. Nothing has been sent yet. Preferred consultation times are subject to confirmation.</p>
    <pre className="whitespace-pre-wrap break-words rounded-lg bg-slate-50 p-4 text-sm font-sans border border-slate-200">{message}</pre>
    <div className="flex flex-wrap gap-3"><a href={href} target="_blank" rel="noopener noreferrer" className="bg-teal-900 text-white px-5 py-3 rounded-lg font-semibold">Continue on WhatsApp</a><button type="button" onClick={onReset} className="border border-slate-300 px-5 py-3 rounded-lg">Edit details</button></div>
    <a href={siteConfig.contact.callUrl} className="text-sm underline">Or call {siteConfig.contact.phoneDisplay}</a>
  </div>;
}
