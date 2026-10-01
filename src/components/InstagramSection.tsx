import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { ServiceImage } from './ServiceImage';

export const InstagramSection: React.FC = () => {
  const highlights = [
    {
      id: "ig-1",
      title: "Manutenções no Local",
      category: "Atendimento",
      caption: `Cuidado e técnica em cada serviço realizado em ${SITE.serviceAreas.join(' e ')}.`,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-2",
      title: "Limpeza & Higienização",
      category: "Processo",
      caption: "A diferença visível na serpentina e turbina após o procedimento de sanitização.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-3",
      title: "Reparos & Diagnósticos",
      category: "Técnico",
      caption: "Soluções precisas para equipamentos que pararam de gelar ou apresentam ruído.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-4",
      title: "Qualidade do Ar Interior",
      category: "Saúde",
      caption: "Ambientes climatizados, limpos e livres de impurezas para toda a família.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>REDES SOCIAIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
              ACOMPANHE OS TRABALHOS DA {SITE.name.toUpperCase()}
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal">
              Siga nosso perfil no Instagram para acompanhar bastidores de atendimentos, dicas e novidades.
            </p>
          </div>

          {SITE.links.instagramUrl && (
            <a
              href={SITE.links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>VER INSTAGRAM</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          )}
        </div>

        {/* 4 Instagram Feed Cards with Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <a
              key={item.id}
              href={SITE.links.instagramUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#F8FAFC] rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Box */}
              <div className="h-56 relative overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.title}
                  category="CLIMATIZAÇÃO"
                  aspectRatio="h-full w-full"
                />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[11px] font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <Instagram className="w-5 h-5 text-white drop-shadow" />
                </div>

                <div className="absolute bottom-2 left-3 right-3 z-10 text-[11px] text-white font-bold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                  {item.title}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0D7FF2]">
                  <span>{SITE.links.instagramHandle || SITE.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform">Ver post →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
