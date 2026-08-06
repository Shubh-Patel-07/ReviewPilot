'use client';

import React from 'react';
import {
  ShieldCheck,
  Building2,
  Users,
  QrCode,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Ticket,
  Sparkles,
  ArrowUpRight,
  Plus,
} from 'lucide-react';
import Link from 'next/link';

export default function SuperAdminPage() {
  const adminStats = [
    { label: 'Total Businesses', val: '342', inc: '+14%', icon: Building2, color: 'from-blue-600 to-indigo-600' },
    { label: 'Active Users', val: '518', inc: '+18%', icon: Users, color: 'from-emerald-600 to-teal-600' },
    { label: 'Total QR Codes', val: '1,280', inc: '+12%', icon: QrCode, color: 'from-purple-600 to-pink-600' },
    { label: 'AI Review Drafts', val: '45,210', inc: '+34%', icon: MessageSquare, color: 'from-amber-500 to-orange-500' },
    { label: 'Monthly Revenue', val: '$18,450', inc: '+22%', icon: DollarSign, color: 'from-rose-600 to-red-600' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" /> Platform Control Panel
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Super Admin Dashboard
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Platform-wide revenue, business accounts, subscription stats, and AI prompt engineering.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/plans"
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all"
          >
            Manage Subscription Plans
          </Link>
          <Link
            href="/admin/ai-config"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white text-xs font-bold shadow-lg shadow-rose-600/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" /> AI Prompt Config
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {adminStats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="card-stripe rounded-3xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{s.val}</h3>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center mt-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> {s.inc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Businesses Table */}
      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" /> Platform Businesses
          </h2>
          <span className="text-xs text-slate-400">342 Active Businesses</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Business Name</th>
                <th className="px-4 py-3">Owner Email</th>
                <th className="px-4 py-3">Current Plan</th>
                <th className="px-4 py-3">Total QR Scans</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Aroma Roastery Cafe', email: 'john@aroma.com', plan: 'Pro Business', scans: 2840, status: 'Active' },
                { name: 'Apex Fitness Gym', email: 'sarah@apex.com', plan: 'Starter', scans: 1420, status: 'Active' },
                { name: 'Grand Hotel & Spa', email: 'admin@grandhotel.com', plan: 'Agency Enterprise', scans: 8940, status: 'Active' },
                { name: 'Luxe Hair Salon', email: 'contact@luxesalon.com', plan: 'Pro Business', scans: 950, status: 'Active' },
              ].map((b, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">{b.name}</td>
                  <td className="px-4 py-3 text-slate-400">{b.email}</td>
                  <td className="px-4 py-3 font-semibold text-blue-400">{b.plan}</td>
                  <td className="px-4 py-3 font-bold">{b.scans}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {b.status}
                    </span>
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
