import React from 'react';
import { CheckCircle2, ArrowLeft, Phone, X } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041038]/85 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-[#061550]">
            {CONTENT.thankYou.title}
          </h3>
          <p className="text-sm font-semibold text-emerald-700">
            {CONTENT.thankYou.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {CONTENT.thankYou.message}
        </p>

        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs text-slate-700 space-y-1">
          <div className="font-bold text-[#061550]">Precisa de atendimento urgente?</div>
          <div className="flex items-center justify-center gap-1.5 text-[#0D7FF2] font-extrabold text-sm">
            <Phone className="w-4 h-4" />
            <a href={SITE.phone.telLink} className="hover:underline">
              {SITE.phone.display}
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{CONTENT.thankYou.buttonText}</span>
        </button>
      </div>
    </div>
  );
};
