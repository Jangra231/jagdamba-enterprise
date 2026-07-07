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
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ServiceDetails from './components/ServiceDetails';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  

  function handleNavigate(sectionId: string): void {
    setActiveSection(sectionId);
  }

  // 2. STANDARD PUBLIC WEBSITE VIEW (100% clean, pristine, without any admin links or buttons)
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0A0A0A] antialiased flex flex-col justify-between relative overflow-hidden">
      
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#0a0a0a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Glowing Mesh Background */}
      <div className="fixed top-[-10%] left-[-10%] w-150 h-150 bg-[#056D34]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-125 h-125 bg-[#056D34]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Premium responsive Sticky Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isAdminMode={false}
        setIsAdminMode={() => {}}
      />

      {/* Main Page Content Orchestrator */}
      <main className="grow pt-28">
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
