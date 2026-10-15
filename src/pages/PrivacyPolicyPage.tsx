import { siteConfig } from '../config/siteConfig';
export function PrivacyPolicyPage() {
 return <article className="max-w-3xl mx-auto px-6 py-20 space-y-8 text-slate-700 leading-relaxed">
 <header><p className="text-sm uppercase tracking-widest text-teal-700 mb-3">Estatix</p><h1 className="text-4xl font-semibold text-teal-900">Privacy & Enquiries</h1><p className="mt-4">Updated 15 October 2026</p></header>
 <section><h2 className="text-xl font-semibold mb-3">Details you choose to share</h2><p>Our forms let you submit a consultation, property, land, or channel partner enquiry. Depending on the form, you can enter your name, phone, optional email, preferred contact time, property details, or business information.</p></section>
 <section><h2 className="text-xl font-semibold mb-3">How your enquiry reaches us</h2><p>When you submit a form, the details are processed and stored through Netlify Forms so Estatix can review and respond to your enquiry. Enquiry records are accessed through our team’s hosting dashboard and are not published on the website or stored in the public GitHub repository. WhatsApp is optional and subject to its own privacy terms. Avoid submitting confidential documents or sensitive personal information.</p></section>
 <section><h2 className="text-xl font-semibold mb-3">Contact permission</h2><p>The contact checkbox allows us to respond about your enquiry. A preferred consultation time is a request, not a confirmed booking. To ask about information you have sent, correct details, or request that we stop contacting you, call or message us.</p></section>
 <section><h2 className="text-xl font-semibold mb-3">External services</h2><p>Social, map, and WhatsApp links open external services. Website fonts may be requested from Google Fonts. This version includes no advertising trackers or analytics scripts.</p></section>
 <section className="border-t pt-6"><h2 className="text-xl font-semibold mb-3">Contact Estatix</h2><p>{siteConfig.legalName}</p><p>{siteConfig.contact.officeAddress.full}</p><a className="underline" href={siteConfig.contact.callUrl}>{siteConfig.contact.phoneDisplay}</a></section>
 </article>;
}
