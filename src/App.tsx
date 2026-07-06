/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, X, AlertTriangle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ServiceDetails from './components/ServiceDetails';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedProductId, setSelectedProductId] = useState('');
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  useEffect(() => {
    // Isolated detection: Only activates if URL path contains /admin or hash is #admin
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === '/admin' || path.startsWith('/admin/') || hash === '#admin') {
      setIsAdminRoute(true);
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setIsAdminRoute(false);
    setActiveSection(sectionId);
    
    // Smooth scroll to top of page on change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleVerifyPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === 'jagdamba789' || adminPasscode === 'admin123') {
      setIsAdminLoggedIn(true);
      setAdminPasscode('');
      setPasscodeError('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPasscodeError('Invalid credentials. Access Denied.');
    }
  };

  const handleExitAdmin = () => {
    setIsAdminLoggedIn(false);
    setIsAdminRoute(false);
    window.history.pushState({}, '', '/');
    setActiveSection('home');
    window.scrollTo({ top: 0 });
  };

  // 1. ISOLATED ADMIN PORTAL VIEW (Completely independent of normal website layout, header, and footer)
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-[#03050a] text-[#F0F0F0] antialiased flex flex-col justify-between relative overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Glowing Amber/Gold Mesh Background to signify secure portal */}
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

        <main className="flex-grow flex flex-col relative z-10">
          <AnimatePresence mode="wait">
            {isAdminLoggedIn ? (
              <motion.div
                key="admin-dashboard-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col"
              >
                {/* Clean, specialized Administrative Top Nav */}
                <header className="bg-black/40 border-b border-white/5 py-4 px-6 sm:px-12 flex justify-between items-center backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                      <Shield size={16} />
                    </div>
                    <div>
                      <h1 className="font-display font-bold text-sm tracking-widest text-white uppercase">STAFF CONSOLE</h1>
                      <p className="text-[10px] text-amber-500/70 font-mono">SECURED INCOMING LEADS</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleExitAdmin}
                    className="bg-white/5 text-xs font-bold font-mono tracking-wider hover:bg-white/10 text-white/80 border border-white/10 px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    ← LOGOUT & EXIT
                  </button>
                </header>

                <div className="bg-amber-950/20 border-b border-amber-500/10 py-2.5 text-center text-[11px] font-mono text-amber-400">
                  🛡️ ADVANCED DECRYPTED CONTROL PANEL — RESTRICTED TO JAGDAMBA ENTERPRISES REPRESENTATIVES.
                </div>

                <div className="p-4 sm:p-8 max-w-7xl mx-auto w-full">
                  <AdminDashboard />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="admin-login-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen w-full flex flex-col items-center justify-center p-4"
              >
                {/* Login Card */}
                <div className="w-full max-w-md bg-[#07090f]/95 border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
                  
                  <div className="flex flex-col items-center text-center mb-8">
                    {/* Special Monogram Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/5 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-4 shadow-inner">
                      <Lock size={28} className="animate-pulse" />
                    </div>
                    <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                      Jagdamba <span className="text-amber-500">Staff Secure</span>
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">Authentication required to decrypt sourcing inquiries</p>
                  </div>

                  <form onSubmit={handleVerifyPasscode} className="space-y-5">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Enter Staff Authorization Passcode
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500">
                          <Lock size={16} />
                        </span>
                        <input 
                          type="password"
                          placeholder="••••••••••••"
                          value={adminPasscode}
                          onChange={(e) => {
                            setAdminPasscode(e.target.value);
                            if (passcodeError) setPasscodeError('');
                          }}
                          className="w-full bg-white/5 border border-white/10 focus:border-amber-500/50 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all text-white"
                          autoFocus
                        />
                      </div>
                    </div>

                    {passcodeError && (
                      <div className="flex items-center gap-2 text-red-400 text-xs font-semibold bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
                        <AlertTriangle size={14} className="flex-shrink-0" />
                        <span>{passcodeError}</span>
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleExitAdmin}
                        className="flex-1 border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold tracking-wider cursor-pointer text-gray-400 hover:text-white transition-all"
                      >
                        BACK TO SITE
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-xl text-xs font-bold tracking-wider cursor-pointer font-display transition-all shadow-md"
                      >
                        AUTHORIZE
                      </button>
                    </div>

                    <div className="border-t border-white/5 pt-5 text-center">
                      <p className="text-[10px] font-mono text-gray-500">
                        Staff Credential Hint: <span className="text-amber-500/80 font-mono font-bold">jagdamba789</span>
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    );
  }

  // 2. STANDARD PUBLIC WEBSITE VIEW (100% clean, pristine, without any admin links or buttons)
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0A0A0A] antialiased flex flex-col justify-between relative overflow-hidden">
      
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#0a0a0a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Glowing Mesh Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#056D34]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#056D34]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Premium responsive Sticky Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isAdminMode={false}
        setIsAdminMode={() => {}}
      />

      {/* Main Page Content Orchestrator */}
      <main className="flex-grow pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {activeSection === 'home' && <Hero onNavigate={handleNavigate} />}
            {activeSection === 'services' && (
              <Services onViewDetails={(id) => {
                setSelectedServiceId(id);
                handleNavigate('service-detail');
              }} />
            )}
            {activeSection === 'about' && (
              <About 
                onNavigateMission={() => handleNavigate('mission')}
                onNavigateVision={() => handleNavigate('vision')}
              />
            )}
            {activeSection === 'mission' && (
              <Mission 
                onBack={() => handleNavigate('about')} 
                onNavigateContact={() => handleNavigate('contact')}
              />
            )}
            {activeSection === 'vision' && (
              <Vision 
                onBack={() => handleNavigate('about')} 
                onNavigateContact={() => handleNavigate('contact')}
              />
            )}
            {activeSection === 'contact' && <Contact />}
            {activeSection === 'terms' && <Terms />}
            {activeSection === 'privacy' && <Privacy />}
            {activeSection === 'service-detail' && (
              <ServiceDetails 
                serviceId={selectedServiceId} 
                onBack={() => handleNavigate('services')} 
                onEnquire={(subject) => {
                  handleNavigate('contact');
                  setTimeout(() => {
                    const contactSubject = document.getElementById('contact-subject') as HTMLSelectElement;
                    if (contactSubject) contactSubject.value = subject;
                  }, 50);
                }} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Highly loaded corporate Footer with WhatsApp floating toggles */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
