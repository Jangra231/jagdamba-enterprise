/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Magnet, 
  Globe, 
  Package, 
  Settings, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  X 
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onViewDetails?: (id: string) => void;
}

export default function Services({ onViewDetails }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleLearnMore = (id: string) => {
    if (onViewDetails) {
      onViewDetails(id);
    } else {
      setSelectedServiceId(id);
    }
  };

  const getIcon = (name: string, size = 28) => {
    switch (name) {
      case 'Magnet': return <Magnet size={size} />;
      case 'Globe': return <Globe size={size} />;
      case 'Package': return <Package size={size} />;
      case 'Settings': return <Settings size={size} />;
      case 'MessageSquare': return <MessageSquare size={size} />;
      default: return <Settings size={size} />;
    }
  };

  const getGridSpan = (id: string) => {
    // Elegant Bento Grid spanning configuration matching Image 2 perfectly!
    switch (id) {
      case 'lead-generation': return 'md:col-span-6 lg:col-span-7';
      case 'trading': return 'md:col-span-6 lg:col-span-5';
      case 'supply-chain': return 'md:col-span-6 lg:col-span-4';
      case 'industrial-solutions': return 'md:col-span-6 lg:col-span-4';
      case 'consulting': return 'md:col-span-12 lg:col-span-4';
      default: return 'md:col-span-6';
    }
  };

  const getVectorGraphic = (id: string) => {
    // Beautiful interactive responsive CSS SVG graphics inside bento cards
    switch (id) {
      case 'lead-generation':
        return (
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Magnet graphic */}
            <svg className="w-24 h-24 text-brand-secondary" viewBox="0 0 100 100" fill="none">
              <path d="M 30 25 L 30 55 A 20 20 0 0 0 70 55 L 70 25" stroke="#0A0A0A" strokeWidth="12" strokeLinecap="round" fill="none" />
              <rect x="24" y="20" width="12" height="10" fill="#056D34" rx="1" stroke="#0A0A0A" strokeWidth="1" />
              <rect x="64" y="20" width="12" height="10" fill="#056D34" rx="1" stroke="#0A0A0A" strokeWidth="1" />
              
              {/* Attraction waves */}
              <circle cx="50" cy="55" r="30" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="55" r="45" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="absolute top-1/4 right-1/4 w-3.5 h-3.5 bg-[#056D34] rounded-full border border-[#0A0A0A]/30" />
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#0A0A0A] rounded-full" />
          </div>
        );
      case 'trading':
        return (
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Globe sphere graphic */}
            <svg className="w-24 h-24 text-brand-secondary" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="36" stroke="#0A0A0A" strokeWidth="2" />
              <path d="M 14 50 A 36 36 0 0 0 86 50" stroke="#056D34" strokeWidth="1.5" />
              <path d="M 14 50 A 36 12 0 0 0 86 50" stroke="#0A0A0A" strokeWidth="1" />
              <path d="M 50 14 A 12 36 0 0 0 50 86" stroke="#056D34" strokeWidth="1" />
              
              {/* Orbital nodes */}
              <circle cx="35" cy="24" r="3" fill="#0A0A0A" />
              <circle cx="65" cy="76" r="4" fill="#056D34" stroke="#0A0A0A" strokeWidth="1" />
            </svg>
          </div>
        );
      case 'supply-chain':
        return (
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Delivery loop graphic */}
            <svg className="w-24 h-24 text-brand-secondary" viewBox="0 0 100 100" fill="none">
              {/* Isometric box wireframe */}
              <path d="M 50 20 L 78 35 L 50 50 L 22 35 Z" fill="rgba(5, 109, 52, 0.1)" stroke="#0A0A0A" strokeWidth="2" />
              <path d="M 22 35 L 22 65 L 50 80 L 50 50 Z" stroke="#056D34" strokeWidth="2" />
              <path d="M 78 35 L 78 65 L 50 80 L 50 50 Z" stroke="#0A0A0A" strokeWidth="1.5" />
              
              {/* Looping arrows */}
              <path d="M 15 50 Q 50 90, 85 50" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>
        );
      case 'industrial-solutions':
        return (
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Revolving gears graphic */}
            <svg className="w-24 h-24 text-brand-secondary" viewBox="0 0 100 100" fill="none">
              {/* Gear 1 */}
              <g>
                <circle cx="42" cy="42" r="16" stroke="#0A0A0A" strokeWidth="4" />
                <path d="M 42 22 L 42 26" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
                <path d="M 42 58 L 42 62" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
                <path d="M 22 42 L 26 42" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
                <path d="M 58 42 L 62 42" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
              </g>
              {/* Gear 2 */}
              <g>
                <circle cx="68" cy="68" r="12" stroke="#056D34" strokeWidth="3" />
                <path d="M 68 53 L 68 56" stroke="#056D34" strokeWidth="3" strokeLinecap="round" />
                <path d="M 68 80 L 68 83" stroke="#056D34" strokeWidth="3" strokeLinecap="round" />
                <path d="M 53 68 L 56 68" stroke="#056D34" strokeWidth="3" strokeLinecap="round" />
                <path d="M 80 68 L 83 68" stroke="#056D34" strokeWidth="3" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        );
      case 'consulting':
        return (
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Bubble advisors graphic */}
            <svg className="w-24 h-24 text-brand-secondary" viewBox="0 0 100 100" fill="none">
              <rect x="20" y="25" width="50" height="34" rx="8" fill="rgba(10,10,10,0.05)" stroke="#0A0A0A" strokeWidth="2" />
              <path d="M 30 59 L 26 66 L 38 59 Z" fill="#0A0A0A" />
              
              <rect x="42" y="45" width="42" height="28" rx="6" fill="rgba(5,109,52,0.1)" stroke="#056D34" strokeWidth="1.5" />
              <path d="M 72 73 L 78 80 L 74 73 Z" fill="#056D34" />
              
              {/* Status dots */}
              <circle cx="35" cy="42" r="2.5" fill="#0A0A0A" />
              <circle cx="45" cy="42" r="2.5" fill="#0A0A0A" />
              <circle cx="55" cy="42" r="2.5" fill="#0A0A0A" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId);

  return (
    <section id="services" className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      
      {/* Background soft glow filters */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#056D34]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#0a0a0a]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#056D34]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#0A0A0A]/70 uppercase font-mono">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
            SOLUTIONS THAT <span className="text-white bg-[#056D34] px-2 rounded-lg">CREATE VALUE.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] to-[#606060]">
              IMPACT THAT LASTS.
            </span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            At Jagdamba Enterprises, our services are designed to drive growth, foster connections, and build sustainable futures across energy, trade, packaging, and logistics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-20" id="services-bento-grid">
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              className={`${getGridSpan(service.id)} bg-white border border-[#0A0A0A]/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden hover:shadow-lg hover:scale-[1.01]`}
              id={`service-card-${service.id}`}
            >
              {/* Corner accent element */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#056D34]/10 rounded-full group-hover:scale-150 transition-all duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-[#0A0A0A]/5 text-[#0A0A0A] group-hover:bg-[#056D34] group-hover:text-white transition-colors duration-300">
                  {getIcon(service.iconName, 26)}
                </div>
                <button
                  onClick={() => handleLearnMore(service.id)}
                  className="w-10 h-10 rounded-full bg-[#FCFCFC] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#056D34] group-hover:text-white hover:rotate-45 transition-all duration-300 cursor-pointer"
                  title="Learn more"
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="text-left flex-1">
                  <span className="text-[10px] tracking-widest font-mono font-bold text-[#0A0A0A]/50 uppercase">Enterprise Service</span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A0A0A] mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* Vector graphic preview */}
                <div className="w-24 h-24 shrink-0 overflow-hidden hidden sm:block">
                  {getVectorGraphic(service.id)}
                </div>
              </div>

              {/* Bottom quick view text link */}
              <button 
                onClick={() => handleLearnMore(service.id)}
                className="text-xs font-bold tracking-widest text-[#056D34] hover:text-[#0A0A0A] text-left mt-6 flex items-center gap-1 cursor-pointer"
              >
                LEARN MORE ↗
              </button>
            </motion.div>
          ))}
        </div>

        {/* Horizontal footer highlight strip (High Contrast Accessibility: Black BG, Green Icons, White Text) */}
        <div className="bg-[#0A0A0A] text-[#FCFCFC] p-8 sm:p-10 rounded-3xl grid grid-cols-2 md:grid-cols-5 gap-6 text-center shadow-lg" id="services-key-pillars-strip">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 size={24} className="text-[#056D34]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Client-Centric</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-l border-white/10">
            <ShieldCheck size={24} className="text-[#056D34]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Trusted Partnerships</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-l border-white/10">
            <Leaf size={24} className="text-[#056D34]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Sustainable Impact</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-l border-white/10">
            <Globe size={24} className="text-[#056D34]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Global Sourcing</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-l border-white/10 col-span-2 md:col-span-1">
            <TrendingUp size={24} className="text-[#056D34]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Results Driven</span>
          </div>
        </div>

      </div>

      {/* Modern interactive modal popup for full services detail */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#FCFCFC] max-w-2xl w-full rounded-3xl border border-[#0A0A0A]/10 p-8 shadow-2xl overflow-hidden relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#0A0A0A]/5 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#056D34] transition-all cursor-pointer"
                id="close-service-modal-button"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#0A0A0A] text-[#056D34] shrink-0 border border-[#0A0A0A]/10">
                  {getIcon(selectedService.iconName, 28)}
                </div>
                <div className="text-left">
                  <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">Enterprise Solutions</span>
                  <h3 className="font-display font-extrabold text-2xl text-[#0A0A0A]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="text-left mb-6">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {selectedService.description}
                </p>

                <h4 className="font-display font-bold text-xs tracking-wider text-[#0A0A0A]/80 uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-[#0A0A0A] rounded-full" />
                  Key Features & Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-2 items-center bg-white border border-[#0A0A0A]/5 px-4 py-3 rounded-xl">
                      <CheckCircle2 size={16} className="text-[#0A0A0A] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end gap-3 pt-4 border-t border-[#0A0A0A]/10">
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="px-5 py-2.5 rounded-xl border border-[#0A0A0A]/10 text-xs font-semibold text-gray-700 hover:bg-white transition-colors cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setSelectedServiceId(null);
                    // Scroll to contact form
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#056D34] text-[#FCFCFC] text-xs font-bold hover:bg-[#0A0A0A] hover:text-[#FCFCFC] transition-all cursor-pointer border border-[#0A0A0A]/10"
                >
                  Request Proposal ↗
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
