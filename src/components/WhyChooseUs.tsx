import React from 'react';
import { PhoneCall, Wrench, HeartHandshake, Sparkles, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { CONTENT } from '../config/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'atendimento-direto':
        return <PhoneCall className="w-6 h-6 text-[#0D7FF2]" />;
      case 'servico-limpo':
        return <HeartHandshake className="w-6 h-6 text-indigo-500" />;
      case 'diagnostico-correto':
        return <Wrench className="w-6 h-6 text-sky-500" />;
      case 'ar-saudavel':
        return <Sparkles className="w-6 h-6 text-emerald-500" />;
      case 'cobertura-local':
        return <MapPin className="w-6 h-6 text-rose-500" />;
      case 'pagamento-facil':
        return <CreditCard className="w-6 h-6 text-purple-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0D7FF2]" />;
    }
  };

  return (
    <section id="por-que-escolher" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
            <span>{CONTENT.whyChooseUs.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
            {CONTENT.whyChooseUs.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {CONTENT.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Bento Grid Anchored in Real Differentials & Client Fears */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT.whyChooseUs.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#061550] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs text-slate-500 italic">
                <span>{item.fearAddressed}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
