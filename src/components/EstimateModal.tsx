import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { IceMastersLogo } from './IceMastersLogo';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceSlug?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Focus trap and escape key
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('[data-autofocus]');
        if (closeBtn) {
          closeBtn.focus();
        } else {
          modalRef.current?.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Listen to GoHighLevel form submission event to redirect to /thank-you
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        (typeof event.data === 'string' && (event.data.includes('form-submitted') || event.data.includes('leadconnector'))) ||
        (typeof event.data === 'object' && (event.data.action === 'form-submitted' || event.data.type === 'form_submitted'))
      ) {
        onClose();
        navigate('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-estimate-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fade-in"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#041038]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto flex flex-col max-h-[94vh] focus:outline-none"
      >
        {/* Modal Top Header */}
        <div className="bg-[#061550] px-5 sm:px-8 py-3.5 sm:py-4 text-white flex items-center justify-between border-b border-blue-900/40 relative">
          <div className="flex items-center gap-3">
            <IceMastersLogo theme="dark" compact />
          </div>

          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:ring-2 focus:ring-[#1871F3] focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Official GoHighLevel Form */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="text-center max-w-lg mx-auto">
            <h2
              id="modal-estimate-title"
              className="text-xl sm:text-2xl font-extrabold text-[#061550] tracking-tight"
            >
              SOLICITAR ORÇAMENTO
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Atendimento técnico com visita presencial em {SITE.serviceAreas.join(', ')}.
            </p>
          </div>

          {/* Official GoHighLevel Embedded Form (Subconta) */}
          <div className="relative w-full min-h-[520px] bg-slate-50/70 rounded-2xl p-1 border border-slate-200/80 overflow-hidden">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-50 text-slate-500 z-10">
                <div className="w-7 h-7 border-3 border-[#1871F3] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-semibold text-slate-600">Carregando formulário seguro do GoHighLevel...</span>
              </div>
            )}

            <iframe
              src={SITE.integrations.ghlFormUrl}
              style={{ width: '100%', height: '540px', border: 'none', borderRadius: '12px' }}
              id={`inline-${SITE.integrations.ghlFormId}`}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Formulário de Orçamento"
              data-height="540"
              data-layout-iframe-id={`inline-${SITE.integrations.ghlFormId}`}
              data-form-id={SITE.integrations.ghlFormId}
              title="Formulário Oficial de Orçamento GoHighLevel"
              className="w-full"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          {/* Privacy & Verification Note */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 px-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Conexão direta com a subconta oficial Ice Masters</span>
            </span>

            <span className="font-mono text-[10px] text-slate-400">
              ID: {SITE.integrations.ghlFormId}
            </span>
          </div>

          {/* Direct Phone Call Alternative */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{SITE.baseCity} e proximidades</span>
            </div>

            <a
              href={SITE.phone.telLink}
              className="inline-flex items-center gap-2 text-[#1871F3] hover:text-[#1260D4] font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1871F3]" />
              <span>Prefere ligar direto? {SITE.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
