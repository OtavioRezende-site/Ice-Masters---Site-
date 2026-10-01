import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Phone } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface NotFoundViewProps {
  onReturnHome?: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#041038] text-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#061550] rounded-3xl p-8 border border-blue-500/20 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-black font-mono text-[#38BDF8]">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-white">
            {CONTENT.notFound.title}
          </h1>
          <p className="text-sm font-semibold text-slate-300">
            {CONTENT.notFound.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          {CONTENT.notFound.message}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            onClick={onReturnHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1871F3] hover:bg-[#1260D4] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{CONTENT.notFound.buttonText}</span>
          </Link>

          <a
            href={SITE.phone.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            <span>Ligar: {SITE.phone.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
