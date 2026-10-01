import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, HelpCircle, ChevronRight, Wrench, ShieldCheck } from 'lucide-react';
import { getServiceBySlug, SERVICES_DATA } from '../data/servicesData';
import { SITE } from '../config/siteConfig';
import { ServiceImage } from '../components/ServiceImage';

interface ServiceDetailPageProps {
  onOpenEstimate: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenEstimate }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.metaTitle} | ${SITE.name}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.metaDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services
  const relatedList = service.relatedServices
    .map((rSlug) => getServiceBySlug(rSlug))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#0D7FF2] transition-colors">Início</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/services" className="hover:text-[#0D7FF2] transition-colors">Serviços</Link>
            </li>
            <li>/</li>
            <li className="text-[#061550] font-bold">{service.name}</li>
          </ol>
        </nav>

        {/* Hero Banner for this Service */}
        <div className="bg-[#041038] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-bold border border-blue-400/30">
                <Wrench className="w-3.5 h-3.5" />
                <span>SERVIÇO ESPECIALIZADO</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {service.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {service.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer"
                >
                  <span>SOLICITAR ORÇAMENTO DESTE SERVIÇO</span>
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

              <div className="text-xs text-slate-400 pt-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Atendimento presencial em {SITE.serviceAreas.join(', ')}</span>
              </div>
            </div>

            {/* Service Image Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[4/3]">
                <ServiceImage
                  src={service.image}
                  alt={service.name}
                  aspectRatio="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: O que está incluso (5 to 6 items) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              O QUE ESTÁ INCLUSO NO ATENDIMENTO
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Conheça as etapas e verificações técnicas executadas durante este serviço:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/60"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: 3 Benefícios Reais */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              BENEFÍCIOS DESTE SERVIÇO PARA SEU EQUIPAMENTO
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Resultados diretos no rendimento, na economia e no conforto do seu ambiente:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D7FF2] font-black text-sm flex items-center justify-center mb-4 border border-blue-100">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#061550] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Processo em 4 Passos */}
        <div className="bg-[#061550] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              ETAPAS DE ATENDIMENTO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              COMO EXECUTAMOS ESTE SERVIÇO NO SEU ENDEREÇO
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-[#041038] rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black font-mono text-[#38BDF8] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Perguntas Frequentes (2 a 3 FAQs) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="max-w-3xl mb-8 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#0D7FF2]" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
              DÚVIDAS FREQUENTES SOBRE ESTE SERVIÇO
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 space-y-2"
              >
                <h3 className="text-base font-bold text-[#061550]">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Serviços Relacionados */}
        {relatedList.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-[#061550]">
                Serviços Relacionados
              </h2>
              <Link
                to="/services"
                className="text-xs sm:text-sm font-bold text-[#0D7FF2] hover:underline"
              >
                Ver todos os serviços →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedList.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-[#061550] group-hover:text-[#0D7FF2] transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      {rel.shortMenuDesc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D7FF2]">
                    <span>Acessar detalhes</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Final Service Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 rounded-3xl p-8 sm:p-12 border border-blue-200/80 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#061550] max-w-2xl mx-auto">
            {service.finalCall}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Preencha o formulário rápido com os dados do seu ar-condicionado ou ligue para agendar a visita no seu endereço.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>SOLICITAR ORÇAMENTO AGORA</span>
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
