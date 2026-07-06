/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface Toast {
  type: 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please type a message';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setToast(null);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setToast({
          type: 'success',
          message: 'Thank you! Your enquiry has been received successfully.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: 'general',
          message: ''
        });
      } else {
        setToast({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setToast({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
      // Auto dismiss toast after 5 seconds
      setTimeout(() => {
        setToast(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      
      {/* Background overlays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#056D34]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#0a0a0a]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Floating alert notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-4 sm:right-8 z-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#0A0A0A]/10 max-w-sm ${
              toast.type === 'success' 
                ? 'bg-white text-[#0A0A0A]' 
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
            id="toast-notification-panel"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="text-[#056D34]" size={20} />
            ) : (
              <AlertCircle className="text-rose-600 shrink-0" size={20} />
            )}
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider">{toast.type === 'success' ? 'Success' : 'Error'}</p>
              <p className="text-xs mt-0.5 leading-relaxed font-semibold">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#056D34]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#0A0A0A]/70 uppercase font-mono">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] tracking-tight leading-tight">
            LET'S <span className="text-white bg-[#056D34] px-2 rounded-lg">CONNECT.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] to-[#7E7E7D]">
              SEND US A MESSAGE.
            </span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Have an enquiry, sourcing project, or consulting requirement? Fill out the contact form below and our partnerships desk will get back to you within 24 working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Direct Contact Details Cards */}
            <div className="flex flex-col gap-5">
              
              {/* Phone Node */}
              <div className="bg-white border border-[#0A0A0A]/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-sm">
                <div className="p-3 rounded-xl bg-[#0A0A0A] text-[#056D34] border border-[#0A0A0A]/10">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">Phone Sourcing</span>
                  <p className="text-sm font-bold text-[#0A0A0A] mt-1">+91 70856 95801</p>
                  <p className="text-xs text-gray-500 font-medium">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* Email Node */}
              <div className="bg-white border border-[#0A0A0A]/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-sm">
                <div className="p-3 rounded-xl bg-[#0A0A0A] text-[#056D34] border border-[#0A0A0A]/10">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">Corporate Mail</span>
                  <p className="text-sm font-bold text-[#0A0A0A] mt-1">connect@jagdambaenterprises.com</p>
                  <p className="text-xs text-gray-500 font-medium font-sans">Send RFCs or proposal bids</p>
                </div>
              </div>

              {/* Offices Node */}
              <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl flex gap-4 items-start text-left shadow-lg transition-all duration-300 hover:border-[#056D34]/30">
                <div className="p-3 rounded-xl bg-[#056D34] text-white border border-white/10 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-mono font-bold text-emerald-400 uppercase">Central Office Locations</span>
                  <p className="text-sm font-bold text-white mt-1">Dadar (West), Mumbai</p>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1.5 font-medium">
                    503, Heritage Horizon, Bhavani Shankar Road, Dadar (West), Mumbai. <br />
                    <span className="text-gray-500 font-semibold font-mono text-[10px] tracking-wider">SECONDARY BRANCH:</span> Janakpuri, New Delhi.
                  </p>
                </div>
              </div>

            </div>

            {/* Regional footprints layout */}
            <div className="relative border border-white/10 rounded-3xl overflow-hidden bg-[#0A0A0A] p-4 flex flex-col items-center shadow-xl">
              <span className="text-[9px] font-mono tracking-widest text-[#056D34] block mb-3 uppercase font-bold">SATELLITE PROCUREMENT MAP</span>
              
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center map-canvas bg-neutral-950 group">
                {/* Real Satellite Map of Mumbai HQ Area - cropped using absolute offset to hide the default white Google search panel & India text */}
                <iframe
                  title="Jagdamba Enterprises Dadar Satellite Map"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=19.0150,72.8300&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute -top-[160px] -left-[10px] w-[calc(100%+20px)] h-[calc(100%+240px)] object-cover brightness-95 contrast-105 pointer-events-auto"
                ></iframe>

                {/* Left Corner Floating Location Info (Top Left) */}
                <div className="absolute top-3 left-3 z-10 max-w-[200px] sm:max-w-[240px] bg-black/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg text-left transition-all duration-300 group-hover:bg-black pointer-events-none">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-mono tracking-widest text-emerald-400 font-bold uppercase">MUMBAI HQ</span>
                  </div>
                  <h4 className="text-white font-display font-extrabold text-[11px] sm:text-xs">Jagdamba Enterprises</h4>
                  <p className="text-[9px] sm:text-[10px] text-gray-300 leading-normal mt-1">
                    503, Heritage Horizon, Bhavani Shankar Road, Dadar (West), Mumbai - 400028
                  </p>
                </div>

                {/* Left Corner Floating Location Info (Bottom Left) */}
                <div className="absolute bottom-3 left-3 z-10 max-w-[200px] bg-black/90 backdrop-blur-md border border-white/10 p-2.5 rounded-lg shadow-md text-left pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="text-[8px] font-mono tracking-wider text-sky-400 font-bold uppercase">DELHI BRANCH</span>
                  </div>
                  <p className="text-[8px] sm:text-[9px] text-gray-300 leading-tight mt-0.5">
                    Janakpuri District Centre, New Delhi
                  </p>
                </div>

                {/* Satellite overlay zoom indicator */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-md shadow-sm pointer-events-none">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span className="text-[7px] font-mono tracking-wider text-white uppercase font-semibold">SATELLITE ACTIVE</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Us Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#0A0A0A]/10 p-8 sm:p-10 rounded-3xl shadow-sm text-left relative">
              
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A0A0A] mb-2 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#056D34] rounded-full" />
                Submit Sourcing RFQ / Enquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-normal">
                Fields marked with <span className="text-rose-500">*</span> are mandatory for validation.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="enquiry-contact-form">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anand Sharma"
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                        errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-[#0A0A0A]/15'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. anand@company.com"
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                        errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-[#0A0A0A]/15'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 2: Company Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                      Company Name <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Minerals Ltd"
                      className="w-full px-4 py-3 bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                    Enquiry Subject / Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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

                {/* Message Box */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-700 tracking-wide font-mono uppercase text-gray-500">
                    Detailed Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your specific specifications, target timeline, or procurement volume..."
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:border-[#0A0A0A] text-sm text-[#0A0A0A] font-medium transition-all ${
                      errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-[#0A0A0A]/15'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-500 font-bold mt-0.5">{errors.message}</p>}
                </div>

                {/* Submit button with loading state */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#056D34] text-white hover:bg-[#0A0A0A] hover:text-white border border-[#0A0A0A]/10 py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  id="contact-form-submit-button"
                >
                  {isLoading ? (
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
          </div>

        </div>

      </div>
    </section>
  );
}
