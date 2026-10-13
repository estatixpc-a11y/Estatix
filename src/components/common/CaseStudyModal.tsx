import { useDialog } from './useDialog';
import React from 'react';
import { X, Check, MapPin, Tag, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenConsultation,
}) => {
  const dialogRef = useDialog(Boolean(caseStudy), onClose);
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full bg-teal-950 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-brand-accent text-teal-950">
                <Tag className="w-3 h-3" />
                {caseStudy.category}
              </span>
              {caseStudy.location && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium bg-white/20 text-white backdrop-blur-sm">
                  <MapPin className="w-3 h-3" />
                  {caseStudy.location}
                </span>
              )}
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold font-sans">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Caption */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 text-xs text-slate-600 italic">
          {caseStudy.imageCaption}
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Status highlight */}
          <div className="bg-teal-50/70 border border-teal-100 rounded-lg p-4">
            <span className="text-[10px] uppercase font-bold text-teal-900 tracking-wider block mb-1">
              Current Engagement Status
            </span>
            <p className="text-sm font-semibold text-teal-950">
              {caseStudy.statusText}
            </p>
          </div>

          {/* Overview & Brief */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Context & Client Brief
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              {caseStudy.overview}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-800">Brief: </span>
              {caseStudy.clientBrief}
            </p>
          </div>

          {/* Estatix's Exact Role */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Estatix’s Exact Scope
            </h3>
            <p className="text-sm font-semibold text-teal-950 mb-3">
              {caseStudy.estatixRole}
            </p>
            <ul className="space-y-2">
              {caseStudy.workDelivered.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="border-t border-slate-200 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Outcome
            </h3>
            <p className="text-base font-semibold text-slate-900 leading-relaxed">
              &ldquo;{caseStudy.outcome}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Have a project or opportunity requiring similar advisory?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Discuss Your Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-slate-300 text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
