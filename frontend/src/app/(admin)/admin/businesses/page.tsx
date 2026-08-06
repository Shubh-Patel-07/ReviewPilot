'use client';

import React, { useState } from 'react';
import { Building2, Search, Plus, ExternalLink, ShieldCheck, MoreVertical, Ban, CheckCircle2 } from 'lucide-react';

export default function AdminBusinessesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const businesses = [
    { id: '1', name: 'Aroma Roastery Cafe', owner: 'john@aroma.com', category: 'Restaurant / Cafe', plan: 'Pro Business', scans: 2840, status: 'Active', joined: '2026-07-15' },
    { id: '2', name: 'Apex Fitness Gym', owner: 'sarah@apex.com', category: 'Fitness / Gym', plan: 'Starter', scans: 1420, status: 'Active', joined: '2026-07-20' },
    { id: '3', name: 'Grand Hotel & Spa', owner: 'admin@grandhotel.com', category: 'Hotel / Hospitality', plan: 'Agency Enterprise', scans: 8940, status: 'Active', joined: '2026-06-10' },
    { id: '4', name: 'Luxe Hair Salon', owner: 'contact@luxesalon.com', category: 'Salon / Spa', plan: 'Pro Business', scans: 950, status: 'Active', joined: '2026-08-01' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4" /> Platform Business Management
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Registered Businesses
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Manage business profiles, subscription statuses, and view review performance metrics.
          </p>
        </div>

        <button onClick={() => alert('Add Business form coming soon!')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer">
          <Plus className="w-4 h-4" /> Add New Business
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search business by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <span className="text-xs text-slate-400">Total: <strong className="text-white">342</strong> Businesses</span>
      </div>

      {/* Businesses Table */}
      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Business Name</th>
                <th className="px-4 py-3">Owner Email</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Total Scans</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {businesses.map((b) => (
                <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">{b.name}</td>
                  <td className="px-4 py-3 text-slate-400">{b.owner}</td>
                  <td className="px-4 py-3">{b.category}</td>
                  <td className="px-4 py-3 font-bold text-blue-400">{b.plan}</td>
                  <td className="px-4 py-3 font-bold">{b.scans}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a href="/r/demo-business-123" target="_blank" className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button onClick={() => alert('Business suspension requires admin verification.')} className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400">
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
