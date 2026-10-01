import React from 'react';
import { ArrowRight, Phone, Snowflake, ShieldCheck } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface FinalCTAProps {
  onOpenEstimate: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#041038] text-white relative overflow-hidden">
      {/* Background glow and cool air stream graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0D7FF2]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#061550] rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
            <Snowflake className="w-4 h-4 text-[#38BDF8]" />
            <span>{CONTENT.finalCta.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            {CONTENT.finalCta.title}
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {CONTENT.finalCta.subtitle}
          </p>

          {/* Action Buttons: Form Modal OR Direct Call */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>{CONTENT.finalCta.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={SITE.phone.telLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-[#38BDF8]" />
              <span>{CONTENT.finalCta.ctaSecondary}</span>
            </a>
          </div>

          {/* Direct phone and service scope */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2 text-slate-200">
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              <span>Ligação direta: <strong>{SITE.phone.display}</strong></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{SITE.serviceAreas.join(', ')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
