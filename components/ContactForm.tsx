"use client";

import { useActionState, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitForm, FormState } from "@/actions/submitForm";

const initialState: FormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitForm, initialState);
  const [toast, setToast] = useState<FormState | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const searchParams = useSearchParams();
  const presetSubject = searchParams.get("subject") || "general";

  useEffect(() => {
    if (state.message) {
      setToast(state);
      setErrors(state.errors || {});
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-4 sm:right-8 z-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#0A0A0A]/10 max-w-sm ${
              toast.success
                ? "bg-white text-[#0A0A0A]"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
            id="toast-notification-panel"
          >
            {toast.success ? (
              <CheckCircle2 className="text-[#056D34]" size={20} />
            ) : (
              <AlertCircle className="text-rose-600 shrink-0" size={20} />
            )}
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider">
                {toast.success ? "Success" : "Error"}
              </p>
              <p className="text-xs mt-0.5 leading-relaxed font-semibold">
                {toast.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-10 rounded-3xl shadow-sm text-left relative">
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A0A0A] mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#056D34] rounded-full" />
          Submit Sourcing RFQ / Enquiry
        </h3>
        <p className="text-xs text-gray-500 mb-6 font-normal">
          Fields marked with <span className="text-rose-500">*</span> are mandatory for
          validation.
        </p>

        <form action={formAction} className="flex flex-col gap-5" id="enquiry-contact-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
              >
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="e.g. Anand Sharma"
                className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                  errors.name ? "border-rose-400 focus:border-rose-500" : "border-[#0A0A0A]/15"
                }`}
              />
              {errors.name && (
                <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
              >
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="e.g. anand@company.com"
                className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                  errors.email ? "border-rose-400 focus:border-rose-500" : "border-[#0A0A0A]/15"
                }`}
              />
              {errors.email && (
                <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-company"
                className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
              >
                Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                placeholder="e.g. Apex Minerals Ltd"
                className="w-full px-4 py-3 bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-phone"
                className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
              >
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="contact-phone"
                name="phone"
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-subject"
              className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
            >
              Enquiry Subject / Category <span className="text-rose-500">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              defaultValue={presetSubject}
              className="w-full px-4 py-3 bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-bold transition-all"
            >
              <option value="general">General Business Proposal</option>
              <option value="lead-generation">Lead Generation Matchmaking</option>
              <option value="trading">Trading Sourcing project</option>
              <option value="supply-chain">Supply Chain Logistics Solutions</option>
              <option value="industrial-solutions">Industrial Sourcing & Automation</option>
              <option value="consulting">Consulting advisory</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-bold tracking-wide font-mono uppercase text-gray-500"
            >
              Detailed Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Describe your specific specifications, target timeline, or procurement volume..."
              className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                errors.message ? "border-rose-400 focus:border-rose-500" : "border-[#0A0A0A]/15"
              }`}
            />
            {errors.message && (
              <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#056D34] text-white hover:bg-[#0A0A0A] hover:text-white border border-[#0A0A0A]/10 py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            id="contact-form-submit-button"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                PROCESSING REQUEST...
              </>
            ) : (
              <>
                <Send size={16} />
                SUBMIT ENQUIRY
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
