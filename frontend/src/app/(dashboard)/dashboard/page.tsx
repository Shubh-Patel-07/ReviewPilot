'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { QrCode, MessageSquare, Star, TrendingUp, ArrowUpRight, Copy } from 'lucide-react';
import Link from 'next/link';

export default function BusinessDashboardPage() {
  const stats = [
    { title: 'Total QR Scans', value: '1,420', change: '+18.2%', icon: QrCode, color: 'from-blue-500 to-cyan-500' },
    { title: 'AI Review Drafts', value: '892', change: '+24.5%', icon: MessageSquare, color: 'from-indigo-500 to-purple-500' },
    { title: 'Avg Star Rating', value: '4.9 ⭐', change: '+0.2', icon: Star, color: 'from-amber-500 to-orange-500' },
    { title: 'Conversion Rate', value: '62.8%', change: '+5.4%', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Business Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back! Here is your Google Review conversion performance.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/qr-codes">
            <Button variant="primary" className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              Generate QR Code
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400 font-medium">{stat.title}</span>
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                  {stat.change} vs last month
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Links & Live QR */}
        <Card className="lg:col-span-1 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <QrCode className="w-5 h-5 text-indigo-400" />
            Active QR Code
          </h2>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center">
            {/* Displaying simple styled QR placeholder */}
            <div className="w-44 h-44 bg-white p-3 rounded-xl shadow-lg flex items-center justify-center border-4 border-indigo-600">
              <div className="w-full h-full border-2 border-dashed border-slate-900 flex items-center justify-center text-slate-900 font-extrabold text-xs">
                [ QR CODE ]
              </div>
            </div>
            <p className="mt-4 font-semibold text-slate-200">Main Entrance Scanner</p>
            <p className="text-xs text-slate-400 mt-1">Targeting: Google Review Link</p>
            
            <div className="mt-4 flex gap-2 w-full">
              <Button size="sm" variant="outline" className="w-full">
                Download
              </Button>
              <Button size="sm" variant="secondary" className="w-full flex items-center justify-center gap-1">
                <Copy className="w-3.5 h-3.5" /> Copy Link
              </Button>
            </div>
          </div>
        </Card>

        {/* Activity & AI Draft Summary */}
        <Card className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Recent AI Generated Reviews
            </h2>
            <Link href="/reviews" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { rating: 5, time: '10 mins ago', text: 'Absolute best coffee in town! The espresso was rich and smooth, and the staff made me feel welcome immediately.', lang: 'English' },
              { rating: 5, time: '1 hour ago', text: 'Exceptional service and cozy atmosphere. I work here regularly and love the fresh pastries.', lang: 'English' },
              { rating: 4, time: '3 hours ago', text: 'Great place for quick meetings! High-speed WiFi and excellent caramel macchiato.', lang: 'English' },
            ].map((draft, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-amber-400 font-semibold">
                    {'★'.repeat(draft.rating)}
                  </div>
                  <span>{draft.time}</span>
                </div>
                <p className="text-sm text-slate-200 italic">"{draft.text}"</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
