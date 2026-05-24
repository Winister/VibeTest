import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className = '', dark = false }: LogoProps) {
  const color = dark ? '#ffffff' : '#1A293B';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Cloud Outline */}
      <svg 
        viewBox="0 0 24 24" 
        className="w-10 h-10 mb-0.5" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
      {/* Text Group */}
      <div className="flex flex-col items-center leading-none">
        <span className="font-sans font-bold tracking-tight text-xl h-[22px]" style={{ color }}>
          StratByte
        </span>
        <span className="font-sans font-medium tracking-[0.2em] text-[0.45rem]" style={{ color }}>
          CLOUD SOLUTIONS
        </span>
      </div>
    </div>
  );
}
