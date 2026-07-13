"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Award, Globe, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import { TIMELINE_DATA, CORE_VALUES, STATISTICS_DATA } from "@/lib/data";

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span
      ref={elementRef}
      className="font-display font-black text-4xl sm:text-5xl text-[#0A0A0A]"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(TIMELINE_DATA.length - 1);

  return (
    <section id="about" className="py-24 bg-[#FCFCFC]/50 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#056D34]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#0a0a0a]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#0A0A0A]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#0A0A0A]/70 uppercase font-mono">
              ABOUT US
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
            OUR HERITAGE. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0A0A0A] to-[#606060]">
              OUR FUTURE.
            </span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            For over 3 years, Jagdamba Enterprises has been driven by a simple belief —
            that business can be a force for good. What began as a vision to deliver
            quality solutions has grown into a diversified enterprise creating
            sustainable value across industries and communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-white border border-[#0A0A0A]/10 p-8 flex flex-col justify-between group shadow-sm">
            <div className="absolute inset-0 bg-linear-to-br from-[#056D34]/5 via-transparent to-[#0a0a0a]/5 pointer-events-none" />

            <div>
              <span className="text-[10px] tracking-widest font-extrabold text-[#0A0A0A] bg-[#0A0A0A]/10 px-3 py-1.5 rounded-full uppercase font-mono">
                Corporate Core
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[#0A0A0A] mt-4">
                Building Partnerships. <br />
                <span className="text-[#0A0A0A]/60 font-bold">Powering Progress.</span>
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Jagdamba Enterprises is a trusted partner in procurement,
                partnerships, and performance. For over three decades, we&apos;ve
                helped businesses across industries build strong connections,
                unlock growth, and achieve measurable results.
              </p>
            </div>

            <div className="my-8 relative flex items-center justify-center p-4">
              <svg className="w-full max-w-70 h-40 text-gray-200" viewBox="0 0 100 50" fill="none">
                <path d="M 10 50 L 10 20 L 25 10 L 40 20 L 40 50 Z" fill="currentColor" opacity="0.5" />
                <path d="M 25 50 L 25 12 L 35 5 L 45 12 L 45 50 Z" fill="currentColor" opacity="0.8" />
                <path d="M 50 50 L 50 25 L 65 15 L 80 25 L 80 50 Z" fill="currentColor" opacity="0.3" />
                <path d="M 5 45 Q 30 15, 95 45" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 5 40 Q 30 10, 95 40" stroke="#056D34" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white border border-[#0A0A0A]/15 px-4 py-2 rounded-xl text-center shadow-sm">
                  <span className="font-mono text-[10px] tracking-widest text-gray-500 block uppercase">
                    HEADQUARTERS
                  </span>
                  <span className="text-xs font-bold text-[#0A0A0A] font-display">
                    Hissar
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#056D34] flex items-center justify-center text-white border border-[#0A0A0A]/10">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#0A0A0A]">100% Certified Sourcing</p>
                <p className="text-[10px] text-gray-500">ISO Standards compliance</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <Link
              href="/mission"
              className="bg-white border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 p-8 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row gap-6 relative group hover:shadow-md cursor-pointer text-left"
              title="View Our Mission Page"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FCFCFC] flex items-center justify-center text-[#0A0A0A] border border-[#0A0A0A]/10 group-hover:bg-[#056D34] group-hover:text-white transition-all">
                <Award size={24} />
              </div>
              <div className="text-left grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-500 text-xs font-bold tracking-widest font-mono">
                    DRIVEN BY PURPOSE
                  </span>
                  <span className="text-[10px] font-bold text-white bg-[#056D34] px-2 py-0.5 rounded font-mono">
                    CLICK TO READ
                  </span>
                </div>
                <h4 className="font-display font-extrabold text-xl text-[#0A0A0A] mb-2 group-hover:text-[#056D34] transition-colors">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To deliver integrated solutions that drive business growth through
                  strategic partnerships, innovation, and unwavering commitment. We
                  provide seamless, risk-free trade setups.
                </p>
              </div>
              <div className="absolute right-6 top-6 sm:top-auto sm:bottom-6 w-8 h-8 rounded-full bg-[#FCFCFC] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#056D34] group-hover:text-white transition-all">
                <ChevronRight size={16} />
              </div>
            </Link>

            <Link
              href="/vision"
              className="bg-white border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 p-8 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row gap-6 relative group hover:shadow-md cursor-pointer text-left"
              title="View Our Vision Page"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FCFCFC] flex items-center justify-center text-[#0A0A0A] border border-[#0A0A0A]/10 group-hover:bg-[#056D34] group-hover:text-white transition-all">
                <Globe size={24} />
              </div>
              <div className="text-left grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-500 text-xs font-bold tracking-widest font-mono">
                    GUIDED BY INTEGRITY
                  </span>
                  <span className="text-[10px] font-bold text-white bg-[#056D34] px-2 py-0.5 rounded font-mono">
                    CLICK TO READ
                  </span>
                </div>
                <h4 className="font-display font-extrabold text-xl text-[#0A0A0A] mb-2 group-hover:text-[#056D34] transition-colors">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be a globally respected enterprise known for creating value,
                  building trust, and empowering businesses for the future. We aspire
                  to make trading fully green.
                </p>
              </div>
              <div className="absolute right-6 top-6 sm:top-auto sm:bottom-6 w-8 h-8 rounded-full bg-[#FCFCFC] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#056D34] group-hover:text-white transition-all">
                <ChevronRight size={16} />
              </div>
            </Link>

            <div className="bg-white border border-[#0A0A0A]/10 p-8 rounded-3xl text-left shadow-sm">
              <h4 className="font-display font-extrabold text-lg text-[#0A0A0A] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#056D34] rounded-full" />
                Our Core Principles
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 size={16} className="text-[#0A0A0A] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{val.title}</p>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-[#0A0A0A]/10 p-6 sm:p-8 rounded-3xl shadow-sm mb-24"
          id="stats-counter-bar"
        >
          {STATISTICS_DATA.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 border-r last:border-r-0 border-gray-200"
            >
              <CountingNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-xs sm:text-sm font-bold tracking-wide text-gray-600 mt-2 font-mono uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-12 rounded-3xl shadow-sm text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="text-[10px] tracking-widest font-bold text-gray-500 block uppercase font-mono">
                HISTORICAL MILESTONES
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[#0A0A0A]">
                Our Journey of Growth
              </h3>
            </div>
            <span className="text-xs text-[#056D34] font-mono tracking-wider bg-[#056D34]/10 px-3 py-1.5 rounded-full border border-[#056D34]/10 font-semibold">
              ESTABLISHED 2023
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-8">
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gray-200 z-0" />

            {TIMELINE_DATA.map((evt, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineIdx(idx)}
                className="flex flex-col items-center md:items-start text-center md:text-left z-10 group cursor-pointer focus:outline-none"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 mb-3"
                  style={{
                    borderColor: activeTimelineIdx === idx ? "#056D34" : "#E5E7EB",
                    backgroundColor: activeTimelineIdx === idx ? "#056D34" : "#FCFCFC",
                  }}
                >
                  <span
                    className={`font-display font-extrabold text-sm ${
                      activeTimelineIdx === idx ? "text-[#FCFCFC]" : "text-[#0A0A0A]"
                    }`}
                  >
                    {evt.year}
                  </span>
                </div>

                <span
                  className={`text-xs font-bold tracking-wider uppercase transition-colors duration-300 font-mono ${
                    activeTimelineIdx === idx
                      ? "text-[#056D34]"
                      : "text-gray-400 group-hover:text-[#056D34]"
                  }`}
                >
                  {evt.title}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTimelineIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FCFCFC] border border-[#0A0A0A]/10 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          >
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl text-[#FCFCFC] bg-[#056D34] flex items-center justify-center shrink-0 border border-[#0A0A0A]/10">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-left">
                <span className="font-display font-black text-3xl text-[#056D34] mr-3">
                  {TIMELINE_DATA[activeTimelineIdx].year}
                </span>
                <span className="font-display font-extrabold text-lg text-[#0A0A0A]">
                  {TIMELINE_DATA[activeTimelineIdx].title}
                </span>
                <p className="text-sm text-gray-700 mt-2 max-w-2xl leading-relaxed">
                  {TIMELINE_DATA[activeTimelineIdx].description}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const nextIdx = (activeTimelineIdx + 1) % TIMELINE_DATA.length;
                setActiveTimelineIdx(nextIdx);
              }}
              className="text-xs font-bold tracking-widest text-[#056D34] hover:text-[#0A0A0A] flex items-center gap-1 shrink-0 mt-4 md:mt-0 transition-colors"
            >
              EXPLORE NEXT ↗
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
