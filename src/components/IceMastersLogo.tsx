import React from 'react';
import { SITE } from '../config/siteConfig';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  compact?: boolean;
}

export const IceMastersLogo: React.FC<LogoProps> = ({
  className = '',
  theme = 'auto',
  compact = false
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Exact Visual Mark: Split Air Conditioner blowing ice mist over frozen ICE MASTERS */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className={compact ? "w-11 h-11" : "w-14 h-14"}
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Logo Oficial ${SITE.name}`}
        >
          <defs>
            {/* Split Air Conditioner metallic gradient */}
            <linearGradient id="acBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Ice Letter Gradient */}
            <linearGradient id="iceLetterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="35%" stopColor="#0284C7" />
              <stop offset="70%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#082F49" />
            </linearGradient>

            {/* Frost & Snow Cap Gradient */}
            <linearGradient id="snowCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </linearGradient>

            {/* Masters Ice Typography Gradient */}
            <linearGradient id="mastersGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Airflow glow stream */}
            <linearGradient id="coldBreeze" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0D7FF2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </linearGradient>

            <filter id="iceGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Deep Navy Emblem Base Background */}
          <rect width="160" height="160" rx="28" fill="#041038" />

          {/* Airflow Blast Lines from AC down to "ICE" */}
          <path
            d="M 40,32 Q 50,55 35,62 M 65,33 Q 75,52 68,60 M 95,33 Q 85,52 92,60 M 120,32 Q 110,55 125,62"
            stroke="url(#coldBreeze)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Top Wall-Mounted Split Air Conditioner */}
          <g transform="translate(24, 12)">
            {/* AC Unit Outer Chassis */}
            <rect
              x="0"
              y="0"
              width="112"
              height="24"
              rx="4.5"
              fill="url(#acBody)"
              stroke="#64748B"
              strokeWidth="0.8"
            />
            {/* Top bevel highlight */}
            <line x1="2" y1="2" x2="110" y2="2" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
            
            {/* Center LED Display & Logo Dot */}
            <rect x="50" y="7" width="12" height="3" rx="1.5" fill="#0F172A" />
            <circle cx="56" cy="8.5" r="0.8" fill="#38BDF8" />

            {/* Bottom Air Louvers / Vents */}
            <rect x="5" y="15" width="102" height="6.5" rx="1.5" fill="#1E293B" />
            <line x1="10" y1="18" x2="102" y2="18" stroke="#334155" strokeWidth="1" />
            <line x1="34" y1="15" x2="34" y2="21.5" stroke="#0F172A" strokeWidth="1" />
            <line x1="58" y1="15" x2="58" y2="21.5" stroke="#0F172A" strokeWidth="1" />
            <line x1="82" y1="15" x2="82" y2="21.5" stroke="#0F172A" strokeWidth="1" />

            {/* Cold air frost wisps exiting bottom */}
            <path
              d="M 12,21.5 Q 8,26 14,29 M 32,21.5 Q 36,27 30,30 M 78,21.5 Q 82,27 76,30 M 98,21.5 Q 104,26 96,29"
              stroke="#7DD3FC"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>

          {/* Giant Frozen "ICE" Typography with Dripping Icicles */}
          <g transform="translate(14, 42)">
            {/* LETTER "I" with Snow & Icicles */}
            <g transform="translate(0, 0)">
              {/* Main Letter Body */}
              <rect x="2" y="6" width="34" height="64" rx="3" fill="url(#iceLetterGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              {/* Snow cap on top */}
              <path
                d="M 0,6 Q 8,-1 19,0 Q 28,-1 38,6 L 36,12 Q 31,10 25,12 Q 19,8 13,12 Q 6,10 2,12 Z"
                fill="url(#snowCap)"
              />
              {/* Dripping icicles from top */}
              <polygon points="6,12 8,22 10,12" fill="#BAE6FD" />
              <polygon points="16,12 18,26 20,12" fill="#FFFFFF" />
              <polygon points="27,12 29,20 31,12" fill="#BAE6FD" />
              {/* Dripping icicles from bottom */}
              <polygon points="4,70 6,78 8,70" fill="#38BDF8" />
              <polygon points="17,70 19,82 21,70" fill="#7DD3FC" />
              <polygon points="28,70 30,76 32,70" fill="#38BDF8" />
            </g>

            {/* LETTER "C" with Snow & Icicles */}
            <g transform="translate(42, 0)">
              {/* Main Curved Body */}
              <path
                d="M 46,14 C 42,7 34,4 24,4 C 10,4 0,16 0,38 C 0,60 10,72 24,72 C 34,72 42,69 46,62 L 35,53 C 32,56 29,58 24,58 C 17,58 13,50 13,38 C 13,26 17,18 24,18 C 29,18 32,20 35,23 Z"
                fill="url(#iceLetterGrad)"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />
              {/* Top Snow Cap */}
              <path
                d="M 12,4 Q 24,-1 36,4 Q 44,6 48,14 L 43,18 Q 38,12 28,12 Q 18,12 13,16 Z"
                fill="url(#snowCap)"
              />
              {/* Icicle Drips */}
              <polygon points="20,16 22,25 24,16" fill="#FFFFFF" />
              <polygon points="32,17 34,27 36,17" fill="#BAE6FD" />
              <polygon points="14,64 16,74 18,64" fill="#38BDF8" />
              <polygon points="28,68 30,80 32,68" fill="#7DD3FC" />
            </g>

            {/* LETTER "E" with Snow & Icicles */}
            <g transform="translate(94, 0)">
              {/* Main Letter Body */}
              <path
                d="M 2,6 L 38,6 L 38,20 L 16,20 L 16,31 L 34,31 L 34,43 L 16,43 L 16,56 L 38,56 L 38,70 L 2,70 Z"
                fill="url(#iceLetterGrad)"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />
              {/* Top Snow Cap */}
              <path
                d="M 0,6 Q 10,-1 20,0 Q 30,-1 40,6 L 38,12 Q 30,10 20,12 Q 10,8 2,12 Z"
                fill="url(#snowCap)"
              />
              {/* Dripping icicles */}
              <polygon points="8,12 10,21 12,12" fill="#BAE6FD" />
              <polygon points="24,12 26,24 28,12" fill="#FFFFFF" />
              <polygon points="22,43 24,51 26,43" fill="#BAE6FD" />
              <polygon points="8,70 10,79 12,70" fill="#38BDF8" />
              <polygon points="26,70 28,82 30,70" fill="#7DD3FC" />
            </g>
          </g>

          {/* "MASTERS" 3D Frosted Ice Typography */}
          <g transform="translate(10, 108)">
            {/* Background shadow glow */}
            <text
              x="70"
              y="20"
              textAnchor="middle"
              fill="#061550"
              fontSize="23"
              fontWeight="900"
              letterSpacing="2.5"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              MASTERS
            </text>
            {/* Main frosted ice letters */}
            <text
              x="70"
              y="18.5"
              textAnchor="middle"
              fill="url(#mastersGrad)"
              stroke="#38BDF8"
              strokeWidth="0.8"
              fontSize="23"
              fontWeight="900"
              letterSpacing="2.5"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              MASTERS
            </text>
          </g>

          {/* Subtitle: "REFRIGERAÇÃO E CLIMATIZAÇÃO" */}
          <text
            x="80"
            y="144"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8"
            fontWeight="800"
            letterSpacing="2.6"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            opacity="0.95"
          >
            REFRIGERAÇÃO E CLIMATIZAÇÃO
          </text>
        </svg>
      </div>

      {/* Typography for Header and Footer */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif] ${
            compact ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'
          } ${
            isLight ? 'text-[#061550]' : 'text-white'
          }`}
          style={{ letterSpacing: '0.05em' }}
        >
          ICE MASTERS
        </span>
        <span
          className={`font-bold uppercase tracking-[0.18em] text-[8px] sm:text-[9px] ${
            isLight ? 'text-[#1871F3]' : 'text-[#38BDF8]'
          }`}
          style={{ marginTop: '2px' }}
        >
          REFRIGERAÇÃO E CLIMATIZAÇÃO
        </span>
      </div>
    </div>
  );
};
