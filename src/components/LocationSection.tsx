import React from 'react';
import { MapPin, Clock, ExternalLink, Phone } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import { CONTENT } from '../config/content';

interface LocationSectionProps {
  onOpenEstimate: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D7FF2] mb-3">
            <MapPin className="w-4 h-4 text-[#0D7FF2]" />
            <span>{CONTENT.contact.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061550] tracking-tight leading-tight text-balance">
            {CONTENT.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {CONTENT.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Area & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-black text-[#061550]">
                  Área de Atendimento Confirmada
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Atendemos residências e comércios com serviços no local:
                </p>
              </div>

              {/* Service Areas badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SITE.serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#0D7FF2] shrink-0 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#061550]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Location details */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0D7FF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061550]">Base Operacional:</span>
                    <p className="text-slate-600 mt-0.5">{SITE.baseCity}</p>
                    {SITE.showAddress && SITE.address?.full && (
                      <p className="text-slate-500 text-xs mt-1">{SITE.address.full}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/60">
                  <Phone className="w-5 h-5 text-[#0D7FF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061550]">{CONTENT.contact.callPrompt}</span>
                    <p className="text-slate-600 mt-0.5">
                      <a href={SITE.phone.telLink} className="text-[#0D7FF2] hover:underline font-bold">
                        {SITE.phone.display}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions: Google Maps & Open Form Modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                {SITE.links.googleMapsUrl && (
                  <a
                    href={SITE.links.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#061550] hover:bg-[#041038] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all"
                  >
                    <MapPin className="w-4 h-4 text-[#38BDF8]" />
                    <span>VER NO GOOGLE MAPS</span>
                    <ExternalLink className="w-4 h-4 opacity-75 ml-1" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7FF2] hover:bg-[#0b6ad0] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Business Hours Table */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0D7FF2]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#061550]">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-xs text-slate-500">Horários oficiais da empresa</p>
                  </div>
                </div>
              </div>

              {/* Exact Schedule Table */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  HORÁRIO DA EMPRESA (NO LOCAL)
                </div>
                {SITE.hours.schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100 last:border-none"
                  >
                    <span className="font-semibold text-slate-700">{item.day}</span>
                    <span className={`font-mono font-bold ${item.hours === 'Fechado' ? 'text-rose-500' : 'text-[#061550]'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Online Contact Hours Box */}
              {SITE.hours.onlineHours && (
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/60 space-y-1">
                  <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                    ATENDIMENTO ON-LINE
                  </div>
                  <div className="text-xs sm:text-sm text-indigo-700 font-medium">
                    Solicitações e formulários digitais: <strong>{SITE.hours.onlineHours}</strong>
                  </div>
                  <div className="text-[11px] text-indigo-600/80 pt-1">
                    *{CONTENT.contact.onlinePrompt}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
