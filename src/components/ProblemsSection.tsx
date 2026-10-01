import React, { useState } from 'react';
import { AlertCircle, ArrowRight, Phone } from 'lucide-react';
import { SITE } from '../config/siteConfig';

interface ProblemsSectionProps {
  onOpenEstimate: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenEstimate }) => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  return (
    <section id="problemas" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>DIAGNÓSTICO INICIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
            SEU AR-CONDICIONADO ESTÁ COM ALGUM DESSES PROBLEMAS?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Se você percebeu algum desses sinais, preencha nosso formulário ou ligue para a {SITE.name} para alinharmos a melhor solução técnica.
          </p>
        </div>

        {/* Problem Cards Grid from SITE.commonProblems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SITE.commonProblems.map((problem) => {
            const isSelected = selectedProblem === problem.id;

            return (
              <div
                key={problem.id}
                onClick={() => {
                  setSelectedProblem(isSelected ? null : problem.id);
                  onOpenEstimate();
                }}
                className={`group p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-[#0D7FF2] shadow-md ring-2 ring-[#0D7FF2]/20'
                    : 'bg-[#F8FAFC] border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:border-[#0D7FF2] group-hover:text-[#0D7FF2] transition-colors">
                      !
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Sintoma
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#061550] group-hover:text-[#0D7FF2] transition-colors leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {problem.symptom}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#0D7FF2]">
                    Solicitar Reparo
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0D7FF2] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual Notice & Actions */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-200/80 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#061550]">
              Não tente forçar o aparelho com mau funcionamento
            </h4>
            <p className="text-sm text-slate-600 max-w-xl">
              Filtros obstruídos ou vazamentos podem sobrecarregar o compressor. Solicite uma avaliação pelo formulário ou ligue diretamente para a {SITE.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            {/* Primary Action Button - Opens Form Modal */}
            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>FALAR COM A {SITE.name.split(" ")[0].toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Direct Phone Call Button */}
            <a
              href={SITE.phone.telLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#061550] border border-slate-300 px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#0D7FF2]" />
              <span>Ligar: {SITE.phone.display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
