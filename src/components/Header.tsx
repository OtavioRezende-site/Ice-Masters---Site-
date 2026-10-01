import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronRight, MessageCircle, MapPin, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { IceMastersLogo } from './IceMastersLogo';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleAnchorClick = (anchor: string) => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${anchor}`);
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2 sm:py-2.5'
            : 'bg-gradient-to-b from-[#041038]/95 via-[#061550]/85 to-transparent py-2.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <Link
              to="/"
              aria-label={`${SITE.name} - Início`}
              className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1871F3] rounded-lg"
            >
              <IceMastersLogo
                theme={isScrolled ? 'light' : 'dark'}
                compact={isScrolled || true}
              />
            </Link>

            {/* Navigation Links (Desktop) */}
            <nav
              aria-label="Navegação Principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7"
            >
              <Link
                to="/"
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] ${
                  location.pathname === '/' ? 'text-[#1871F3] font-bold' : isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Início
              </Link>

              {/* Serviços with Quick Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] flex items-center gap-1 py-1 ${
                    location.pathname.startsWith('/services') ? 'text-[#1871F3] font-bold' : isScrolled ? 'text-slate-700' : 'text-slate-200'
                  }`}
                >
                  <span>Serviços</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-fade-in text-slate-800">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Nossos Serviços Especializados
                    </div>
                    <div className="max-h-80 overflow-y-auto py-1">
                      {SERVICES_DATA.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#1871F3] transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-[#1871F3] hover:bg-blue-50 text-center border-t border-slate-100 mt-1"
                    >
                      Ver todos os 12 serviços →
                    </Link>
                  </div>
                )}
              </div>

              {/* Cidades Atendidas */}
              <Link
                to="/areas"
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] ${
                  location.pathname.startsWith('/areas') ? 'text-[#1871F3] font-bold' : isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Cidades
              </Link>

              <button
                type="button"
                onClick={() => handleAnchorClick('#sobre')}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] cursor-pointer ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Sobre
              </button>

              <button
                type="button"
                onClick={() => handleAnchorClick('#problemas')}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] cursor-pointer ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Problemas
              </button>

              <button
                type="button"
                onClick={() => handleAnchorClick('#avaliacoes')}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] cursor-pointer ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Avaliações
              </button>

              <button
                type="button"
                onClick={() => handleAnchorClick('#contato')}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#1871F3] cursor-pointer ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Contato
              </button>
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              
              {/* Desktop / Tablet Phone Pill */}
              <a
                href={SITE.phone.telLink}
                aria-label={`Ligar para ${SITE.phone.display}`}
                className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors border ${
                  isScrolled
                    ? 'border-slate-300 text-[#061550] hover:bg-slate-100'
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#1871F3]" />
                <span>{SITE.phone.display}</span>
              </a>

              {/* Desktop / Tablet Primary Estimate CTA */}
              <button
                type="button"
                onClick={onOpenEstimate}
                className="hidden sm:inline-flex bg-[#1871F3] hover:bg-[#1260D4] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1871F3] focus:ring-offset-2"
              >
                SOLICITAR ORÇAMENTO
              </button>

              {/* Mobile Quick Call Button (Phone Icon Pill) */}
              <a
                href={SITE.phone.telLink}
                aria-label={`Ligar para ${SITE.phone.display}`}
                className={`sm:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'bg-blue-50 text-[#1871F3] hover:bg-blue-100 border border-blue-200'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Phone className="w-4 h-4 text-[#1871F3] fill-current" />
              </a>

              {/* Mobile Quick Estimate Trigger */}
              <button
                type="button"
                onClick={onOpenEstimate}
                className="sm:hidden px-2.5 py-1.5 rounded-xl bg-[#1871F3] active:bg-[#1260D4] text-white text-[11px] font-bold shadow-xs whitespace-nowrap cursor-pointer"
              >
                Orçar
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
                className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                  isScrolled
                    ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Improved Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end sm:justify-start">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-[#041038]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative w-full max-h-[90vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-10 border-t border-slate-200">
            
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <IceMastersLogo theme="light" compact />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Links */}
            <div className="px-5 py-4 overflow-y-auto space-y-4">
              
              {/* Navigation Links */}
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    location.pathname === '/' ? 'bg-blue-50 text-[#1871F3]' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>Início</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>

                {/* Collapsible Services Section */}
                <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#1871F3]" />
                      <span>Serviços</span>
                      <span className="text-[10px] font-bold bg-[#1871F3] text-white px-2 py-0.5 rounded-full">
                        12
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform text-slate-400 ${
                        mobileServicesOpen ? 'rotate-180 text-[#1871F3]' : ''
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="px-2 py-2 bg-white border-t border-slate-200/80 space-y-1 max-h-56 overflow-y-auto">
                      <Link
                        to="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-xs font-bold text-[#1871F3] bg-blue-50"
                      >
                        Ver todos os 12 serviços →
                      </Link>
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/areas"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    location.pathname.startsWith('/areas') ? 'bg-blue-50 text-[#1871F3]' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1871F3]" />
                    <span>Cidades Atendidas</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleAnchorClick('#sobre')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-left"
                >
                  <span>Sobre a Empresa</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>

                <button
                  type="button"
                  onClick={() => handleAnchorClick('#problemas')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-left"
                >
                  <span>Diagnóstico de Problemas</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>

                <button
                  type="button"
                  onClick={() => handleAnchorClick('#avaliacoes')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-left"
                >
                  <span>Avaliações Verificadas</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>

                <button
                  type="button"
                  onClick={() => handleAnchorClick('#contato')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-left"
                >
                  <span>Contato & Localização</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>
              </div>

              {/* Action Buttons Inside Mobile Drawer */}
              <div className="pt-2 space-y-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimate();
                  }}
                  className="w-full bg-[#1871F3] hover:bg-[#1260D4] text-white py-3 rounded-xl text-sm font-bold text-center shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  SOLICITAR ORÇAMENTO ONLINE
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SITE.phone.telLink}
                    className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#061550] border border-slate-300/80 py-2.5 rounded-xl text-xs font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#1871F3]" />
                    <span>Ligar</span>
                  </a>

                  {SITE.links.whatsappUrl && (
                    <a
                      href={SITE.links.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Operating Hours Note */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#061550]">
                  <Clock className="w-3.5 h-3.5 text-[#1871F3]" />
                  <span>Horário de Atendimento</span>
                </div>
                <p>Segunda 09h–17h | Ter a Sex 08h–18h | Sáb 09h–15h</p>
                <div className="flex items-center gap-1 pt-0.5 text-[#1871F3] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Atendimento presencial no seu imóvel</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
