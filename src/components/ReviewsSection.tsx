import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE } from '../config/siteConfig';

interface ReviewsSectionProps {
  onOpenEstimate: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenEstimate }) => {
  // If neither google rating nor feedback themes nor testimonials exist, do not render section
  const hasRating = !!SITE.proof.googleRating;
  const hasFeedbackThemes = SITE.proof.customerFeedbackThemes && SITE.proof.customerFeedbackThemes.length > 0;
  const hasTestimonials = SITE.proof.testimonials && SITE.proof.testimonials.length > 0;

  if (!hasRating && !hasFeedbackThemes && !hasTestimonials) {
    return null;
  }

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
              <span>AVALIAÇÃO NO GOOGLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
              O QUE OS CLIENTES DIZEM
            </h2>
            <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
              Clientes destacam o atendimento profissional, a resposta rápida, o capricho no serviço e a atenção aos detalhes em manutenções e reparos.
            </p>
          </div>

          {/* Conditional Google Scorecard Lockup */}
          {hasRating && (
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shrink-0 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl font-black text-[#061550]">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-[#061550] leading-none">
                    {SITE.proof.googleRating?.stars.toFixed(1).replace('.', ',')}
                  </span>
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: Math.round(SITE.proof.googleRating?.stars || 5) }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {SITE.proof.googleRating?.reviewCount 
                    ? `${SITE.proof.googleRating.reviewCount} avaliações no Google`
                    : "Avaliação no Google"}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Conditional Individual Testimonials (ONLY rendered if present in ficha) */}
        {hasTestimonials && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {SITE.proof.testimonials!.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-7 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Avaliação Verificada</span>
                    </div>
                  </div>

                  <div>
                    {rev.highlight && (
                      <h3 className="text-base font-extrabold text-[#061550]">
                        "{rev.highlight}"
                      </h3>
                    )}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                      {rev.text}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0D7FF2] font-black text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div className="text-xs font-bold text-[#061550]">{rev.author}</div>
                  </div>

                  {rev.date && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Customer Feedback Themes from Fiche (when individual testimonials are not in the fiche) */}
        {hasFeedbackThemes && (
          <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0D7FF2]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#061550]">
                  Pontos Destacados pelos Clientes nas Avaliações Públicas
                </h3>
                <p className="text-xs text-slate-500">
                  Percepções recorrentes registradas por clientes atendidos em {SITE.serviceAreas.join(', ')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {SITE.proof.customerFeedbackThemes.map((theme, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {theme}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Experiência de atendimento focada na pontualidade e resolução técnica.
              </span>
              <button
                type="button"
                onClick={onOpenEstimate}
                className="text-[#0D7FF2] hover:text-[#0b6ad0] font-bold text-xs sm:text-sm inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
              >
                <span>Preencher formulário de orçamento</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
