import { caseStudies } from "../data/caseStudies";
export const pageMetadata: Record<string,[string,string]> = {
  "/properties": ["Entire Buildings for Sale in Viman Nagar, Pune | Estatix", "Explore vacant and leased office buildings for sale in Viman Nagar, Pune. Compare potential uses, preliminary feasibility and possession options. Price on enquiry."],
  "/properties/viman-nagar-independent-building": ["Independent Building for Sale, Viman Nagar Pune | Estatix", "Vacant former college building on an 895 sq. m. plot in Viman Nagar. Explore office, training and conversion feasibility. Price and details on enquiry."],
  "/properties/viman-nagar-leased-building": ["Leased Office Building for Sale, Viman Nagar Pune | Estatix", "Leased back-office building in Viman Nagar with reported rent of ₹4 lakh/month. Review tenancy, owner-occupation options and feasibility. Price on enquiry."],
  "/": [
    "Real Estate Mandate Sales & Land Consultants in Pune | Estatix",
    "Estatix supports developers and investors with mandate sales, land brokerage, JV opportunities, high-end residential sales and hospitality consulting in Pune."
  ],
  "/about": [
    "About Estatix | Real Estate Consultants in Pune",
    "Meet Adarsh Chouksey and Kevin John, Estatix co-founders and managing partners supporting real estate developers, investors and landowners in Maharashtra."
  ],
  "/for-investors": [
    "Real Estate Investment Advisory in Pune | Estatix",
    "Evaluate real estate opportunities, potential returns, costs, risks and exit strategies with Estatix investment advisory in Pune and Maharashtra."
  ],
  "/services": [
    "Real Estate Services in Pune & Maharashtra | Estatix",
    "Explore mandate sales, land consultancy, land brokerage, JV and outright sales, high-end residential sales, plotting and hotel consulting from Estatix."
  ],
  "/services/mandate-sales": [
    "Real Estate Mandate Sales Company in Pune | Estatix",
    "Project positioning, marketing, channel partner sourcing, sales execution and collections coordination for residential and commercial developers in Pune."
  ],
  "/services/plotting-development": [
    "Plotting Development & Planning in Pune | Estatix",
    "Plotted development planning support, positioning, branding, marketing and sales strategy for landowners and developers in Pune and Maharashtra."
  ],
  "/services/land-monetization": [
    "Land Consultants & Land Brokers in Pune | Estatix",
    "Land acquisition, monetization, developer matching and due diligence coordination for JV, joint development and outright-sale transactions in Maharashtra."
  ],
  "/land-opportunities": [
    "Land for JV & Outright Sale in Pune | Estatix",
    "Discuss land opportunities for joint ventures, joint development and outright sale with Estatix. Serving developers, investors and landowners in Maharashtra."
  ],
  "/services/hospitality-consulting": [
    "Hospitality & Hotel Consultants in Pune | Estatix",
    "Hotel and resort consulting: land suitability, brand and operator fit, development cost assessment and revenue feasibility across Pune and Maharashtra."
  ],
  "/services/high-end-residential-sales": [
    "High-End Residential Property Sales in Pune | Estatix",
    "Premium residential sales, property selection, investment evaluation and bulk selling for buyers, investors and developers across Pune and Maharashtra."
  ],
  "/our-work": [
    "Mandate Sales, Bulk Sales & Hospitality Work | Estatix",
    "Explore the Ekaant sales mandate, Eminence bulk residential sales, signed hospitality engagement and selected Estatix advisory work."
  ],
  "/channel-partners": [
    "Real Estate Channel Partner Network in Pune | Estatix",
    "Connect with Estatix for channel partner onboarding, project briefings, training and sales coordination across Pune and Maharashtra."
  ],
  "/contact": [
    "Contact Estatix | Adarsh & Kevin, Pune",
    "Speak with Adarsh on +91 7000489767 or Kevin on +91 93733 57620. Visit Estatix at Bramhacorp Business Park, Wadgaon Sheri, Pune."
  ],
  "/privacy": [
    "Privacy & Enquiries | Estatix",
    "Learn how Estatix collects enquiry details through Netlify Forms and how to contact us about your information."
  ]
};
for (const study of caseStudies) pageMetadata[`/our-work/${study.id}`] = [`${study.title} | Estatix Project Experience`,study.outcome];
export const siteOrigin="https://estatix.io";

export const metadataPath=(path:string)=>path.replace(/\/+$/,'') || '/';
export const canonicalUrl=(path:string)=>siteOrigin+(metadataPath(path)==='/'?'/':metadataPath(path)+'/');
