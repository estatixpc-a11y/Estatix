import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface MobileContactBarProps {
  onOpenConsultation: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-elevated md:hidden px-3 py-2">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Link */}
        <a
          href={siteConfig.contact.callUrl}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-50 active:bg-slate-100 border border-slate-200 text-slate-700 text-center transition-colors"
          aria-label="Call Estatix"
        >
          <Phone className="w-4 h-4 text-teal-900 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 active:bg-emerald-100 border border-emerald-200 text-emerald-800 text-center transition-colors"
          aria-label="WhatsApp Estatix"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Consultation Modal Trigger */}
        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-teal-900 active:bg-teal-950 text-white text-center transition-colors shadow-sm"
          aria-label="Book a consultation"
        >
          <Calendar className="w-4 h-4 text-brand-accent mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Consult</span>
        </button>
      </div>
    </div>
  );
};
