/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldAlert, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isAdminMode: boolean;
  setIsAdminMode: (isAdmin: boolean) => void;
}

export function PeacockLogo({ theme = 'light', onClick }: { theme?: 'light' | 'dark'; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0">
      {/* Handcrafted high-fidelity SVG representation of the peacock "JE" logo from the user's image */}
      <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Silver/Metallic J gradient */}
          <linearGradient id="silverJ" x1="40" y1="35" x2="65" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          {/* Emerald/Green E gradient */}
          <linearGradient id="emeraldE" x1="60" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#056D34" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#044E24" />
          </linearGradient>
          
          {/* Peacock Body Blue gradient */}
          <linearGradient id="peacockBlue" x1="15" y1="30" x2="45" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="40%" stopColor="#056D34" />
            <stop offset="100%" stopColor="#022C16" />
          </linearGradient>

          {/* Feather Sweep Green gradient */}
          <linearGradient id="featherGreen" x1="20" y1="90" x2="110" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#022C16" />
            <stop offset="50%" stopColor="#056D34" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Feather Arc Sweep (Slightly swirling around JE) */}
        <path d="M 25 80 C 35 105, 75 110, 95 95 C 115 80, 110 50, 85 35" 
              stroke="url(#featherGreen)" strokeWidth="6" strokeLinecap="round" fill="none" />
              
        {/* Inner accented path on the feather sweep */}
        <path d="M 35 88 C 45 102, 70 104, 88 92 C 102 80, 100 56, 82 43" 
              stroke="#056D34" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Ocelli (Feather Eyes) along the sweep */}
        {/* Eye 1 */}
        <circle cx="50" cy="100" r="5" fill="#022C16" stroke="#056D34" strokeWidth="1.5" />
        <circle cx="50" cy="100" r="2" fill="#10B981" />
        
        {/* Eye 2 */}
        <circle cx="75" cy="94" r="5" fill="#022C16" stroke="#056D34" strokeWidth="1.5" />
        <circle cx="75" cy="94" r="2" fill="#10B981" />

        {/* Eye 3 */}
        <circle cx="98" cy="76" r="5" fill="#022C16" stroke="#056D34" strokeWidth="1.5" />
        <circle cx="98" cy="76" r="2" fill="#10B981" />

        {/* Eye 4 */}
        <circle cx="102" cy="54" r="5" fill="#022C16" stroke="#056D34" strokeWidth="1.5" />
        <circle cx="102" cy="54" r="2" fill="#10B981" />

        {/* "JE" Monogram Text/Graphics */}
        {/* Letter 'J' */}
        <path d="M 50 38 L 56 38 M 53 38 L 53 72 C 53 78, 48 81, 42 80 C 39 79.5, 37 78, 36 76" 
              stroke="url(#silverJ)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
        {/* Letter 'E' */}
        <path d="M 64 42 L 82 42 M 64 58 L 76 58 M 64 74 L 82 74 M 64 42 L 64 74" 
              stroke="url(#emeraldE)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Peacock Crest/Crown Plumes */}
        {/* Stems */}
        <line x1="28" y1="36" x2="20" y2="22" stroke="#056D34" strokeWidth="1.2" />
        <line x1="28" y1="36" x2="26" y2="20" stroke="#056D34" strokeWidth="1.2" />
        <line x1="28" y1="36" x2="33" y2="20" stroke="#056D34" strokeWidth="1.2" />
        <line x1="28" y1="36" x2="39" y2="22" stroke="#056D34" strokeWidth="1.2" />
        {/* Tips */}
        <circle cx="20" cy="22" r="2.5" fill="#10B981" stroke="#056D34" strokeWidth="1" />
        <circle cx="26" cy="20" r="2.5" fill="#10B981" stroke="#056D34" strokeWidth="1" />
        <circle cx="33" cy="20" r="2.5" fill="#10B981" stroke="#056D34" strokeWidth="1" />
        <circle cx="39" cy="22" r="2.5" fill="#10B981" stroke="#056D34" strokeWidth="1" />

        {/* Peacock Head and Neck */}
        <path d="M 16 75 C 10 55, 18 42, 28 36 C 35 32, 43 38, 43 45 C 43 50, 32 54, 34 75" 
              fill="url(#peacockBlue)" />
        <circle cx="28" cy="36" r="8" fill="url(#peacockBlue)" />
        <ellipse cx="29" cy="35" rx="3" ry="1.5" fill="#FFFFFF" transform="rotate(-15 29 35)" />
        <circle cx="29.5" cy="35" r="1" fill="#000000" />
        <path d="M 36 34 L 43 37 L 35 39 Z" fill="#056D34" />
      </svg>
      <span className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase font-display whitespace-nowrap ${
        theme === 'light' ? 'text-[#0A0A0A]' : 'text-[#FCFCFC]'
      }`}>
        Jagdamba<span className={theme === 'light' ? 'text-[#056D34]' : 'text-[#FCFCFC]/70'}> Enterprises</span>
      </span>
    </div>
  );
}

export default function Navbar({ activeSection, onNavigate, isAdminMode, setIsAdminMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 glass-navbar shadow-md' 
        : 'py-5 bg-transparent'
    }`} id="main-navigation-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/95 border border-[#0A0A0A]/10 rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-md backdrop-blur-xl transition-all">
          
          {/* Brand Logo */}
          <PeacockLogo onClick={() => onNavigate('home')} />

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                 className={`font-display text-sm font-semibold tracking-wider transition-all cursor-pointer relative py-1 ${
                  activeSection === item.id 
                    ? 'text-[#056D34] font-bold font-extrabold' 
                    : 'text-[#0A0A0A]/60 hover:text-[#056D34]'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#056D34]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons (Removed Call Dialer) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Let's Connect CTA */}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#056D34] text-[#FCFCFC] font-display font-bold text-xs tracking-wider px-5 py-3 rounded-xl hover:bg-[#0A0A0A] hover:text-[#FCFCFC] transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer border border-[#0A0A0A]/10"
              id="header-cta-button"
            >
              GET IN TOUCH
              <span>↗</span>
            </button>
          </div>

          {/* Mobile Menu Button - Optimized to be clean and fully responsive */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0A0A0A]/5 text-[#0A0A0A] hover:bg-[#0A0A0A]/10 border border-[#0A0A0A]/10 transition-all cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-4 right-4 z-40 bg-white border border-[#0A0A0A]/10 p-6 rounded-3xl shadow-xl backdrop-blur-3xl flex flex-col gap-4 text-[#0A0A0A]"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate(item.id);
                }}
                className={`font-display text-base font-bold text-left py-2.5 px-3 rounded-xl transition-all cursor-pointer ${
                  activeSection === item.id 
                    ? 'bg-[#056D34] text-[#FCFCFC]' 
                    : 'text-[#0A0A0A]/70 hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-[1px] bg-[#0A0A0A]/10 my-2" />
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('contact');
                }}
                className="w-full text-center bg-[#056D34] text-[#FCFCFC] font-display font-bold text-sm tracking-wider py-3 rounded-2xl hover:bg-[#0A0A0A] hover:text-[#FCFCFC] transition-all cursor-pointer border border-[#0A0A0A]/10"
              >
                GET IN TOUCH ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
