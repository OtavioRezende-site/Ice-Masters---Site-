import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="sobre" className="py-20 lg:py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2]">
              <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
              <span>{CONTENT.about.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
              {CONTENT.about.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
              {CONTENT.about.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {CONTENT.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>SOLICITAR AVALIAÇÃO TÉCNICA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0D7FF2]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#061550]">
                    Padrão de Atendimento
                  </h3>
                  <p className="text-xs text-slate-500">Compromissos práticos com você</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {CONTENT.about.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
                Base local em <strong className="text-slate-700">{SITE.baseCity}</strong> para maior agilidade no atendimento de chamados residenciais e comerciais.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
