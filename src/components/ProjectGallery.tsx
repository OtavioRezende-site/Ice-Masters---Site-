import React, { useState } from 'react';
import { Maximize2, X, ArrowRight } from 'lucide-react';
import { SITE, GalleryItem } from '../config/siteConfig';
import { ServiceImage } from './ServiceImage';

interface ProjectGalleryProps {
  onOpenEstimate: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenEstimate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['TODOS', 'LIMPEZA', 'MANUTENÇÕES', 'REPAROS', 'CLIMATIZAÇÃO', 'EQUIPAMENTOS'];

  const filteredItems = selectedCategory === 'TODOS'
    ? SITE.galleryItems
    : SITE.galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="trabalhos" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
              <span>REGISTROS TÉCNICOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
              TRABALHOS REALIZADOS PELA {SITE.name.toUpperCase()}
            </h2>
            <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
              Registros visuais de atendimentos técnicos, higienizações detalhadas e manutenções em {SITE.serviceAreas.join(', ')}.
            </p>
          </div>

          {/* Button to Open Form Modal */}
          <button
            type="button"
            onClick={onOpenEstimate}
            className="self-start md:self-auto inline-flex items-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>SOLICITAR ATENDIMENTO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#061550] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.title}
                  category={item.category}
                  aspectRatio="h-full w-full"
                />

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-bold text-white bg-[#041038]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#041038]/80 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px]">{SITE.name.split(" ")[0]} Atendimento</span>
                  <span className="font-bold text-[#38BDF8] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px]">{item.tag}</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#061550] group-hover:text-[#0D7FF2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041038]/90 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveLightboxItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold text-white bg-[#061550]/80 px-3 py-1 rounded-full">
                    {activeLightboxItem.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg sm:text-xl font-black">
                    {activeLightboxItem.title}
                  </h4>
                  <p className="text-xs text-blue-200 mt-1">
                    {activeLightboxItem.tag} · {SITE.baseCity}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeLightboxItem.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveLightboxItem(null);
                      onOpenEstimate();
                    }}
                    className="w-full bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white py-3.5 rounded-xl font-bold text-sm text-center shadow-md transition-all cursor-pointer"
                  >
                    Solicitar Orçamento para este Serviço
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
