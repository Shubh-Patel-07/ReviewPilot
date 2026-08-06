'use client';

import React from 'react';
import { DollarSign, Download, CreditCard } from 'lucide-react';

export default function AdminPaymentsPage() {
  const payments = [
    { id: 'tx_101', business: 'Aroma Roastery Cafe', amount: '$49.00', provider: 'Stripe', status: 'Completed', date: '2026-08-01' },
    { id: 'tx_102', business: 'Apex Fitness Gym', amount: '$19.00', provider: 'Razorpay', status: 'Completed', date: '2026-08-02' },
    { id: 'tx_103', business: 'Grand Hotel & Spa', amount: '$149.00', provider: 'Stripe', status: 'Completed', date: '2026-08-03' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <DollarSign className="w-4 h-4" /> Platform Transactions & Revenue
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Payments & Invoices
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            View all Stripe and Razorpay transaction records across platform subscriptions.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-2">
          <Download className="w-3.5 h-3.5 text-blue-400" /> Export CSV
        </button>
      </div>

      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Tx ID</th>
                <th className="px-4 py-3">Business</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Payment Provider</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {payments.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-mono font-bold text-slate-400">{p.id}</td>
                  <td className="px-4 py-3 font-semibold text-white">{p.business}</td>
                  <td className="px-4 py-3 font-bold text-emerald-400">{p.amount}</td>
                  <td className="px-4 py-3 text-indigo-400 font-semibold">{p.provider}</td>
                  <td className="px-4 py-3">{p.date}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {p.status}
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
