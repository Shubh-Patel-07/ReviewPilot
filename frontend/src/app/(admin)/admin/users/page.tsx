'use client';

import React from 'react';
import { Users, Search, Plus, ShieldCheck, Mail, Lock } from 'lucide-react';

export default function AdminUsersPage() {
  const users = [
    { id: '1', name: 'John Doe', email: 'john@aroma.com', role: 'Business Owner', business: 'Aroma Roastery Cafe', status: 'Active', created: '2026-07-15' },
    { id: '2', name: 'Sarah Jenkins', email: 'sarah@apex.com', role: 'Business Owner', business: 'Apex Fitness Gym', status: 'Active', created: '2026-07-20' },
    { id: '3', name: 'Shubh Patel', email: 'admin@reviewai.com', role: 'Super Admin', business: 'ReviewAI Platform', status: 'Active', created: '2026-06-01' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" /> Platform User Directory
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            User Accounts & Roles
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Manage user roles, Super Admin access, and authentication statuses.
          </p>
        </div>

        <button onClick={() => alert('User creation form coming soon!')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer">
          <Plus className="w-4 h-4" /> Create User
        </button>
      </div>

      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email Address</th>
                <th className="px-4 py-3">System Role</th>
                <th className="px-4 py-3">Associated Business</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">{u.name}</td>
                  <td className="px-4 py-3 text-slate-400">{u.email}</td>
                  <td className="px-4 py-3 font-bold text-indigo-400">{u.role}</td>
                  <td className="px-4 py-3">{u.business}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {u.status}
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
