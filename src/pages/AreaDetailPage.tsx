import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, CheckCircle2, ShieldCheck, ChevronRight, Wrench } from 'lucide-react';
import { getAreaBySlug, AREAS_DATA } from '../data/areasData';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE } from '../config/siteConfig';

interface AreaDetailPageProps {
  onOpenEstimate: () => void;
}

export const AreaDetailPage: React.FC<AreaDetailPageProps> = ({ onOpenEstimate }) => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : undefined;

  useEffect(() => {
    if (area) {
      document.title = `${area.metaTitle} | ${SITE.name}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', area.metaDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [area]);

  if (!area) {
    return <Navigate to="/areas" replace />;
  }

  const otherAreas = AREAS_DATA.filter((a) => a.slug !== area.slug);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#0D7FF2] transition-colors">Início</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/areas" className="hover:text-[#0D7FF2] transition-colors">Cidades Atendidas</Link>
            </li>
            <li>/</li>
            <li className="text-[#061550] font-bold">{area.cityName}, {area.state}</li>
          </ol>
        </nav>

        {/* Hero Section for City */}
        <div className="bg-[#041038] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 text-left relative z-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-bold border border-blue-400/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>{area.cityName}, {area.state}</span>
              </span>

              {area.isBase && (
                <span className="bg-[#0D7FF2] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  Cidade Base Operacional
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {area.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {area.heroSubtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer"
              >
                <span>SOLICITAR ATENDIMENTO EM {area.cityName.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SITE.phone.telLink}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl text-sm font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>LIGAR: {SITE.phone.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section: Introdução da Cidade */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              COBERTURA TÉCNICA EM {area.cityName.toUpperCase()}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {area.introParagraph}
            </p>
          </div>
        </div>

        {/* Section: 3 Observações Locais Verificáveis */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              CARACTERÍSTICAS LOCAIS E CUIDADOS TÉCNICOS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Particularidades climáticas e imobiliárias de {area.cityName} consideradas durante nossos atendimentos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {area.localObservations.map((obs, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D7FF2] font-black text-sm flex items-center justify-center mb-4 border border-blue-100">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#061550] mb-2">
                    {obs.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {obs.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Lista de Serviços com Link para /services/<slug> */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D7FF2] mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>SERVIÇOS DISPONÍVEIS NA REGIÃO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              O QUE REALIZAMOS EM {area.cityName.toUpperCase()}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Todos os serviços contam com atendimento no seu endereço. Clique no serviço para conferir o que está incluso:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 hover:bg-blue-50/50 hover:border-blue-300 transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#061550] group-hover:text-[#0D7FF2] transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-[11px] text-slate-500">Atendimento presencial</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D7FF2] group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Other Areas */}
        {otherAreas.length > 0 && (
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#061550]">
                Outras Cidades Atendidas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherAreas.map((other) => (
                <Link
                  key={other.slug}
                  to={`/areas/${other.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D7FF2] flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#061550] group-hover:text-[#0D7FF2] transition-colors">
                        {other.cityName}, {other.state}
                      </h3>
                      <span className="text-xs text-slate-500">Ver cobertura regional</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0D7FF2] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Final Area CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 rounded-3xl p-8 sm:p-12 border border-blue-200/80 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#061550] max-w-2xl mx-auto">
            {area.finalCall}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Visitas agendadas com deslocamento técnico direto em {area.cityName}. Fale conosco pelo formulário ou por ligação direta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>SOLICITAR ORÇAMENTO EM {area.cityName.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={SITE.phone.telLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#061550] border border-slate-300 px-6 py-4 rounded-xl text-sm font-bold transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0D7FF2]" />
              <span>Ligar: {SITE.phone.display}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
