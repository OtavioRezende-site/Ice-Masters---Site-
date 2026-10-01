import React from 'react';
import { Star, Phone, ArrowRight, CheckCircle2, Snowflake } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';
import { ServiceImage } from './ServiceImage';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  const primaryService = SITE.services.find(s => s.category === 'primary') || SITE.services[0];
  const coverageDisplay = SITE.serviceAreas.slice(0, 2).join(' · ');

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-36 bg-[#041038] overflow-hidden"
    >
      {/* Cinematic Deep Navy / Blue Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#0D7FF2]/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#061550] rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0D7FF2]/10 blur-[120px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#38BDF8]">
              <span className="w-2 h-2 rounded-full bg-[#0D7FF2] animate-pulse" />
              <span>{CONTENT.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.12] text-balance">
              {CONTENT.hero.headline.part1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#0D7FF2] to-white">
                {CONTENT.hero.headline.highlight}
              </span>{', '}
              {CONTENT.hero.headline.part2}
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {CONTENT.hero.subheadline}
            </p>

            {/* CTAs Decision Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-7 py-4 rounded-xl text-base font-bold tracking-wide transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-400/50"
              >
                <span>{CONTENT.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={SITE.phone.telLink}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl text-base font-bold tracking-wide transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                <Phone className="w-5 h-5 text-[#38BDF8]" />
                <span>{CONTENT.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Conditional Trust Proof Points */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Manutenção e Reparos</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Limpeza e Higienização</span>
              </div>

              {/* Conditional Google Rating */}
              {SITE.proof.googleRating && (
                <>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 font-medium text-amber-300">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span>{SITE.proof.googleRating.text} no Google</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-blue-400/30 via-blue-900/20 to-transparent shadow-2xl backdrop-blur-sm">
              <div className="bg-[#061550]/90 rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-blue-500/20 text-white space-y-5">
                
                {/* Real Technical HVAC Service Photo with Badge */}
                <div className="relative rounded-xl overflow-hidden border border-blue-400/30 group">
                  <ServiceImage
                    src={primaryService.image}
                    alt={`${primaryService.title} - ${SITE.name}`}
                    category="MANUTENÇÕES"
                    aspectRatio="aspect-[16/10]"
                    loading="eager"
                    fetchPriority="high"
                    width={800}
                    height={500}
                  />
                  
                  {/* Floating Status Tag on Photo */}
                  <div className="absolute top-3 left-3 bg-[#041038]/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Atendimento Técnico no Local</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90 bg-[#041038]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span>{coverageDisplay}</span>
                    <span className="text-[#38BDF8] font-bold">Serviço Especializado</span>
                  </div>
                </div>

                {/* Quick Trust Highlights */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0D7FF2]/20 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Ar Gelando</div>
                      <div className="text-slate-300 text-[10px]">Rendimento Total</div>
                    </div>
                  </div>

                  {SITE.proof.googleRating ? (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Star className="w-4 h-4 fill-emerald-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Nota {SITE.proof.googleRating.stars}</div>
                        <div className="text-slate-300 text-[10px]">Avaliado no Google</div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0D7FF2]/20 flex items-center justify-center text-[#38BDF8] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Atendimento Local</div>
                        <div className="text-slate-300 text-[10px]">Profissional</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary Button to Open Form Modal */}
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="w-full py-3.5 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white text-sm font-bold rounded-xl text-center transition-all cursor-pointer shadow-md"
                >
                  Solicitar Avaliação Técnica
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
