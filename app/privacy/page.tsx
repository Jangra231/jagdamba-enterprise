import { Lock, Eye, Server, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Jagdamba Enterprises",
  description:
    "How Jagdamba Enterprises protects, handles, and secures corporate raw material sourcing data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10 text-left">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A]/10 rounded-full w-fit mb-4 shadow-sm">
          <Lock className="w-4 h-4 text-[#0A0A0A]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/60 font-mono">
            Data Integrity
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-[#0A0A0A]">
          Privacy <span className="text-gray-500 italic">Policy</span>
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          How Jagdamba Enterprises protects, handles, and secures corporate raw
          material sourcing data.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <Eye size={18} className="text-[#056D34] stroke-[3]" />
            1. Information We Collect
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We collect information provided during corporate RFQ submissions, including
            corporate email addresses, telephone contacts, company name, targeted
            commodity requirements, and global shipment locations. We do not gather
            personal tracking metrics or consumer profiling details.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <Server size={18} className="text-[#056D34] stroke-[3]" />
            2. Storage & Operational Cryptography
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            All sourcing specifications, custom logistics notes, and trade negotiations
            are encrypted in transit and at rest. Access to the RFQ tracking system is
            restricted exclusively to authorized procurement desks and ESG compliance
            audits within Jagdamba Enterprises.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <RefreshCw size={18} className="text-[#056D34] stroke-[3]" />
            3. Data Sharing Restrictions
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Jagdamba Enterprises strictly enforces non-disclosure. We do not sell, rent,
            or distribute partner emails, shipping configurations, or raw material
            volume statistics to third-party advertising brokers or external trading
            desks. All sharing is limited to certified custom clearance agents and port
            shipping operators exclusively for trade execution.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400 font-mono">
        Last updated: July 2026 | Legal Operations Desk, Jagdamba Enterprises
      </div>
    </div>
  );
}
