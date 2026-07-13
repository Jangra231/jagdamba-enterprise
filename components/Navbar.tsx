"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

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
      className="flex flex-col cursor-pointer shrink-0 group select-none relative w-fit"
      id="brand-logo-container"
    >
      <div className="flex items-center gap-2.5 sm:gap-3 h-9.5 sm:h-11.5 md:h-13">
        <motion.div
          className="h-full aspect-square flex items-center justify-center shrink-0"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img
            src="/logo.png"
            alt="Jaenly Logo"
            className="h-full w-full bg-white rounded-2xl object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <span
          className={`h-full flex items-center text-[30px] sm:text-[36px] md:text-[42px] font-black tracking-tight uppercase font-display leading-none whitespace-nowrap transition-colors duration-300 ${
            theme === "light"
              ? "text-[#056D34] group-hover:text-[#0A0A0A]"
              : "text-[#056D34] group-hover:text-emerald-400"
          }`}
        >
          JAENLY
        </span>
      </div>

      <div
        className={`w-full flex justify-between text-[8px] sm:text-[10px] md:text-[11px] font-black tracking-normal font-mono uppercase mt-1 transition-colors duration-300 ${
          theme === "light"
            ? "text-[#262626] group-hover:text-[#056D34]"
            : "text-[#FCFCFC]/80 group-hover:text-emerald-400"
        }`}
      >
        <span>J</span>
        <span>A</span>
        <span>G</span>
        <span>D</span>
        <span>A</span>
        <span>M</span>
        <span>B</span>
        <span>A</span>
        <span className="w-1.5 sm:w-2"></span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>E</span>
        <span>R</span>
        <span>P</span>
        <span>R</span>
        <span>I</span>
        <span>S</span>
        <span>E</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
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
    { id: "/", label: "HOME" },
    { id: "/services", label: "SERVICES" },
    { id: "/about", label: "ABOUT US" },
    { id: "/contact", label: "CONTACT" },
  ];

  const isActive = (id: string) => {
    if (id === "/") return pathname === "/";
    return pathname.startsWith(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 glass-navbar shadow-md" : "py-5 bg-transparent"
      }`}
      id="main-navigation-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/95 border border-[#0A0A0A]/10 rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-md backdrop-blur-xl transition-all">
          <Link href="/">
            <PeacockLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`font-display text-sm font-semibold tracking-wider transition-all cursor-pointer relative py-1 ${
                  isActive(item.id)
                    ? "text-[#056D34] font-bold"
                    : "text-[#0A0A0A]/60 hover:text-[#056D34]"
                }`}
              >
                {item.label}
                {isActive(item.id) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#056D34]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#056D34] text-[#FCFCFC] font-display font-bold text-xs tracking-wider px-5 py-3 rounded-xl hover:bg-[#0A0A0A] hover:text-[#FCFCFC] transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer border border-[#0A0A0A]/10"
            >
              GET IN TOUCH
              <span>↗</span>
            </Link>
          </div>

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
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-base font-bold text-left py-2.5 px-3 rounded-xl transition-all cursor-pointer ${
                  isActive(item.id)
                    ? "bg-[#056D34] text-[#FCFCFC]"
                    : "text-[#0A0A0A]/70 hover:bg-[#0a0a0a]/5 hover:text-[#0A0A0A]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="h-px bg-[#0A0A0A]/10 my-2" />

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-[#056D34] text-[#FCFCFC] font-display font-bold text-sm tracking-wider py-3 rounded-2xl hover:bg-[#0A0A0A] hover:text-[#FCFCFC] transition-all cursor-pointer border border-[#0A0A0A]/10"
            >
              GET IN TOUCH ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
