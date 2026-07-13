"use client";

import Link from "next/link";
import { ArrowLeft, Globe, Award, Sparkles, Leaf, Eye } from "lucide-react";

export default function Vision() {
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
            <Eye size={24} />
          </div>
          <div>
            <span className="text-[10px] tracking-widest font-bold text-gray-500 uppercase font-mono">
              GUIDED BY INTEGRITY
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight leading-none mt-1">
              Our Vision
            </h1>
          </div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl font-medium">
          &quot;To be a globally respected, sustainable enterprise known for creating
          long-term value, building lifelong trust, and empowering businesses for the
          future. We actively innovate to make global commodity trading fully
          carbon-neutral and green.&quot;
        </p>

        <div className="border-t border-[#0A0A0A]/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Fully Green Trading
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              A commitment to tracking carbon indices on shipping lanes and selecting
              certified carbon-offset raw materials.
            </p>
          </div>
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Dynamic Value Creation
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Expanding beyond generic transaction brokering to develop full-funnel
              lead curation, active verification, and legal clearing.
            </p>
          </div>
          <div className="bg-[#FCFCFC]/50 p-6 rounded-2xl border border-[#0A0A0A]/5">
            <h4 className="font-display font-bold text-[#0A0A0A] text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#056D34] rounded-full" />
              Future-Proof Networks
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Deploying real-time monitoring and robust supply networks that bypass
              high-tariff shipping disruptions dynamically.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-[#0A0A0A]/10 p-8 rounded-3xl shadow-sm text-left">
          <h3 className="font-display font-extrabold text-xl text-[#0A0A0A] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#056D34] rounded-full" />
            Ecological & Global Standards
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            We operate in perfect alignment with international standards and continue to
            secure credentials that validate our corporate integrity.
          </p>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Leaf size={16} className="text-[#0A0A0A]" /> Eco-certified Sourcing
              </span>
              <span className="font-extrabold text-[#0A0A0A]">FSC & REACH Compliant</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Sparkles size={16} className="text-[#0A0A0A]" /> Technology Integration
              </span>
              <span className="font-extrabold text-[#0A0A0A]">Smart Portal Trackers</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Globe size={16} className="text-[#0A0A0A]" /> Interconnected Hubs
              </span>
              <span className="font-extrabold text-[#0A0A0A]">Asia, MEA & Europe</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-gray-100 items-center">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Award size={16} className="text-[#0A0A0A]" /> Quality Auditing Protocol
              </span>
              <span className="font-extrabold text-emerald-600">ISO 9001:2015 Approved</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] text-[#FCFCFC] p-8 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#056D34]/10 rounded-bl-full pointer-events-none" />

          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#056D34]">
              A SUSTAINABLE FORECAST
            </span>
            <h3 className="font-display font-black text-2xl text-white mt-2 mb-4">
              Building the Future of Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Our vision guides us to actively minimize the ecological footprint of bulk
              freight operations. We work in real-time with carbon-offset registries to
              ensure that our supply channels support local reforestation projects.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              className="w-full bg-[#056D34] text-white hover:bg-white hover:text-[#0A0A0A] font-display font-bold text-xs tracking-wider py-4 rounded-xl transition-all cursor-pointer shadow border border-[#0A0A0A]/10 text-center block"
            >
              DISCUSS GREEN SUPPLY CHAINS ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
