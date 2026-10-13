export type AudienceType = 
  | 'investor' 
  | 'homebuyer' 
  | 'developer' 
  | 'landowner' 
  | 'hospitality' 
  | 'channel_partner';

export type EnquiryCategory = 
  | 'consultation' 
  | 'investment' 
  | 'homebuyer' 
  | 'mandate_sales' 
  | 'plotted_development' 
  | 'land_parcel' 
  | 'hospitality' 
  | 'channel_partner';

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email?: string;
  enquiryType: EnquiryCategory;
  preferredTime: string;
  notes?: string;
  consent: boolean;
  sourcePage?: string;
}

export interface LandSubmissionFormData {
  fullName: string;
  phone: string;
  email?: string;
  location: string;
  areaSize: string;
  ownershipStatus: 'Sole Owner' | 'Joint Owner' | 'Authorized Representative' | 'Mandated Broker';
  description: string;
  consent: boolean;
  sourcePage?: string;
}

export interface ChannelPartnerFormData {
  fullName: string;
  businessName: string;
  city: string;
  phone: string;
  email?: string;
  experienceSummary: string;
  consent: boolean;
  sourcePage?: string;
}

export type CaseStudyStatus = 
  | 'Completed Sales Mandate' 
  | 'Hospitality Engagement (Signed)' 
  | 'Ongoing Business-Planning Engagement' 
  | 'Channel Partner Alliance';

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseStudyStatus;
  location?: string;
  overview: string;
  clientBrief: string;
  estatixRole: string;
  workDelivered: string[];
  outcome: string;
  statusText: string;
  image: string;
  imageCaption: string;
  featured?: boolean;
}

export interface LeadershipMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  focusAreas: string[];
  backgroundNote: string;
}
