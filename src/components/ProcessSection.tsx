import React from 'react';
import { ArrowRight, Phone, MessageSquare, ClipboardCheck, Wrench } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface ProcessSectionProps {
  onOpenEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEstimate }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardCheck className="w-6 h-6 text-[#0D7FF2]" />;
      case 1:
        return <MessageSquare className="w-6 h-6 text-sky-500" />;
      case 2:
        return <Wrench className="w-6 h-6 text-emerald-500" />;
      default:
        return <ClipboardCheck className="w-6 h-6 text-[#0D7FF2]" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#061550] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0D7FF2]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
            <span>{CONTENT.process.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            {CONTENT.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {CONTENT.process.subtitle}
          </p>
        </div>

        {/* 3 Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-24 right-24 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {CONTENT.process.steps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#041038]/80 rounded-2xl sm:rounded-3xl p-8 border border-blue-500/20 flex flex-col justify-between hover:border-blue-400/50 hover:bg-[#041038] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-300/40 font-mono tracking-tighter">
                      {step.step}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center text-xs text-[#38BDF8] font-bold">
                  <span>Etapa {step.step} de 03</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={onOpenEstimate}
            className="inline-flex items-center justify-center gap-2.5 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <span>{CONTENT.process.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={SITE.phone.telLink}
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl text-base font-bold transition-all"
          >
            <Phone className="w-5 h-5 text-[#38BDF8]" />
            <span>LIGAR: {SITE.phone.display}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
