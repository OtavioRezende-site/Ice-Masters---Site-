import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE } from '../config/siteConfig';
import { ServiceImage } from './ServiceImage';

interface ServicesSectionProps {
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimate }) => {
  // First 4 services as main highlight cards on the home page
  const primaryServices = SERVICES_DATA.slice(0, 4);
  // Remaining 8 services as secondary cards
  const secondaryServices = SERVICES_DATA.slice(4);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0D7FF2]" />
              <span>SOLUÇÕES EM CLIMATIZAÇÃO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
              SERVIÇOS PARA CUIDAR DO SEU AR-CONDICIONADO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Da manutenção à limpeza e aos reparos, a {SITE.name} oferece serviços especializados para diferentes necessidades de climatização residencial e comercial.
            </p>
          </div>

          <Link
            to="/services"
            className="self-start md:self-auto inline-flex items-center gap-2 bg-[#061550] hover:bg-[#041038] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shrink-0"
          >
            <span>VER TODOS OS SERVIÇOS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Priority Service Cards with Link to /services/<slug> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {primaryServices.map((service, idx) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Service Contextual Photograph */}
              <div className="relative">
                <ServiceImage
                  src={service.image}
                  alt={service.name}
                  aspectRatio="aspect-[16/11]"
                />
                
                {/* Index tag */}
                <div className="absolute top-3 left-3 bg-[#041038]/85 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-white">
                  0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 bg-[#0D7FF2] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  Serviço no Local
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-[#061550] tracking-tight group-hover:text-[#0D7FF2] transition-colors leading-snug">
                    <Link to={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortMenuDesc}
                  </p>
                </div>

                {/* Card CTA & Detail Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0D7FF2] hover:text-[#0b6ad0] transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenEstimate}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white py-2 px-3.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer shadow-xs"
                  >
                    <span>Orçar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Services Section */}
        {secondaryServices.length > 0 && (
          <div className="mt-14 pt-12 border-t border-slate-200">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#061550] tracking-tight">
                  Outros Serviços de Climatização Atendidos
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Atendimento especializado para diferentes necessidades técnicas em {SITE.baseCity} e região.
                </p>
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D7FF2] hover:text-[#0b6ad0] transition-colors self-start sm:self-auto cursor-pointer"
              >
                <span>Ver página completa de serviços</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {secondaryServices.map((service) => (
                <div
                  key={service.slug}
                  className="group bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div className="h-32 overflow-hidden relative">
                    <ServiceImage
                      src={service.image}
                      alt={service.name}
                      aspectRatio="h-full w-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#041038]/80 text-[10px] font-bold text-white px-2 py-0.5 rounded backdrop-blur-sm">
                      Serviço no Local
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-[#061550] leading-snug group-hover:text-[#0D7FF2] transition-colors">
                        <Link to={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                        {service.shortMenuDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-slate-500 hover:text-[#0D7FF2] font-semibold flex items-center gap-1"
                      >
                        <span>Detalhes</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>

                      <button
                        type="button"
                        onClick={onOpenEstimate}
                        className="font-bold text-[#0D7FF2] hover:underline cursor-pointer"
                      >
                        Orçar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
