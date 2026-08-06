'use client';

import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  QrCode,
  MessageSquare,
  Star,
  TrendingUp,
  ArrowUpRight,
  Plus,
  ExternalLink,
  Copy,
  Sparkles,
  Zap,
  Activity,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverviewPage() {
  const [timeframe, setTimeframe] = useState('7');
  const [qrUrl, setQrUrl] = useState('/r/umiya-traders');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrUrl(`${window.location.origin}/r/umiya-traders`);
    }
  }, []);

  const metrics = [
    {
      title: 'Total QR Scans',
      value: '2,840',
      change: '+24.8%',
      period: 'vs last month',
      icon: QrCode,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'AI Reviews Generated',
      value: '1,420',
      change: '+32.4%',
      period: 'vs last month',
      icon: MessageSquare,
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Avg Google Rating',
      value: '4.9 ⭐',
      change: '+0.3',
      period: 'from 320 reviews',
      icon: Star,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Conversion Rate',
      value: '68.4%',
      change: '+8.2%',
      period: 'Scan to Draft',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Zap className="w-4 h-4 text-amber-400" /> Real-Time Analytics Overview
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Aroma Roastery Performance
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Here is your live Google review conversion activity and QR scan analytics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/r/demo-business-123"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" /> Test Customer View
          </Link>
          <Link
            href="/qr-codes"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Create QR Code
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="card-stripe card-hover-lift rounded-3xl p-5 border border-slate-800 relative overflow-hidden space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {m.title}
                </span>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${m.gradient} text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-3xl font-black text-white tracking-tight">{m.value}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-emerald-400">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{m.change}</span>
                  <span className="text-[11px] text-slate-500 font-normal">{m.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column — Performance Chart */}
        <div className="lg:col-span-2 card-stripe rounded-3xl p-6 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" /> Daily Scan & Review Conversion
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Scans vs Generated AI Review Drafts (Last 7 Days)</p>
            </div>
            <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-xl px-3 py-1.5 focus:outline-none">
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
            </select>
          </div>

          {/* Simulated Chart Container */}
          <div className="h-64 w-full bg-slate-950/60 rounded-2xl border border-slate-800/80 p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between text-[11px] text-slate-500 font-medium">
              <span>Scans (Blue) &bull; Drafts (Indigo)</span>
              <span>Peak: 420 Scans/day</span>
            </div>

            {/* Visual Bar Chart Bars */}
            <div className="flex items-end justify-between gap-3 h-40 pt-4 px-2">
              {[
                { day: 'Mon', scans: 65, drafts: 42 },
                { day: 'Tue', scans: 85, drafts: 58 },
                { day: 'Wed', scans: 110, drafts: 74 },
                { day: 'Thu', scans: 95, drafts: 61 },
                { day: 'Fri', scans: 140, drafts: 98 },
                { day: 'Sat', scans: 210, drafts: 145 },
                { day: 'Sun', scans: 180, drafts: 124 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1.5 h-full">
                    <div
                      style={{ height: `${(item.scans / 210) * 100}%` }}
                      className="w-1/2 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all"
                      title={`${item.scans} Scans`}
                    />
                    <div
                      style={{ height: `${(item.drafts / 210) * 100}%` }}
                      className="w-1/2 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all"
                      title={`${item.drafts} Drafts`}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs">
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Total Weekly Scans</span>
              <strong className="text-base text-white font-bold mt-0.5 block">885</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">AI Review Drafts</span>
              <strong className="text-base text-indigo-400 font-bold mt-0.5 block">602</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Avg Rating</span>
              <strong className="text-base text-amber-400 font-bold mt-0.5 block">4.9 ⭐</strong>
            </div>
          </div>
        </div>

        {/* Right Column — Active QR Widget & Live Activity Timeline */}
        <div className="space-y-6">
          {/* Active QR Quick Widget */}
          <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <QrCode className="w-4 h-4 text-blue-400" /> Active QR Code
              </h3>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                Live
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-lg border-2 border-blue-600 flex items-center justify-center">
                <QRCodeSVG
                  value={qrUrl}
                  size={112}
                  bgColor="#FFFFFF"
                  fgColor="#0F172A"
                  level="H"
                  includeMargin={false}
                />
              </div>
              <p className="text-xs font-bold text-white">Main Entrance Counter QR</p>
              <p className="text-[11px] text-slate-400">Target: Google Review Link</p>
            </div>

            <div className="flex gap-2">
              <Link href="/qr-codes" className="w-full">
                <button className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200">
                  Manage QR Codes
                </button>
              </Link>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" /> Recent Activity Timeline
            </h3>

            <div className="space-y-3">
              {[
                { time: '4 mins ago', title: '5-Star Review Drafted', detail: 'Customer reviewed via Main Entrance QR' },
                { time: '28 mins ago', title: 'QR Code Scanned', detail: 'Scan recorded from iPhone Safari' },
                { time: '2 hours ago', title: 'Review Copied & Posted', detail: 'Customer clicked Open Google Review' },
              ].map((act, i) => (
                <div key={i} className="flex gap-3 text-xs border-b border-slate-800/60 pb-2.5 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-200">{act.title}</p>
                    <p className="text-[11px] text-slate-400">{act.detail}</p>
                    <span className="text-[10px] text-slate-500">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
