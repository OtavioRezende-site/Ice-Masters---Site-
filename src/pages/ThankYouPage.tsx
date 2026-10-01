import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, Phone, ArrowLeft, ShieldCheck } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

export const ThankYouPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-32 lg:py-40 bg-[#F5F8FC] min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl text-center space-y-6">
        
        {/* Animated/Glowing Check Icon */}
        <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200/60 shadow-inner">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SOLICITAÇÃO ENVIADA COM SUCESSO</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#061550] tracking-tight">
            {CONTENT.thankYou.title}
          </h1>

          <p className="text-sm font-semibold text-slate-700">
            {CONTENT.thankYou.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {CONTENT.thankYou.message}
        </p>

        {/* Urgent Contact Box */}
        <div className="p-5 rounded-2xl bg-[#041038] text-white border border-blue-900/40 text-left space-y-2">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Precisa de atendimento urgente?
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs text-slate-400">
              Ligue direto para a nossa equipe técnica:
            </span>
            <a
              href={SITE.phone.telLink}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#38BDF8] hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>{SITE.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#1871F3] hover:bg-[#1260D4] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{CONTENT.thankYou.buttonText}</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
