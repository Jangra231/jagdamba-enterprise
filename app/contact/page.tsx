import { Suspense } from "react";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#056D34]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#0a0a0a]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#056D34]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#0A0A0A]/70 uppercase font-mono">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
            LET&apos;S{" "}
            <span className="text-white bg-[#056D34] px-2 rounded-lg">CONNECT.</span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0A0A0A] to-brand-muted">
              SEND US A MESSAGE.
            </span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Have an enquiry, sourcing project, or consulting requirement? Fill out the
            contact form below and our partnerships desk will get back to you within 24
            working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <ContactInfo />
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-10 rounded-3xl shadow-sm text-center">
                  <p className="text-sm text-gray-500">Loading form...</p>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
