import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE } from '../config/siteConfig';

interface BeforeAfterSectionProps {
  onOpenEstimate: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenEstimate }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="antes-depois" className="py-20 lg:py-28 bg-[#F5F8FC] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <Sparkles className="w-4 h-4 text-[#0D7FF2]" />
            <span>TRANSFORMAÇÃO REAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
            VEJA A DIFERENÇA DE UMA LIMPEZA BEM FEITA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            O acúmulo de sujeira e lodo pode obstruir o fluxo de ar e prejudicar o funcionamento do equipamento. Arraste a barra para comparar o antes e o depois do procedimento de higienização técnica.
          </p>
        </div>

        {/* Interactive Comparison Slider Container with Real Photography */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] md:h-[520px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize bg-slate-900"
          >
            {/* BACKGROUND: DEPOIS (Pristine Clean Sanitized State Photo) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                alt="Depois da higienização - serpentina e filtro limpos e sanitizados"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041038]/85 via-transparent to-black/20 pointer-events-none" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2 z-10">
                <div className="bg-emerald-600 text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>DEPOIS: HIGIENIZADO</span>
                </div>
                <div className="hidden sm:block bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-emerald-300 font-medium">
                  Fluxo 100% Livre · Sem Fungos e Ácaros
                </div>
              </div>
            </div>

            {/* FOREGROUND: ANTES (Clogged Dusty Dirty State Photo - Clipped via sliderPosition) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=1200&q=80"
                alt="Antes da manutenção - serpentina e filtros com acúmulo de poeira e ácaros"
                className="w-full h-full object-cover filter brightness-90 contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Bottom Info Overlay for ANTES */}
              <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 z-10">
                <div className="bg-slate-900/90 border border-amber-500/50 text-amber-400 font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>ANTES: OBSTRUÍDO</span>
                </div>
                <div className="hidden sm:block bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-amber-200 font-medium">
                  Poeira Espessa · Rendimento Comprometido
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl border-4 border-[#0D7FF2] flex items-center justify-center text-[#0D7FF2]">
                <div className="flex items-center gap-1 text-[10px] font-black">
                  <span>◄</span>
                  <span>►</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Block - Opens Form Modal */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Higienização completa da evaporadora, turbina, filtros e dreno de água com produtos certificados.</span>
            </div>

            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>SOLICITAR LIMPEZA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
