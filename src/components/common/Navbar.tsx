import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-teal-950 text-slate-300 text-xs border-b border-teal-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Pune & Maharashtra Real Estate Advisory
            </span>
            <span className="h-3 w-px bg-teal-800" />
            <span className="text-brand-accent tracking-wider uppercase font-semibold text-[11px]">
              {siteConfig.tagline}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.contact.callUrl}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="h-3 w-px bg-teal-800" />
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Advisory</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-teal-900/98 backdrop-blur-md shadow-corporate border-b border-teal-800/80 py-3'
            : 'bg-teal-900 border-b border-teal-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Estatix Home">
            <div className="h-10 sm:h-11 flex items-center">
              <img
                src="/assets/logo/estatix-logo-white.png"
                alt="Estatix Property Consultants"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4" aria-label="Main Navigation">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/for-investors"
              className={`text-sm font-medium transition-colors ${
                isActive('/for-investors')
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              For Investors
            </Link>

            {/* Services Dropdown */}
            <Link to="/properties" className={`text-sm font-medium transition-colors ${isActive('/properties') ? 'text-brand-accent font-semibold' : 'text-slate-200 hover:text-white'}`}>Properties</Link>
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive('/services')
                    ? 'text-brand-accent font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(event) => { if (event.key === 'Escape') setServicesOpen(false); }}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2.5 text-slate-800">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Specialist Real Estate Services
                      </span>
                    </div>
                    {siteConfig.navigation.services.map((svc) => (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-teal-900 flex items-center justify-between">
                          <span>{svc.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-teal-900 transition-opacity" />
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                          {svc.description}
                        </p>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                      <Link
                        to="/services"
                        className="text-xs font-semibold text-teal-900 hover:text-teal-700 flex items-center gap-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/our-work"
              className={`text-sm font-medium transition-colors ${
                isActive('/our-work')
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/channel-partners"
              className={`text-sm font-medium transition-colors ${
                isActive('/channel-partners')
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Channel Partners
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-brand-accent font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3.5">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-400 hover:text-emerald-300 hover:bg-white/10 rounded-lg transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accentLight text-teal-950 font-semibold text-xs tracking-wider uppercase rounded-lg transition-all duration-150 shadow-sm hover:shadow active:scale-98"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-brand-accent text-teal-950 text-xs font-bold uppercase rounded-md tracking-wider"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-teal-950/98 text-white p-6 overflow-y-auto xl:hidden">
          <nav className="space-y-4 pb-12">
            <Link
              to="/"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              About Estatix
            </Link>
            <Link
              to="/for-investors"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              For Investors
            </Link>

            <div className="border-b border-teal-900 pb-3">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider block mb-2">
                Specialist Services
              </span>
              <div className="space-y-2 pl-3">
                {siteConfig.navigation.services.map((svc) => (
                  <Link
                    key={svc.href}
                    to={svc.href}
                    className="block text-sm text-slate-300 hover:text-white py-1"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/our-work"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              Our Work
            </Link>
            <Link
              to="/channel-partners"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              Channel Partners
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2"
            >
              Contact Us
            </Link>
            <Link to="/properties" className="block text-lg font-medium text-slate-200 hover:text-brand-accent border-b border-teal-900 pb-2">Properties & Opportunities</Link>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-brand-accent text-teal-950 font-bold uppercase text-xs tracking-wider rounded-lg text-center"
              >
                Book a Consultation
              </button>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Advisory (+91 7000489767)
              </a>

              <a
                href={siteConfig.contact.callUrl}
                className="w-full py-3 border border-slate-700 text-slate-200 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                Call +91 7000489767
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
