import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, FileText, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-950 text-slate-300 border-t border-teal-900/80">
      {/* Upper Footer: Value Proposition & Quick Enquiries */}
      <div className="border-b border-teal-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1 & 2: Brand Information */}
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="inline-block" aria-label="Estatix Home">
                <img
                  src="/assets/logo/estatix-logo-white.png"
                  alt="Estatix Property Consultants LLP"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-brand-accent text-xs font-semibold tracking-widestBrand uppercase">
                {siteConfig.tagline}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                A Pune-based real estate advisory and project management company bridging land, development strategy, branding, marketing, and disciplined sales execution across Maharashtra.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-teal-900/80 hover:bg-teal-800 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-teal-800/80"
                  aria-label="Estatix on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-teal-900/80 hover:bg-teal-800 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-teal-800/80"
                  aria-label="Estatix on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.brochure.downloadUrl}
                  download="Estatix_Corporate_Brochure.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-900/80 hover:bg-teal-800 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-teal-800/80"
                >
                  <FileText className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Corporate Brochure PDF</span>
                </a>
              </div>
            </div>

            {/* Col 3: Audiences */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Advisory Audiences
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/for-investors-homebuyers" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Real Estate Investors
                  </Link>
                </li>
                <li>
                  <Link to="/for-investors-homebuyers" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Homebuyers & Families
                  </Link>
                </li>
                <li>
                  <Link to="/services/mandate-sales" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Residential & Commercial Developers
                  </Link>
                </li>
                <li>
                  <Link to="/services/land-monetization" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Landowners & Families
                  </Link>
                </li>
                <li>
                  <Link to="/services/hospitality-consulting" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Hospitality Developers & Operators
                  </Link>
                </li>
                <li>
                  <Link to="/channel-partners" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Channel Partner Network
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Specialist Services */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Specialist Services
              </h3>
              <ul className="space-y-2.5 text-xs">
                {siteConfig.navigation.services.map((svc) => (
                  <li key={svc.href}>
                    <Link to={svc.href} className="text-slate-400 hover:text-brand-accent transition-colors">
                      {svc.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/our-work" className="text-slate-400 hover:text-brand-accent transition-colors">
                    Selected Mandates & Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact Information */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Pune Office
              </h3>
              <div className="space-y-3.5 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-200 font-medium">Bramhacorp Business Park</p>
                    <p>610, Wadgaon Sheri, Pune, Maharashtra 411014</p>
                    <a
                      href={siteConfig.contact.officeAddress.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-brand-accent hover:underline mt-1"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href={siteConfig.contact.callUrl} className="hover:text-white transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    WhatsApp Advisory Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Legal Disclosure & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-slate-500">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-teal-900/60 pb-6 mb-6">
          <p className="max-w-3xl leading-relaxed text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300">Regulatory & Advisory Notice:</span> Estatix Property Consultants LLP provides strategic real estate advisory, mandate project sales, and development coordination. All project representations reflect company-managed mandates or advisory scopes. Due diligence is performed in coordination with qualified legal and technical professionals to identify and mitigate transaction risks; it does not constitute a statutory guarantee against all conceivable disputes. Feasibility studies and projections are prepared based on stated market assumptions and do not guarantee future commercial yields.
          </p>
          <div className="shrink-0 text-[11px] text-slate-400">
            <span>Primary Market: </span>
            <span className="text-slate-300 font-medium">{siteConfig.primaryMarket}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Directions
            </Link>
            <a
              href={siteConfig.brochure.downloadUrl}
              download="Estatix_Corporate_Brochure.pdf"
              className="text-brand-accent hover:underline"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
