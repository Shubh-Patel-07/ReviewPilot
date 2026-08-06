'use client';

import React from 'react';
import { CreditCard, Plus, Check, Edit3, Trash2 } from 'lucide-react';

export default function AdminPlansPage() {
  const plans = [
    { id: 'free', name: 'Free Trial', price: '$0/mo', qrLimit: '1 QR Code', scanLimit: '100 Scans/mo', active: true },
    { id: 'starter', name: 'Starter', price: '$19/mo', qrLimit: '5 QR Codes', scanLimit: '1,000 Scans/mo', active: true },
    { id: 'pro', name: 'Pro Business', price: '$49/mo', qrLimit: '25 QR Codes', scanLimit: '10,000 Scans/mo', active: true },
    { id: 'agency', name: 'Agency Enterprise', price: '$149/mo', qrLimit: 'Unlimited', scanLimit: '100,000 Scans/mo', active: true },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <CreditCard className="w-4 h-4" /> Subscription Plans Configuration
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Subscription Tier Management
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            CRUD subscription plans, pricing limits, and feature permissions.
          </p>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer">
          <Plus className="w-4 h-4" /> Add New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div key={p.id} className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-white">{p.name}</h3>
              <span className="text-xs font-bold text-blue-400">{p.price}</span>
            </div>
            <div className="text-xs text-slate-300 space-y-2 border-t border-slate-800/80 pt-3">
              <p>QR Limit: <strong className="text-white">{p.qrLimit}</strong></p>
              <p>Scan Limit: <strong className="text-white">{p.scanLimit}</strong></p>
            </div>
            <div className="flex gap-2 pt-2">
              <button className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1">
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
