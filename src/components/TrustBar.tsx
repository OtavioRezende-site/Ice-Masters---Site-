import React from 'react';
import { Star, MapPin, Wrench, ShieldCheck, CreditCard, Laptop, Award, Shield } from 'lucide-react';
import { SITE } from '../config/siteConfig';

export const TrustBar: React.FC = () => {
  const serviceAreaSnippet = SITE.serviceAreas.slice(0, 2).join(' & ');

  return (
    <section className="bg-white border-y border-slate-200/80 py-5 sm:py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center justify-between text-left">
          
          {/* Conditional Item 1: Google Rating */}
          {SITE.proof.googleRating && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-[#061550] flex items-center gap-1">
                  <span>{SITE.proof.googleRating.text}</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Classificação no Google</div>
              </div>
            </div>
          )}

          {/* Conditional Item: License (only if present in fiche) */}
          {SITE.proof.license && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#0D7FF2]" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-[#061550]">Licença Técnica</div>
                <div className="text-xs text-slate-500 font-medium">{SITE.proof.license}</div>
              </div>
            </div>
          )}

          {/* Conditional Item: Insurance (only if present in fiche) */}
          {SITE.proof.insurance && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-[#061550]">Seguro Ativo</div>
                <div className="text-xs text-slate-500 font-medium">{SITE.proof.insurance}</div>
              </div>
            </div>
          )}

          {/* Item: Serviços no Local */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-[#0D7FF2]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-[#061550]">Serviços no Local</div>
              <div className="text-xs text-slate-500 font-medium">Atendimento técnico</div>
            </div>
          </div>

          {/* Item: Estimativas On-line */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-[#061550]">Estimativas On-line</div>
              <div className="text-xs text-slate-500 font-medium">Orçamento ágil</div>
            </div>
          </div>

          {/* Item: Cobertura Confirmada */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-sky-600" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-[#061550]">{serviceAreaSnippet}</div>
              <div className="text-xs text-slate-500 font-medium">E proximidades</div>
            </div>
          </div>

          {/* Item: Manutenção Especializada */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-[#061550]">Manutenção Técnica</div>
              <div className="text-xs text-slate-500 font-medium">Limpeza e reparos</div>
            </div>
          </div>

          {/* Item: Pagamentos */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-slate-700" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-[#061550]">Cartão & NFC</div>
              <div className="text-xs text-slate-500 font-medium">Mastercard e Visa</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
