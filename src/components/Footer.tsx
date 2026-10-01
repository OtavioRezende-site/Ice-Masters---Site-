import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, MapPin, ExternalLink, X, Shield, FileText, Mail } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';
import { SERVICES_DATA } from '../data/servicesData';
import { IceMastersLogo } from './IceMastersLogo';

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  const [legalModalContent, setLegalModalContent] = useState<'privacy' | 'terms' | null>(null);

  const footerNavLinks = [
    { label: 'Início', to: '/' },
    { label: 'Todos os Serviços', to: '/services' },
    { label: 'Cidades Atendidas', to: '/areas' },
    { label: 'Sobre a Empresa', to: '/#sobre' },
    { label: 'Problemas Comuns', to: '/#problemas' },
    { label: 'Avaliações', to: '/#avaliacoes' },
    { label: 'Contato', to: '/#contato' },
  ];

  return (
    <footer className="bg-[#041038] text-slate-300 border-t border-blue-950/80 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <IceMastersLogo theme="dark" />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {CONTENT.footer.description}
            </p>

            {/* Social Icons & Call */}
            <div className="flex items-center gap-3 pt-2">
              {SITE.links.instagramUrl && (
                <a
                  href={SITE.links.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${SITE.name}`}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}

              {SITE.links.facebookUrl && (
                <a
                  href={SITE.links.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${SITE.name}`}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}

              <a
                href={SITE.phone.telLink}
                aria-label={`Ligar para ${SITE.name}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0D7FF2] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
              </a>

              {SITE.email && (
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label={`Email ${SITE.name}`}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0D7FF2] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  {link.to.startsWith('/#') ? (
                    <a
                      href={link.to}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Services with links to /services/<slug> (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#38BDF8] font-bold text-xs hover:underline block pt-1"
                >
                  Ver todos os 12 serviços →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5 text-white">
                <Phone className="w-4 h-4 text-[#0D7FF2] shrink-0" />
                <a href={SITE.phone.telLink} className="hover:underline font-bold">
                  {SITE.phone.display}
                </a>
              </div>

              {SITE.email && (
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-[#0D7FF2] shrink-0" />
                  <a href={`mailto:${SITE.email}`} className="hover:underline">
                    {SITE.email}
                  </a>
                </div>
              )}

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0D7FF2] shrink-0 mt-1" />
                <div>
                  <Link to="/areas" className="hover:text-white transition-colors font-semibold">
                    {SITE.baseCity}
                  </Link>
                  <div className="text-xs text-slate-400">{SITE.serviceAreas.join(', ')}</div>
                  {SITE.showAddress && SITE.address?.full && (
                    <div className="text-xs text-slate-500 mt-1">{SITE.address.full}</div>
                  )}
                </div>
              </div>

              {SITE.links.googleMapsUrl && (
                <div className="pt-2">
                  <a
                    href={SITE.links.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:underline"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {CONTENT.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModalContent('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLegalModalContent('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Legal Notice Modal */}
      {legalModalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041038]/80 backdrop-blur-sm"
          onClick={() => setLegalModalContent(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {legalModalContent === 'privacy' ? (
                  <Shield className="w-5 h-5 text-[#0D7FF2]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#0D7FF2]" />
                )}
                <h3 className="font-extrabold text-lg text-[#061550]">
                  {legalModalContent === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto">
              {legalModalContent === 'privacy' ? (
                <>
                  <p>
                    A <strong>{SITE.name}</strong> preza pela transparência e privacidade dos dados de seus clientes.
                  </p>
                  <p>
                    As informações fornecidas voluntariamente através dos nossos canais de contato destinam-se exclusivamente ao agendamento, alinhamento técnico e prestação dos serviços solicitados.
                  </p>
                  <p>
                    {CONTENT.footer.privacyNotice}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Os conteúdos e descrições dos serviços deste website pertencem à <strong>{SITE.legalName || SITE.name}</strong>.
                  </p>
                  <p>
                    Os orçamentos e agendamentos estão sujeitos à disponibilidade técnica de atendimento nas cidades atendidas ({SITE.serviceAreas.join(', ')}).
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2.5 bg-[#061550] text-white rounded-xl text-xs font-bold hover:bg-[#041038]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
