/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldAlert, Mail } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isAdminMode: boolean;
  setIsAdminMode: (isAdmin: boolean) => void;
}

export function PeacockLogo({
  theme = "light",
  onClick,
}: {
  theme?: "light" | "dark";
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
    >
      {/* Handcrafted high-fidelity SVG representation of the peacock "JE" logo from the user's image */}

      <img
        src="./logo.png"
        alt="Jagdamba Enterprises Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain shrink-0 rounded-2xl"
      />
      <span
        className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase font-display whitespace-nowrap ${
          theme === "light" ? "text-[#0A0A0A]" : "text-[#FCFCFC]"
        }`}
      >
        Jagdamba
        <span
          className={theme === "light" ? "text-[#056D34]" : "text-[#FCFCFC]/70"}
        >
          {" "}
          Enterprises
        </span>
      </span>
    </div>
  );
}

export default function Navbar({
  activeSection,
  onNavigate,
  isAdminMode,
  setIsAdminMode,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "about", label: "ABOUT US" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 glass-navbar shadow-md" : "py-5 bg-transparent"
      }`}
      id="main-navigation-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/95 border border-[#0A0A0A]/10 rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-md backdrop-blur-xl transition-all">
          {/* Brand Logo */}
          <PeacockLogo onClick={() => onNavigate("home")} />

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-display text-sm font-semibold tracking-wider transition-all cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? "text-[#056D34] font-bold"
                    : "text-[#0A0A0A]/60 hover:text-[#056D34]"
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
              onClick={() => onNavigate("contact")}
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
                    ? "bg-[#056D34] text-[#FCFCFC]"
                    : "text-[#0A0A0A]/70 hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]"
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-px bg-[#0A0A0A]/10 my-2" />

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("contact");
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
