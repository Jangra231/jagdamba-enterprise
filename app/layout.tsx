import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jagdamba Enterprises | Premier B2B Industrial Sourcing & Procurement",
  description:
    "Jagdamba Enterprises is a leading global B2B trading, procurement, and industrial sourcing house. Providing robust cross-border supply chain and raw materials sourcing solutions since 1994.",
  keywords: [
    "Jagdamba Enterprises",
    "industrial sourcing",
    "global procurement",
    "B2B trading",
    "raw materials supply",
    "cross-border trade",
    "bulk sourcing solutions",
  ],
  authors: [{ name: "Jagdamba Enterprises" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Jagdamba Enterprises | Premier B2B Industrial Sourcing",
    description:
      "Handcrafting seamless global supply chains, bulk procurement, and cross-border sourcing. Trusted since 1994.",
    siteName: "Jagdamba Enterprises",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#FCFCFC] text-[#0A0A0A] antialiased flex flex-col justify-between relative overflow-hidden">
          <div
            className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
            style={{
              backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="fixed top-[-10%] left-[-10%] w-150 h-150 bg-[#056D34]/15 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="fixed bottom-[-10%] right-[-10%] w-125 h-125 bg-[#056D34]/10 blur-[120px] rounded-full pointer-events-none z-0" />

          <Navbar />

          <main className="grow pt-28">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
