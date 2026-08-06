'use client';

import React from 'react';
import { Ticket, Plus, Tag } from 'lucide-react';

export default function AdminCouponsPage() {
  const coupons = [
    { code: 'LAUNCH50', discount: '50% OFF', uses: '142 / 500', valid: 'Active', expiry: '2026-12-31' },
    { code: 'WELCOME20', discount: '20% OFF', uses: '89 / 1000', valid: 'Active', expiry: '2026-09-30' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Ticket className="w-4 h-4" /> Promotional Coupon Management
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Discount Coupons & Promos
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Create promotional discount codes for subscription checkout.
          </p>
        </div>

        <button onClick={() => alert('Coupon creation form coming soon!')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer">
          <Plus className="w-4 h-4" /> Create Coupon
        </button>
      </div>

      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Coupon Code</th>
                <th className="px-4 py-3">Discount</th>
                <th className="px-4 py-3">Usage Count</th>
                <th className="px-4 py-3">Expiry Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {coupons.map((c, i) => (
                <tr key={i} className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-mono font-bold text-blue-400">{c.code}</td>
                  <td className="px-4 py-3 font-bold text-emerald-400">{c.discount}</td>
                  <td className="px-4 py-3">{c.uses}</td>
                  <td className="px-4 py-3">{c.expiry}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {c.valid}
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
