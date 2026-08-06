'use client';

import React from 'react';
import { BarChart3, Download, Calendar } from 'lucide-react';

export default function AdminReportsPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" /> Platform Analytics & Export
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            System Reports & Export
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Generate and download monthly growth, QR scan, and revenue PDF/CSV reports.
          </p>
        </div>

        <button onClick={() => alert('PDF Report generation coming soon!')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer">
          <Download className="w-4 h-4" /> Generate Full Platform PDF Report
        </button>
      </div>

      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">Monthly Growth Trends</h3>
        <p className="text-xs text-slate-400">System growth metrics compiled across all active business accounts.</p>
        <div className="h-48 bg-slate-950/60 rounded-2xl border border-slate-800/80 p-4 flex flex-col justify-between">
          <div className="flex items-end justify-between gap-4 h-36 pt-2">
            {[
              { month: 'May', rev: '$12,000' },
              { month: 'Jun', rev: '$15,200' },
              { month: 'Jul', rev: '$18,450' },
            ].map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div style={{ height: `${(i + 1) * 30}%` }} className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg" />
                <span className="text-xs text-slate-400 font-bold">{m.month} ({m.rev})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
