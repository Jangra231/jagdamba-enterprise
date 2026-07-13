"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

interface ServiceDetailsProps {
  serviceId: string;
}

export default function ServiceDetails({ serviceId }: ServiceDetailsProps) {
  const router = useRouter();
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto">
        <p className="text-sm font-semibold text-rose-500">Service not found.</p>
        <Link
          href="/services"
          className="mt-4 inline-block px-4 py-2 bg-[#0A0A0A] text-white rounded-xl"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const getExtendedData = (id: string) => {
    switch (id) {
      case "lead-generation":
        return {
          audience: "B2B Manufacturers, Bulk Distributors, Infrastructure Buyers",
          methodology: "Data-driven funnel matchmaking & qualified RFC curation",
          sla: "First-level verification completed within 48 hours",
          phases: [
            {
              title: "Market Mapping & Ideal Buyer Profile",
              desc: "Identify target volume buyers and procurement cycles.",
            },
            {
              title: "Cold-to-Warm Outreach Funnel",
              desc: "Active presentation of client trade capacities.",
            },
            {
              title: "RFC (Request for Collaboration) Curation",
              desc: "Compile precise raw material demand specifications.",
            },
            {
              title: "Direct Handshake & Contract Facilitation",
              desc: "Host secure initial calls and supply contract draftings.",
            },
          ],
          stats: [
            { label: "Avg Qualified Leads/Mo", value: "45+" },
            { label: "Contract Conversion Rate", value: "18.4%" },
            { label: "Client Satisfaction Index", value: "98.8%" },
          ],
        };
      case "trading":
        return {
          audience: "Global Steel Mills, Construction Giants, Energy Cooperatives",
          methodology:
            "Validated sourcing hubs, maritime logistics, and letter of credit clearing",
          sla: "Pricing contracts locked for 7 business days max",
          phases: [
            {
              title: "Vendor Audit & Material QA",
              desc: "Strict inspection of ore grades, mill reports, and certificates.",
            },
            {
              title: "Incoterms Locking & Hedging",
              desc: "Optimize CIF/FOB freight pricing against trade fluctuations.",
            },
            {
              title: "Maritime Logistics & Shipping",
              desc: "Vessel scheduling, container bookings, and port clearance.",
            },
            {
              title: "Customs Clearance & Delivery",
              desc: "Absolute document compliance for seamless border crossing.",
            },
          ],
          stats: [
            { label: "Established Sourcing Hubs", value: "50+" },
            { label: "Annual Tonnage Handled", value: "1.2M+" },
            { label: "Compliance Pass Rate", value: "100%" },
          ],
        };
      case "consulting":
        return {
          audience: "Commodity Investors, Enterprise Planners, Corporate Boards",
          methodology:
            "Deep-dive feasibility studies, custom financial audits, and global ESG alignment maps",
          sla: "Interim feasibility assessment drafted within 14 calendar days",
          phases: [
            {
              title: "Scope Alignment & Briefing",
              desc: "Establish commercial target bounds, budgets, and compliance goals.",
            },
            {
              title: "Macro Commodity Research",
              desc: "Analyze historical price actions, supply gaps, and policy risks.",
            },
            {
              title: "Financial Risk Feasibility Analysis",
              desc: "Formulate precise IRR, NPV, and capital amortization curves.",
            },
            {
              title: "Deliverable Submission & Board Review",
              desc: "Present actionable strategic roadmap with complete audits.",
            },
          ],
          stats: [
            { label: "Strategic Audits Handled", value: "75+" },
            { label: "Capital Optimized", value: "$45M+" },
            { label: "Policy Sanction Zero-Error", value: "100%" },
          ],
        };
      default:
        return {
          audience: "General Corporate Buyers",
          methodology: "Tailored client-centric corporate sourcing methodologies",
          sla: "Initial response inside 24 working hours",
          phases: [
            { title: "Requirement Gathering", desc: "Draft specifications." },
            { title: "Solution Blueprinting", desc: "Identify optimal paths." },
          ],
          stats: [{ label: "Response Rate", value: "100%" }],
        };
    }
  };

  const ext = getExtendedData(service.id);

  const handleEnquire = () => {
    router.push(`/contact?subject=${service.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 text-left">
      <div className="mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0A0A0A] hover:text-[#056D34] bg-white border border-[#0A0A0A]/10 px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft size={14} />
          BACK TO ALL SERVICES
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-10 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold tracking-[0.3em] text-white uppercase font-mono bg-[#056D34] px-3 py-1 rounded-full">
                {service.id.toUpperCase()}
              </span>
              <span className="h-px grow bg-[#0A0A0A]/10" />
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] tracking-tight leading-tight mb-4">
              {service.title}
            </h1>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {service.description}
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-[#0a0a0a]/10 pt-6">
              {ext.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 rounded-xl border border-[#0a0a0a]/5 text-center"
                >
                  <p className="font-display font-black text-2xl text-[#0A0A0A]">
                    {st.value}
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono mt-1 leading-tight">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-10 rounded-3xl shadow-sm text-left">
            <h3 className="font-display font-extrabold text-xl text-[#0A0A0A] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#056D34] rounded-full" />
              Sourcing & Implementation Lifecycle
            </h3>
            <p className="text-xs text-gray-500 mb-8 font-normal">
              Our systematic approach guarantees zero delays, compliance locking, and
              complete quality checks.
            </p>

            <div className="relative border-l border-[#0A0A0A]/10 ml-4 space-y-8">
              {ext.phases.map((phase, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-4 top-0.5 w-8 h-8 rounded-full bg-[#056D34] text-white font-display font-extrabold text-xs flex items-center justify-center border-4 border-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-[#0A0A0A]">
                      {phase.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 font-normal leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-[#0A0A0A]/10 p-8 rounded-3xl shadow-sm text-left">
            <h3 className="font-display font-extrabold text-lg text-[#0A0A0A] mb-5 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Briefcase size={18} className="text-[#0A0A0A]" />
              Sourcing Specifications
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">
                  Target Audience
                </span>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                  {ext.audience}
                </p>
              </div>

              <div className="h-px bg-gray-100" />

              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">
                  Core Methodology
                </span>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                  {ext.methodology}
                </p>
              </div>

              <div className="h-px bg-gray-100" />

              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">
                  Quality Assurance Protocol (SLA)
                </span>
                <p className="text-xs sm:text-sm font-semibold text-emerald-600 font-mono mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {ext.sla}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#0A0A0A]/10 p-8 rounded-3xl shadow-sm text-left">
            <h3 className="font-display font-bold text-xs tracking-wider text-[#0A0A0A]/80 uppercase mb-5 flex items-center gap-1.5">
              <span className="w-1 h-3 bg-[#0A0A0A] rounded-full" />
              Service Features & Compliance
            </h3>

            <div className="flex flex-col gap-3">
              {service.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 items-center bg-gray-50 border border-[#0A0A0A]/5 px-4 py-3 rounded-xl"
                >
                  <CheckCircle size={15} className="text-[#056D34] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A0A] text-white p-8 rounded-3xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#056D34]/15 rounded-bl-full pointer-events-none" />
            <h4 className="font-display font-extrabold text-lg text-emerald-400 mb-2">
              Ready to Initiate?
            </h4>
            <p className="text-xs text-gray-300 mb-6 leading-relaxed">
              Enquire today and connect with our specialized global sourcing panel for
              a custom RFC.
            </p>
            <button
              onClick={handleEnquire}
              className="w-full bg-[#056D34] text-white font-display font-bold text-xs tracking-wider py-4 rounded-xl hover:bg-[#0A0A0A] hover:text-white hover:border-white/20 transition-all cursor-pointer border border-transparent shadow"
            >
              ENQUIRE SERVICE CATEGORY ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
