import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, ShieldCheck, Home } from 'lucide-react';
import { AREAS_DATA } from '../data/areasData';
import { SITE } from '../config/siteConfig';

interface AreasIndexPageProps {
  onOpenEstimate: () => void;
}

export const AreasIndexPage: React.FC<AreasIndexPageProps> = ({ onOpenEstimate }) => {
  return (
    <div className="py-28 lg:py-36 bg-[#F5F8FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#0D7FF2] transition-colors">Início</Link>
            </li>
            <li>/</li>
            <li className="text-[#061550] font-bold">Cidades Atendidas</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <MapPin className="w-4 h-4 text-[#0D7FF2]" />
            <span>COBERTURA CONFIRMADA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#061550] tracking-tight leading-tight">
            CIDADES E ÁREAS ATENDIDAS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A {SITE.name} realiza atendimento técnico de climatização com visita presencial no seu imóvel. Confira os municípios e áreas de atuação confirmadas:
          </p>
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AREAS_DATA.map((area) => (
            <div
              key={area.slug}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0D7FF2]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {area.isBase && (
                    <span className="text-[11px] font-bold text-white bg-[#0D7FF2] px-3 py-1 rounded-full shadow-xs">
                      Cidade Base
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#061550]">
                    <Link to={`/areas/${area.slug}`} className="hover:text-[#0D7FF2] transition-colors">
                      {area.cityName}, {area.state}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {area.introParagraph}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D7FF2] hover:text-[#0b6ad0] transition-colors"
                >
                  <span>Ver página da cidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Orçar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Local Guarantee Card */}
        <div className="mt-16 bg-[#041038] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Mora em uma dessas regiões e precisa de atendimento técnico?
            </h3>
            <p className="text-sm text-slate-300">
              Agende sua visita técnica com deslocamento programado e atendimento no seu endereço.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              SOLICITAR ORÇAMENTO
            </button>
            <a
              href={SITE.phone.telLink}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-5 py-3.5 rounded-xl text-sm font-bold transition-all text-center whitespace-nowrap"
            >
              LIGAR: {SITE.phone.display}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
