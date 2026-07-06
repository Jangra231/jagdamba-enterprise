/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Trash2, 
  Download, 
  RefreshCw, 
  Inbox, 
  Mail, 
  Building, 
  Phone, 
  CheckSquare, 
  Square 
} from 'lucide-react';
import { Enquiry } from '../types';

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [subjectFilter, setSubjectFilter] = useState<string>('All');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchEnquiries = async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      // Fetch with query params
      const url = new URL('/api/enquiries', window.location.origin);
      if (searchTerm) url.searchParams.append('search', searchTerm);
      if (statusFilter !== 'All') url.searchParams.append('status', statusFilter.toLowerCase());
      if (subjectFilter !== 'All') url.searchParams.append('subject', subjectFilter);

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error('Failed to retrieve inquiries.');
      const data = await response.json();
      setEnquiries(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Error syncing database enquiries.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [searchTerm, statusFilter, subjectFilter]);

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    try {
      const nextStatus = currentStatus === 'new' ? 'contacted' : 'new';
      const response = await fetch(`/api/enquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });

      if (response.ok) {
        // Optimistically update local state
        setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: nextStatus as any } : e));
      } else {
        alert('Could not update status.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm('Are you absolutely sure you want to delete this enquiry? This action is irreversible.')) return;

    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setEnquiries(prev => prev.filter(e => e.id !== id));
      } else {
        alert('Could not delete enquiry.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Safe client-side JSON-to-CSV generator
  const handleExportCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiries available to export.');
      return;
    }

    const headers = ['Enquiry ID', 'Client Name', 'Email Address', 'Company', 'Phone', 'Subject Group', 'Detailed Message', 'Status', 'Received At'];
    const rows = enquiries.map(e => [
      e.id,
      e.name,
      e.email,
      e.company || '',
      e.phone || '',
      e.subject,
      `"${e.message.replace(/"/g, '""')}"`, // escape quotes safely
      e.status,
      e.createdAt
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `jagdamba_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case 'general': return 'General Business Proposal';
      case 'lead-generation': return 'Lead Gen Matchmaking';
      case 'trading': return 'Trading Sourcing project';
      case 'supply-chain': return 'Supply Chain Solutions';
      case 'industrial-solutions': return 'Industrial Sourcing & Automation';
      case 'consulting': return 'Consulting advisory';
      default: return subject;
    }
  };

  return (
    <section id="admin-dashboard" className="py-24 bg-[#FCFCFC] relative min-h-screen">
      
      {/* Wave overlays */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#056D34]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0a0a0a]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6 text-left border-b border-[#0A0A0A]/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#0A0A0A]" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#0A0A0A]/70 uppercase font-mono">
                ADMIN CONSOLE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-[#0A0A0A] tracking-tight">
              Sourcing Enquiries Desk
            </h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Verify leads, manage client communications, filter by industry groups, and export reports for Excel. Data persists on the Express container.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleExportCSV}
              className="bg-[#056D34] text-white border border-[#0A0A0A]/10 font-display font-bold text-xs tracking-wider px-5 py-3 rounded-xl hover:bg-[#0A0A0A] hover:text-white transition-all shadow-sm flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              id="admin-export-csv-button"
            >
              <Download size={14} />
              EXPORT TO CSV
            </button>
            <button
              onClick={fetchEnquiries}
              className="p-3 bg-white border border-[#0A0A0A]/10 rounded-xl hover:bg-gray-100 text-[#0A0A0A] transition-all cursor-pointer"
              title="Refresh leads"
              id="admin-refresh-leads"
            >
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Dashboard Grid & Filtering Section */}
        <div className="bg-white border border-[#0A0A0A]/10 p-5 rounded-3xl shadow-sm mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-left">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search name, email, query..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#0A0A0A]/15 rounded-xl focus:outline-none focus:border-[#0A0A0A] text-gray-800 font-medium"
              />
              <Search size={14} className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Filter 1: Status */}
            <div className="flex items-center gap-1.5 bg-white border border-[#0A0A0A]/10 px-3 py-1 rounded-xl">
              <span className="text-[10px] font-bold text-gray-500 font-mono">STATUS:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent border-none text-xs font-bold focus:outline-none text-[#0A0A0A] py-1 cursor-pointer"
              >
                <option value="All">All Leads</option>
                <option value="New">Unread/New</option>
                <option value="Contacted">Marked Contacted</option>
              </select>
            </div>

            {/* Filter 2: Subject */}
            <div className="flex items-center gap-1.5 bg-white border border-[#0A0A0A]/10 px-3 py-1 rounded-xl">
              <span className="text-[10px] font-bold text-gray-500 font-mono">SUBJECT:</span>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="bg-transparent border-none text-xs font-bold focus:outline-none text-[#0A0A0A] py-1 cursor-pointer"
              >
                <option value="All">All Subjects</option>
                <option value="general">General Proposal</option>
                <option value="lead-generation">Lead Gen Matchmaking</option>
                <option value="trading">Trading Sourcing project</option>
                <option value="supply-chain">Supply Chain Solutions</option>
                <option value="industrial-solutions">Industrial Solutions</option>
                <option value="consulting">Consulting advisory</option>
              </select>
            </div>
          </div>

          {/* Quick Counter Banner */}
          <div className="text-right">
            <span className="text-xs font-bold text-gray-500">
              Total Found: <span className="text-[#0A0A0A] font-black text-sm">{enquiries.length}</span> entries
            </span>
          </div>

        </div>

        {/* Inquiries List View */}
        <div className="flex flex-col gap-5 text-left">
          <AnimatePresence mode="popLayout">
            {enquiries.map((enq) => (
              <motion.div
                layout
                key={enq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  enq.status === 'new' 
                    ? 'bg-amber-50/70 border-amber-200 shadow-sm' 
                    : 'bg-white border border-[#0A0A0A]/10 shadow-sm'
                }`}
                id={`admin-lead-card-${enq.id}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  
                  {/* Subject Badge & Lead Title */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase font-mono ${
                        enq.status === 'new'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}>
                        {enq.status === 'new' ? '★ UNREAD / NEW' : '✔ CONTACTED'}
                      </span>
                      <span className="text-[9px] font-bold tracking-widest bg-[#0A0A0A]/10 text-[#0A0A0A] px-2.5 py-1 rounded-full uppercase font-mono">
                        {getSubjectLabel(enq.subject)}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-[#0A0A0A]">
                      {enq.name}
                    </h3>
                  </div>

                  {/* Actions bar */}
                  <div className="flex items-center gap-2 self-end sm:self-start">
                    <button
                      onClick={() => handleToggleStatus(enq.id, enq.status)}
                      className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 cursor-pointer transition-all ${
                        enq.status === 'new'
                          ? 'bg-amber-500/10 border-amber-300 text-amber-800 hover:bg-amber-500/20'
                          : 'bg-emerald-500/10 border-emerald-300 text-emerald-800 hover:bg-emerald-500/20'
                      }`}
                      title={enq.status === 'new' ? 'Mark Contacted' : 'Mark Unread'}
                    >
                      {enq.status === 'new' ? <Square size={14} /> : <CheckSquare size={14} />}
                      <span className="text-[10px]">{enq.status === 'new' ? 'MARK CONTACTED' : 'COMPLETED'}</span>
                    </button>

                    <button
                      onClick={() => handleDeleteEnquiry(enq.id)}
                      className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-all cursor-pointer"
                      title="Delete enquiry"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                </div>

                {/* Sub-info Row: Sourcing Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 bg-gray-50 border border-[#0A0A0A]/10 p-4 rounded-xl text-xs font-semibold text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-[#0A0A0A]" />
                    <span>{enq.email}</span>
                  </div>
                  {enq.company && (
                    <div className="flex items-center gap-2">
                      <Building size={13} className="text-[#0A0A0A]" />
                      <span>{enq.company}</span>
                    </div>
                  )}
                  {enq.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-[#0A0A0A]" />
                      <span>{enq.phone}</span>
                    </div>
                  )}
                </div>

                {/* Body Message */}
                <div className="text-left bg-white border border-[#0A0A0A]/5 p-4 rounded-xl">
                  <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mb-1">Detailed Inquiry message:</p>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal whitespace-pre-wrap">
                    {enq.message}
                  </p>
                </div>

                {/* Timestamp */}
                <div className="text-right mt-3">
                  <span className="text-[10px] text-gray-400 font-mono font-bold">
                    RECEIVED: {new Date(enq.createdAt).toLocaleString()}
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {enquiries.length === 0 && !isLoading && (
            <div className="bg-white border border-[#0A0A0A]/10 p-12 rounded-3xl text-center shadow-sm">
              <Inbox className="mx-auto text-gray-400 mb-4" size={44} />
              <p className="font-display font-semibold text-lg text-[#0A0A0A]">No inquiries found</p>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto font-sans">
                No submissions match your filters. Submit test forms from the Contact section to see them populate here!
              </p>
            </div>
          )}

          {isLoading && (
            <div className="py-12 text-center flex flex-col items-center gap-3">
              <RefreshCw className="animate-spin text-[#0A0A0A]" size={32} />
              <p className="text-xs font-semibold text-[#0A0A0A]">Syncing container records...</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
