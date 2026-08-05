'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Building2, Users, QrCode, MessageSquare, DollarSign, TrendingUp } from 'lucide-react';

export default function SuperAdminDashboardPage() {
  const metrics = [
    { title: 'Total Businesses', value: '342', change: '+12%', icon: Building2, color: 'from-blue-500 to-indigo-500' },
    { title: 'Active Users', value: '518', change: '+15%', icon: Users, color: 'from-emerald-500 to-teal-500' },
    { title: 'Total QR Codes', value: '1,280', change: '+8%', icon: QrCode, color: 'from-purple-500 to-pink-500' },
    { title: 'Review Drafts', value: '45,210', change: '+32%', icon: MessageSquare, color: 'from-amber-500 to-orange-500' },
    { title: 'Monthly Revenue', value: '$18,450', change: '+21%', icon: DollarSign, color: 'from-rose-500 to-red-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Super Admin Control Panel</h1>
        <p className="text-slate-400 mt-1">Platform-wide statistics, business management, and AI configurations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <Card key={i}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{m.title}</span>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${m.color} text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-bold text-white">{m.value}</h3>
                <span className="text-xs font-semibold text-emerald-400">{m.change} growth</span>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="space-y-4">
        <h2 className="text-xl font-bold text-white">Recent Businesses Registered</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Business Name</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">QR Scans</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Aroma Roastery', owner: 'john@aroma.com', plan: 'Pro', scans: 1420, status: 'Active' },
                { name: 'Apex Fitness Gym', owner: 'sarah@apex.com', plan: 'Starter', scans: 890, status: 'Active' },
                { name: 'Grand Hotel & Spa', owner: 'admin@grandhotel.com', plan: 'Agency', scans: 4320, status: 'Active' },
              ].map((b, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">{b.name}</td>
                  <td className="px-4 py-3">{b.owner}</td>
                  <td className="px-4 py-3 font-medium text-indigo-400">{b.plan}</td>
                  <td className="px-4 py-3">{b.scans}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
