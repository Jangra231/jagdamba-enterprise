import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between gap-8">
      <div className="flex flex-col gap-5">
        <div className="bg-white border border-[#0A0A0A]/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-sm">
          <div className="p-3 rounded-xl bg-[#056D34] text-[#FCFCFC] border border-[#0A0A0A]/10">
            <Phone size={18} />
          </div>
          <div>
            <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">
              Phone Sourcing
            </span>
            <p className="text-sm font-bold text-[#0A0A0A] mt-1">+91 70856 95801</p>
            <p className="text-xs text-gray-500 font-medium">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        <div className="bg-white border border-[#0A0A0A]/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-sm">
          <div className="p-3 rounded-xl bg-[#056D34] text-[#FCFCFC] border border-[#0A0A0A]/10">
            <Mail size={18} />
          </div>
          <div>
            <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">
              Corporate Mail
            </span>
            <p className="text-sm font-bold text-[#0A0A0A] mt-1">
              info@jagdambaenterprises.com
            </p>
            <p className="text-xs text-gray-500 font-medium font-sans">Send RFCs or proposal bids</p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-lg transition-all duration-300 hover:border-[#056D34]/30">
          <div className="p-3 rounded-xl bg-[#056D34] text-white border border-white/10 shadow-sm">
            <MapPin size={18} />
          </div>
          <div>
            <span className="text-[10px] tracking-widest font-mono font-bold text-emerald-400 uppercase">
              Central Office Locations
            </span>
            <p className="text-sm font-bold text-white mt-1">Hissar, Haryana</p>
            <p className="text-xs text-gray-400 leading-relaxed mt-1.5 font-medium">
              503, Heritage Horizon, Bhavani Shankar Road, Dadar (West), Mumbai. <br />
              <span className="text-gray-500 font-semibold font-mono text-[10px] tracking-wider">
                SECONDARY BRANCH:
              </span>{" "}
              Janakpuri, New Delhi.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border border-white/10 rounded-3xl overflow-hidden bg-[#0A0A0A] p-4 flex flex-col items-center shadow-xl">
        <span className="text-[9px] font-mono tracking-widest text-[#056D34] block mb-3 uppercase font-bold">
          SATELLITE PROCUREMENT MAP
        </span>

        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center map-canvas bg-neutral-950 group">
          <iframe
            title="Jagdamba Enterprises Hissar Satellite Map"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=29.1745,75.7843&t=k&z=16&ie=UTF8&iwloc=&output=embed"
            className="absolute -top-40 -left-2.5 w-[calc(100%+20px)] h-[calc(100%+240px)] object-cover brightness-95 contrast-105 pointer-events-auto"
          ></iframe>

          <div className="absolute top-3 left-3 z-10 max-w-50 sm:max-w-60 bg-black/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg text-left transition-all duration-300 group-hover:bg-black pointer-events-none">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
                Hissar HQ
              </span>
            </div>
            <h4 className="text-white font-display font-extrabold text-[11px] sm:text-xs">
              Jagdamba Enterprises
            </h4>
            <p className="text-[9px] sm:text-[10px] text-gray-300 leading-normal mt-1">
              503, Heritage Horizon, Bhavani Shankar Road, Dadar (West), Mumbai - 400028
            </p>
          </div>

          <div className="absolute bottom-3 left-3 z-10 max-w-50 bg-black/90 backdrop-blur-md border border-white/10 p-2.5 rounded-lg shadow-md text-left pointer-events-none">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[8px] font-mono tracking-wider text-sky-400 font-bold uppercase">
                DELHI BRANCH
              </span>
            </div>
            <p className="text-[8px] sm:text-[9px] text-gray-300 leading-tight mt-0.5">
              Janakpuri District Centre, New Delhi
            </p>
          </div>

          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-md shadow-sm pointer-events-none">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span className="text-[7px] font-mono tracking-wider text-white uppercase font-semibold">
              SATELLITE ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
