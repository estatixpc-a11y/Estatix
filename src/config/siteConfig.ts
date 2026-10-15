/**
 * Estatix Property Consultants LLP - Central Configuration
 * All contact details, URLs, social handles, and integration flags
 * are centralized here for easy maintenance.
 */

export interface SiteConfig {
  brandName: string;
  legalName: string;
  tagline: string;
  headline: string;
  supportingCopy: string;
  primaryMarket: string;
  domain: {
    preferred: string;
    status: 'intended_subject_to_availability' | 'active';
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappUrl: string;
    callUrl: string;
    officeAddress: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      full: string;
      mapUrl: string;
    };
    email: {
      address: string | null; // Currently undecided per brief; null prevents broken mailto links
      status: 'pending_confirmation';
    };
  };
  social: {
    instagram: string;
    youtube: string;
    linkedin: {
      url: string | null; // Supporter admin URL withheld; pending public company page URL
      label: string;
    };
  };
  navigation: {
    main: Array<{ name: string; href: string }>;
    services: Array<{ name: string; href: string; description: string }>;
  };
  brochure: {
    downloadUrl: string;
    available: boolean;
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'Estatix',
  legalName: 'Estatix Property Consultants LLP',
  tagline: 'From Land to Lasting Value.',
  headline: 'From Land to Lasting Value.',
  supportingCopy:
    'Mandate sales and project execution for developers. Investment evaluation, land opportunities, and high-end residential sales across Pune and Maharashtra.',
  primaryMarket: 'Pune and Maharashtra',
  domain: {
    preferred: 'estatix.io',
    status: 'active',
  },
  contact: {
    phone: '+917000489767',
    phoneDisplay: '+91 7000489767',
    whatsappNumber: '917000489767',
    whatsappUrl: 'https://wa.me/917000489767?text=Hello%20Estatix%2C%20I%20would%20like%20to%20discuss%20a%20property%20consultation.',
    callUrl: 'tel:+917000489767',
    officeAddress: {
      line1: '610, Bramhacorp Business Park',
      line2: 'Wadgaon Sheri',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411014',
      full: '610, Bramhacorp Business Park, Wadgaon Sheri, Pune, Maharashtra 411014.',
      mapUrl: 'https://maps.google.com/?q=Bramhacorp+Business+Park+Wadgaon+Sheri+Pune',
    },
    email: {
      address: null, // Note: adarshchouksey@estatix.in discontinued; new address pending confirmation
      status: 'pending_confirmation',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/estatix.in/',
    youtube: 'https://www.youtube.com/channel/UC2qknKTmKOdU2WGhcM8IO6w',
    linkedin: {
      url: null, // Public company-page URL pending confirmation
      label: 'LinkedIn Page Pending',
    },
  },
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'For Investors', href: '/for-investors' },
      { name: 'Services', href: '/services' },
      { name: 'Our Work', href: '/our-work' },
      { name: 'Channel Partners', href: '/channel-partners' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'High-End Residential Sales', href: '/services/high-end-residential-sales', description: 'Premium residential sales, investment selection, buyer advisory, and bulk sales coordination.' },
      { name: 'Land for JV & Outright Sale', href: '/land-opportunities', description: 'Land opportunities for developers, investors, and joint venture partners.' },
      {
        name: 'Mandate Sales & Project Marketing',
        href: '/services/mandate-sales',
        description: 'End-to-end sales execution, project positioning, CP activation, and revenue coordination for developers.',
      },
      {
        name: 'Plotting Development & Planning',
        href: '/services/plotting-development',
        description: 'Plotted layout planning support, product conceptualization, buyer positioning, and launch strategy.',
      },
      {
        name: 'Land Monetization & Acquisition',
        href: '/services/land-monetization',
        description: 'Landowner monetization strategies, JV/outright matchmaking, commercial evaluation, and risk due diligence.',
      },
      {
        name: 'Hospitality Consulting',
        href: '/services/hospitality-consulting',
        description: 'Hospitality land feasibility, concept positioning, brand/operator matchmaking, and development advisory.',
      },
    ],
  },
  brochure: {
    downloadUrl: '/assets/brochure/Estatix_Corporate_Brochure.pdf',
    available: false,
  },
};
