import { pageMetadata, siteOrigin } from './config/seo';
import { OpportunityPage } from './pages/OpportunityPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { caseStudies } from './data/caseStudies';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, StaticRouter } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileContactBar } from './components/common/MobileContactBar';
import { ConsultationModal } from './components/common/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { MandateSalesPage } from './pages/MandateSalesPage';
import { PlottingDevelopmentPage } from './pages/PlottingDevelopmentPage';
import { LandMonetizationPage } from './pages/LandMonetizationPage';
import { HospitalityConsultingPage } from './pages/HospitalityConsultingPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { ChannelPartnersPage } from './pages/ChannelPartnersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { EnquiryCategory } from './types';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0, 0);
    const [title,description] = pageMetadata[pathname] || ['Page not found | Estatix','Explore Estatix real estate services in Pune and Maharashtra.'];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content',description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content',title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href',siteOrigin+pathname);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content',siteOrigin+pathname);
  }, [pathname, hash]);
  return null;
}

export function App({initialPath}: {initialPath?:string} = {}) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationType, setConsultationType] = useState<EnquiryCategory>('consultation');
  const [sourceContext, setSourceContext] = useState<string>('General Advisory');

  const openConsultation = (type: EnquiryCategory = 'consultation', context: string = 'Website') => {
    setConsultationType(type);
    setSourceContext(context);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const content = (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-teal-900 selection:text-white pb-14 md:pb-0">
        <Navbar onOpenConsultation={() => openConsultation('consultation', 'Navbar')} />

        <a href="#main-content" className="skip-link">Skip to content</a>
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={(type) => openConsultation(type || 'consultation', 'Home Page')} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={() => openConsultation('consultation', 'About Page')} />} />
            <Route path="/for-investors-homebuyers" element={<Navigate to="/for-investors" replace />} />
            <Route path="/for-investors" element={<InvestorsPage onOpenConsultation={(type) => openConsultation(type, 'Investors Page')} />} />
            <Route path="/services" element={<ServicesIndexPage onOpenConsultation={() => openConsultation('consultation', 'Services Hub')} />} />
            <Route path="/services/mandate-sales" element={<MandateSalesPage onOpenConsultation={() => openConsultation('mandate_sales', 'Mandate Sales Page')} />} />
            <Route path="/services/plotting-development" element={<PlottingDevelopmentPage onOpenConsultation={() => openConsultation('plotted_development', 'Plotting Development Page')} />} />
            <Route path="/services/land-monetization" element={<LandMonetizationPage onOpenConsultation={() => openConsultation('land_parcel', 'Land Monetization Page')} />} />
            <Route path="/services/hospitality-consulting" element={<HospitalityConsultingPage onOpenConsultation={() => openConsultation('hospitality', 'Hospitality Consulting Page')} />} />
            <Route path="/land-opportunities" element={<OpportunityPage kind="land" onOpenConsultation={()=>openConsultation('land_parcel','Land JV & Outright Sale')} />} />
            <Route path="/services/high-end-residential-sales" element={<OpportunityPage kind="residential" onOpenConsultation={()=>openConsultation('residential_sales','High-End Residential Sales')} />} />
            <Route path="/our-work" element={<OurWorkPage onOpenConsultation={() => openConsultation('consultation', 'Our Work Page')} />} />
            <Route path="/our-work/:slug" element={<CaseStudyPage onOpenConsultation={() => openConsultation('consultation', 'Case Study')} />} />
            <Route path="/channel-partners" element={<ChannelPartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Unobtrusive mobile contact bar */}
        <MobileContactBar onOpenConsultation={() => openConsultation('consultation', 'Mobile Bar')} />

        {/* Central consultation dialog */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={closeConsultation}
          defaultEnquiryType={consultationType}
          sourceContext={sourceContext}
        />
      </div>
    </>
  );
  return initialPath ? <StaticRouter location={initialPath}>{content}</StaticRouter> : <BrowserRouter>{content}</BrowserRouter>;
}

export default App;
