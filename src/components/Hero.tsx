/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div 
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-24" 
      id="hero-section"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(252, 252, 252, 0.93), rgba(252, 252, 252, 0.97)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* Soft Background Grid & Glowing Accent Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#056D34]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#0a0a0a]/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center gap-8">
          
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#0A0A0A]/5 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#056D34] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#0A0A0A]/80 uppercase font-mono">
              EMPOWERING GLOBAL B2B LOGISTICS SINCE 1994
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-[#0A0A0A] leading-[1.05] flex flex-col items-center gap-2">
            <span>BUILD CONNECTIONS.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] to-[#7E7E7D]">
              CREATE OPPORTUNITIES.
            </span>
            <span className="bg-[#056D34] text-[#FCFCFC] px-5 py-2 inline-block mt-2 rounded-2xl shadow-sm text-3xl sm:text-5xl xl:text-6xl font-extrabold">
              ACCELERATE BUSINESS.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-lg max-w-2xl leading-relaxed font-normal mt-2">
            Jagdamba Enterprises is a premier global trading, bulk procurement, and industrial sourcing house. 
            We engineer seamless cross-border logistics, supply high-grade raw materials, and navigate customs 
            compliance with strict integrity and performance.
          </p>

          {/* Simple Trust Metrics row */}
          <div className="grid grid-cols-3 gap-8 sm:gap-16 border-t border-b border-[#0a0a0a]/10 py-6 my-4 w-full max-w-2xl">
            <div>
              <p className="font-display font-black text-2xl sm:text-3xl text-[#0A0A0A]">32+ Yrs</p>
              <p className="text-[10px] sm:text-xs text-[#7E7E7D] font-bold uppercase tracking-wider font-mono mt-1">Since 1994</p>
            </div>
            <div>
              <p className="font-display font-black text-2xl sm:text-3xl text-[#0A0A0A]">98%</p>
              <p className="text-[10px] sm:text-xs text-[#7E7E7D] font-bold uppercase tracking-wider font-mono mt-1">Retention</p>
            </div>
            <div>
              <p className="font-display font-black text-2xl sm:text-3xl text-[#0A0A0A]">50+ Hubs</p>
              <p className="text-[10px] sm:text-xs text-[#7E7E7D] font-bold uppercase tracking-wider font-mono mt-1">Global Sourcing</p>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#056D34] text-[#FCFCFC] hover:bg-[#0A0A0A] hover:text-white font-display font-bold text-xs sm:text-sm tracking-wider px-8 py-4 rounded-2xl shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#056D34]"
              id="hero-primary-cta"
            >
              Explore Sourcing Solutions
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] border border-[#0A0A0A]/15 font-display font-bold text-xs sm:text-sm tracking-wider px-8 py-4 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer"
              id="hero-secondary-cta"
            >
              Request Custom RFQ
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
