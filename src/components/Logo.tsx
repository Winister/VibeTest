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
            strokeWidth="2.25" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M17.5 17.5c2.5 0 4.5-2 4.5-4.5c0-2-1.3-3.7-3.2-4.3c-.6-3.2-3.4-5.7-6.8-5.7c-3 0-5.6 1.9-6.5 4.7C3.4 8.1 1.5 9.8 1.5 12c0 3 2.5 5.5 5.5 5.5h10.5z" />
          </svg>
        </div>
      </div>
      {/* Text Group */}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display font-black tracking-tight text-lg text-white">
          StratByte
        </span>
        <span className="font-mono font-bold tracking-[0.2em] text-[0.55rem] text-cyan-400 uppercase">
          Cloud Solutions
        </span>
      </div>
    </div>
  );
}
