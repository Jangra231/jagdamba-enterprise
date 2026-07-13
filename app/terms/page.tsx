import { ShieldCheck, FileText, Scale, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Jagdamba Enterprises",
  description:
    "Legal guidelines and international supply standards governing partnerships with Jagdamba Enterprises.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10 text-left">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A]/10 rounded-full w-fit mb-4 shadow-sm">
          <Scale className="w-4 h-4 text-[#0A0A0A]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/60 font-mono">
            Regulatory Compliance
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-[#0A0A0A]">
          Terms & <span className="text-gray-500 italic">Conditions</span>
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          Legal guidelines and international supply standards governing partnerships
          with Jagdamba Enterprises.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#056D34] stroke-[3]" />
            1. Corporate Governance & RFQ Binding
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
            Jagdamba Enterprises coordinates global multi-industry raw material supply
            chains. Any Request for Quote (RFQ) submitted through our digital portal
            constitutes an invitation to treat and is subject to comprehensive
            validation by our global partnerships desk.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            All prices quoted following RFQ submission are valid for a standard duration
            of 7 business days, due to commodity price volatility, unless explicitly
            agreed otherwise in writing.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <FileText size={18} className="text-[#056D34] stroke-[3]" />
            2. Material Standards & Certification
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We adhere to rigorous international material quality standards. Material
            safety data sheets (MSDS), mill test certificates, and compliance ratings
            are furnished with each dispatch consignment. Buyers are required to
            complete inspection checks at port of entry within 5 calendar days of cargo
            release.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <Scale size={18} className="text-[#056D34] stroke-[3]" />
            3. Environmental, Social, and Governance (ESG) Compliance
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
            Jagdamba Enterprises is fully committed to carbon neutrality, sustainable
            sourcing, and absolute zero-tolerance for child labor or hazardous work
            conditions across our vendor network.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            By engaging in a commercial contract with us, partners certify that their
            downstream supply lines strictly conform to ESG regulations and local
            environmental laws.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#0A0A0A]/10 rounded-2xl shadow-sm">
          <h2 className="text-lg font-extrabold text-[#0A0A0A] mb-3 flex items-center gap-2">
            <CheckCircle size={18} className="text-[#056D34] stroke-[3]" />
            4. Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Jagdamba Enterprises shall not be held liable for standard force majeure
            occurrences, including maritime delays, geopolitical trade embargoes,
            customs clearance backlogs, or global material storage constraints. Our
            liability is capped strictly at the invoice value of the validated trade
            consignment.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400 font-mono">
        Last updated: July 2026 | Legal Operations Desk, Jagdamba Enterprises
      </div>
    </div>
  );
}
