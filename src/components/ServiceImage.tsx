import React, { useState } from 'react';
import { Wrench, Sparkles, Activity, ShieldCheck, Snowflake, Wind, Zap } from 'lucide-react';
import { SITE } from '../config/siteConfig';

interface ServiceImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number | string;
  height?: number | string;
}

export const ServiceImage: React.FC<ServiceImageProps> = ({
  src,
  alt,
  className = '',
  category = 'CLIMATIZAÇÃO',
  aspectRatio = 'aspect-[16/10]',
  loading = 'lazy',
  fetchPriority = 'auto',
  width = 800,
  height = 500
}) => {
  const [hasError, setHasError] = useState(false);

  const getFallbackIcon = () => {
    switch (category) {
      case 'LIMPEZA':
        return <Sparkles className="w-10 h-10 text-sky-400" />;
      case 'MANUTENÇÕES':
        return <Wrench className="w-10 h-10 text-[#38BDF8]" />;
      case 'REPAROS':
        return <Activity className="w-10 h-10 text-amber-400" />;
      case 'VENTILAÇÃO':
        return <Wind className="w-10 h-10 text-teal-400" />;
      case 'ELÉTRICA':
        return <Zap className="w-10 h-10 text-amber-300" />;
      case 'PREVENTIVA':
        return <ShieldCheck className="w-10 h-10 text-emerald-400" />;
      default:
        return <Snowflake className="w-10 h-10 text-[#38BDF8]" />;
    }
  };

  const formattedAlt = alt.includes(SITE.name) ? alt : `${alt} - ${SITE.name}`;

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gradient-to-br from-[#061550] via-[#09226e] to-[#1871F3] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden ${className}`}
      >
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-2 shadow-inner">
          {getFallbackIcon()}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-200 text-center line-clamp-1">
          {formattedAlt}
        </span>
        <span className="text-[10px] text-white/60 mt-1 font-mono">{SITE.name}</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={src}
        alt={formattedAlt}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      {/* Subtle overlay to ensure visual harmony with brand navy/blue */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#041038]/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
