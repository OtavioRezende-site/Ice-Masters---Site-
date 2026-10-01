import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE } from '../config/siteConfig';
import { ServiceImage } from '../components/ServiceImage';

interface ServicesIndexPageProps {
  onOpenEstimate: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenEstimate }) => {
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
            <li className="text-[#061550] font-bold">Serviços</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <Wrench className="w-4 h-4 text-[#0D7FF2]" />
            <span>SOLUÇÕES EM REFRIGERAÇÃO E CLIMATIZAÇÃO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#061550] tracking-tight leading-tight">
            NOSSOS SERVIÇOS DE AR-CONDICIONADO
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Conheça todos os serviços prestados pela {SITE.name} em {SITE.serviceAreas.join(', ')}. Clique em qualquer serviço para ver detalhes técnicos, o que está incluso e o passo a passo de atendimento.
          </p>
        </div>

        {/* Grid of All 12 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.slug}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Photo Box */}
              <div className="relative h-52 overflow-hidden">
                <ServiceImage
                  src={service.image}
                  alt={service.name}
                  aspectRatio="h-full w-full"
                />
                <div className="absolute top-3 left-3 bg-[#041038]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-white">
                  0{idx + 1}
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0D7FF2] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  Serviço no Local
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-lg font-extrabold text-[#061550] group-hover:text-[#0D7FF2] transition-colors leading-snug">
                    <Link to={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortMenuDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D7FF2] hover:text-[#0b6ad0] transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenEstimate}
                    className="bg-slate-100 hover:bg-[#0D7FF2] text-slate-800 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Orçar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#041038] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Não tem certeza de qual serviço seu ar-condicionado precisa?
            </h3>
            <p className="text-sm text-slate-300">
              Descreva os sintomas no formulário de orçamento e alinhamos o diagnóstico técnico adequado.
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
