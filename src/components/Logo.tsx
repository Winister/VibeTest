import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className = '', dark = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Sleek Minimalist Tech Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20">
        <div className="w-full h-full rounded-[10px] bg-[#0b0f19] flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-cyan-400" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
      </div>
      {/* Text Group */}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display font-black tracking-tight text-lg text-white">
          Stratbyte
        </span>
        <span className="font-mono font-bold tracking-[0.2em] text-[0.55rem] text-cyan-450 uppercase">
          Systems & Dev
        </span>
      </div>
    </div>
  );
}
