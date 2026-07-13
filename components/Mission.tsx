"use client";

import Link from "next/link";
import { ArrowLeft, Target, ShieldCheck, Zap, Users, Globe } from "lucide-react";

export default function Mission() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 text-left">
      <div className="mb-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0A0A0A] hover:text-[#056D34] bg-white border border-[#0A0A0A]/10 px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft size={14} />
          BACK TO ABOUT US
        </Link>
      </div>

      <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-12 rounded-3xl shadow-sm mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] flex items-center justify-center text-[#056D34] border border-[#0A0A0A]/10">
            <Target size={24} />
          </div>
          <div>
            <span className="text-[10px] tracking-widest font-bold text-gray-500 uppercase font-mono">
              DRIVEN BY PURPOSE
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight leading-none mt-1">
              Our Mission
            </h1>
          </div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl font-medium">
          &quot;To deliver integrated sourcing and global trading solutions that drive
          sustainable business growth through strategic partnerships, continuous
          innovation, and unwavering commitment. We streamline supply pipelines to
          provide seamless, risk-free trade setups.&quot;
        </p>

        <div className="border-t border-[#0A0A0A]/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Strategic Sourcing
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Expanding dynamic sourcing pathways to procure raw materials of the
              highest calibre without logistical compromises.
            </p>
          </div>
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Zero-Risk Pipeline
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Guaranteeing 100% document compliance, quality audits, and clear Letter
              of Credit processing for extreme safety.
            </p>
          </div>
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Empathetic Trade
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Working actively to support downlines, eliminate child-labor exposures,
              and respect ecological standards worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-[#0A0A0A]/10 p-8 rounded-3xl shadow-sm text-left">
          <h3 className="font-display font-extrabold text-xl text-[#0A0A0A] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#056D34] rounded-full" />
            Key Sourcing Milestones
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Our mission translates directly into active, quantitative service metrics
            that we refine and report continuously.
          </p>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#0A0A0A]" /> Mill-Grade Assurance
              </span>
              <span className="font-extrabold font-mono text-[#0A0A0A]">100% Verified</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Globe size={16} className="text-[#0A0A0A]" /> Bilateral Supply Lines
              </span>
              <span className="font-extrabold font-mono text-[#0A0A0A]">50+ Countries</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Zap size={16} className="text-[#0A0A0A]" /> SLA Response Time
              </span>
              <span className="font-extrabold font-mono text-emerald-600">Under 24 Hours</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Users size={16} className="text-[#0A0A0A]" /> Client Retention Rate
              </span>
              <span className="font-extrabold font-mono text-[#0A0A0A]">98.2% Since 2023</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] text-[#FCFCFC] p-8 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#056D34]/10 rounded-bl-full pointer-events-none" />

          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#056D34]">
              LEADERSHIP WITH INTEGRITY
            </span>
            <h3 className="font-display font-black text-2xl text-white mt-2 mb-4">
              Pioneering Positive Commercial Change
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              We look beyond short-term pricing to secure long-term sustainability. At
              Jagdamba Enterprises, our mission is to build robust raw material
              backbones that keep global factories spinning without friction.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              className="w-full bg-[#056D34] text-white hover:bg-white hover:text-[#0A0A0A] font-display font-bold text-xs tracking-wider py-4 rounded-xl transition-all cursor-pointer shadow border border-[#0A0A0A]/10 text-center block"
            >
              DISCUSS SOURCING AGREEMENT ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
