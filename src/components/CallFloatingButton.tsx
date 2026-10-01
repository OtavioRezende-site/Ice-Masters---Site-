import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { SITE } from '../config/siteConfig';

interface CallFloatingButtonProps {
  onOpenEstimate?: () => void;
}

export const CallFloatingButton: React.FC<CallFloatingButtonProps> = ({ onOpenEstimate }) => {
  const location = useLocation();

  // Hide on thank you page
  const isThankYouPage = location.pathname === '/thank-you' || location.pathname === '/obrigado';
  if (isThankYouPage) return null;

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar (below sm only) */}
      {/* Leaves 80px on the right so the GHL chat widget button sits cleanly without overlapping */}
      <div
        className="sm:hidden fixed bottom-0 left-0 z-40 p-2.5 bg-[#041038]/95 backdrop-blur-md border-t border-blue-900/40 shadow-2xl transition-all"
        style={{ width: 'calc(100% - 80px)' }}
      >
        <div className="flex items-center gap-2">
          {/* Ligar Button */}
          <a
            href={SITE.phone.telLink}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 text-white border border-white/20 py-2.5 px-2 rounded-xl text-xs font-bold active:scale-98 transition-all"
          >
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            <span>Ligar</span>
          </a>

          {/* Orçamento Button */}
          <button
            type="button"
            onClick={onOpenEstimate}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1871F3] active:bg-[#1260D4] text-white py-2.5 px-2 rounded-xl text-xs font-bold shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Orçamento</span>
          </button>
        </div>
      </div>
    </>
  );
};
