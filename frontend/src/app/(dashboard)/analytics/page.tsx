'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  Download,
  Calendar,
  Filter,
  TrendingUp,
  Globe2,
  PieChart,
  MessageSquare,
  QrCode,
  ArrowUpRight,
} from 'lucide-react';

export default function AnalyticsDashboardPage() {
  const [dateRange, setDateRange] = useState('30');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // Generate real CSV
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Metric,Value\n"
      + "Total QR Scans,4280\n"
      + "Review Drafts Created,2890\n"
      + "Avg Rating Score,4.91\n"
      + "Google Direct Opens,2150\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsExporting(false), 1500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      {/* Top Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" /> Deep Scan & AI Conversion Analytics
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Analytics & Customer Insights
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Track visitor scan behavior, review drafting volume, keyword sentiment, and language breakdown.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">Year to Date</option>
            </select>
          </div>

          <button
            onClick={handleExport}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            {isExporting ? 'Generating Report...' : 'Export Report'}
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Total QR Scans', val: '4,280', inc: '+18.4%', icon: QrCode, col: 'text-blue-400' },
          { label: 'Review Drafts Created', val: '2,890', inc: '+26.2%', icon: MessageSquare, col: 'text-indigo-400' },
          { label: 'Avg Rating Score', val: '4.91 ⭐', inc: '+0.12', icon: TrendingUp, col: 'text-amber-400' },
          { label: 'Google Direct Opens', val: '2,150', inc: '+74.4%', icon: Globe2, col: 'text-emerald-400' },
        ].map((k, idx) => (
          <div key={idx} className="card-stripe rounded-3xl p-5 border border-slate-800 space-y-2">
            <span className="text-xs font-semibold text-slate-400 block">{k.label}</span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-black text-white">{k.val}</h3>
              <span className={`text-xs font-bold ${k.col} flex items-center`}>
                <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> {k.inc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Line / Bar Chart (Left 2 cols) */}
        <div className="lg:col-span-2 card-stripe rounded-3xl p-6 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-white">Scan & Conversion Volume</h3>
              <p className="text-xs text-slate-400">Daily breakdown over the selected timeframe</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Scans
              </span>
              <span className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Drafts
              </span>
            </div>
          </div>

          <div className="h-64 bg-slate-950/60 rounded-2xl border border-slate-800/80 p-4 flex flex-col justify-between">
            <div className="flex items-end justify-between gap-3 h-48 pt-4">
              {[
                { label: 'W1', scans: 85, drafts: 58 },
                { label: 'W2', scans: 140, drafts: 98 },
                { label: 'W3', scans: 210, drafts: 145 },
                { label: 'W4', scans: 310, drafts: 220 },
              ].map((w, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-2 h-full">
                    <div
                      style={{ height: `${(w.scans / 310) * 100}%` }}
                      className="w-1/3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                    />
                    <div
                      style={{ height: `${(w.drafts / 310) * 100}%` }}
                      className="w-1/3 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg"
                    />
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">{w.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie / Donut Chart — Language Breakdown */}
        <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <PieChart className="w-4 h-4 text-purple-400" /> Review Language Distribution
            </h3>
            <p className="text-xs text-slate-400">Languages chosen by customers</p>
          </div>

          <div className="space-y-4">
            {[
              { lang: 'English', pct: 72, color: 'bg-blue-500' },
              { lang: 'Spanish', pct: 15, color: 'bg-indigo-500' },
              { lang: 'French', pct: 8, color: 'bg-purple-500' },
              { lang: 'Hindi', pct: 5, color: 'bg-emerald-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-200">{item.lang}</span>
                  <span className="text-slate-400">{item.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div style={{ width: `${item.pct}%` }} className={`h-full ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords & Top Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Top Customer Keywords</h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { word: 'Great Coffee', count: 142 },
              { word: 'Friendly Barista', count: 98 },
              { word: 'Cozy Vibe', count: 84 },
              { word: 'Fast WiFi', count: 62 },
              { word: 'Fresh Pastries', count: 51 },
              { word: 'Warm Ambiance', count: 44 },
            ].map((k, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
              >
                <span>{k.word}</span>
                <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-md font-bold">
                  {k.count}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Scans by QR Placement</h3>
          <div className="space-y-3">
            {[
              { name: 'Main Entrance Standee', scans: 2420, pct: '56%' },
              { name: 'Table Tent Stand #4', scans: 1280, pct: '30%' },
              { name: 'Receipt Footer QR', scans: 580, pct: '14%' },
            ].map((loc, i) => (
              <div key={i} className="flex items-center justify-between text-xs border-b border-slate-800/60 pb-2">
                <span className="font-semibold text-slate-200">{loc.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">{loc.scans} scans</span>
                  <span className="font-bold text-blue-400">{loc.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
