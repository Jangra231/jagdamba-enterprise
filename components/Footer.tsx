"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  ArrowUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { PeacockLogo } from "./Navbar";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) return;
    setIsSubscribed(true);
    setEmailInput("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Company Overview", section: "/about" },
    { label: "Our Mission", section: "/mission" },
    { label: "Our Vision", section: "/vision" },
    { label: "B2B Global Services", section: "/services" },
    { label: "Submit Sourcing RFQ", section: "/contact" },
  ];

  return (
    <footer
      className="bg-[#0A0A0A] text-[#FCFCFC]/80 pt-24 pb-12 relative overflow-hidden text-left border-t border-[#0A0A0A]/10"
      id="corporate-footer-section"
    >
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#056D34]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-75 h-75 bg-[#056D34]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#cccdcc00] p-3 rounded-2xl w-fit">
              <Link href="/">
                <PeacockLogo theme="dark" />
              </Link>
            </div>

            <p className="text-[#FCFCFC]/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Jagdamba Enterprises is a leading multi-industry corporate group dedicated
              to reliable partnerships, green raw material trading, and custom lead
              generation. Established in 2023, shaping robust global operations.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#056D34] hover:bg-[#056D34] hover:text-white hover:scale-105 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#056D34] hover:bg-[#056D34] hover:text-white hover:scale-105 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#056D34] hover:bg-[#056D34] hover:text-white hover:scale-105 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#056D34] hover:bg-[#056D34] hover:text-white hover:scale-105 transition-all"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#056D34] uppercase mb-6 flex items-center gap-1.5">
              <span className="w-1 h-3 bg-[#056D34] rounded-full" />
              Corporate Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-semibold">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.section}
                    className="hover:text-[#056D34] text-left flex items-center gap-1 transition-colors cursor-pointer text-[#FCFCFC]/80"
                  >
                    <ChevronRight size={14} className="text-[#056D34]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <h4 className="font-display font-bold text-sm tracking-widest text-[#056D34] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-1 h-3 bg-[#056D34] rounded-full" />
                Sourcing Dispatch
              </h4>
              <p className="text-[#FCFCFC]/60 text-xs leading-relaxed">
                Subscribe to receive our periodic macro commodity forecasts, ESG
                summaries, and direct raw materials sourcing bulletins.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="relative flex">
              <input
                type="email"
                placeholder="Enter corporate email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-[#FCFCFC] focus:outline-none focus:border-[#056D34] pr-12 font-medium"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-2 rounded-lg bg-[#056D34] text-white hover:bg-white hover:text-[#0A0A0A] transition-colors cursor-pointer"
                title="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="flex items-center gap-2 bg-emerald-950/45 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl text-emerald-400 text-xs font-semibold"
                >
                  <CheckCircle2 size={14} />
                  Corporate subscription verified. Thank you!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-mono font-bold border-t border-white/5 pt-8">
          <p>
            © {new Date().getFullYear()} Jagdamba Enterprises. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <Link
              href="/privacy"
              className="hover:text-[#056D34] cursor-pointer transition-colors text-gray-400 font-mono font-bold text-xs"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#056D34] cursor-pointer transition-colors text-gray-400 font-mono font-bold text-xs"
            >
              TERMS OF COMPLIANCE
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#056D34] border border-[#0A0A0A]/10 text-[#FCFCFC] shadow-lg hover:bg-[#0A0A0A] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
          title="Scroll to Top"
          id="scroll-to-top-button"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  );
}
