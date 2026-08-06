'use client';

import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Building2,
  Bell,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Check,
  Save,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'business' | 'notifications' | 'ai' | 'security' | 'billing'>('general');
  const [defaultTone, setDefaultTone] = useState('Enthusiastic');
  const [defaultLang, setDefaultLang] = useState('English');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'business', label: 'Business Profile', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'ai', label: 'AI Configuration', icon: Sparkles },
    { id: 'security', label: 'Security & Auth', icon: ShieldCheck },
    { id: 'billing', label: 'Billing & Plan', icon: CreditCard },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-['Inter',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <SettingsIcon className="w-4 h-4" /> Preferences & Configurations
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Application Settings
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Manage your account settings, AI tone defaults, and notification preferences.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer"
        >
          {isSaved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
          {isSaved ? 'Settings Saved!' : 'Save Preferences'}
        </button>
      </div>

      {/* Tabs Row */}
      <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="card-stripe rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
              General Account Preferences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Dashboard Theme</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs">
                  <option value="dark">Dark Slate (Default)</option>
                  <option value="light">Light Mode</option>
                  <option value="system">System Preference</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Default Timezone</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs">
                  <option value="UTC">UTC (Coordinated Universal Time)</option>
                  <option value="EST">Eastern Standard Time (US)</option>
                  <option value="PST">Pacific Standard Time (US)</option>
                  <option value="IST">India Standard Time (+05:30)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
              AI Engine & Review Generator Config
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Default Writing Tone</label>
                <select
                  value={defaultTone}
                  onChange={(e) => setDefaultTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                >
                  <option value="Enthusiastic">Enthusiastic & Friendly</option>
                  <option value="Professional">Professional & Formal</option>
                  <option value="Casual">Casual & Short</option>
                  <option value="Detailed">Detailed Storytelling</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Default Review Language</label>
                <select
                  value={defaultLang}
                  onChange={(e) => setDefaultLang(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <p className="text-xs font-bold text-white">AI Model Model Selection</p>
              <p className="text-[11px] text-slate-400">
                Defaulting to OpenAI GPT-4o for optimal review uniqueness and natural phrasing.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div>
                  <p className="text-xs font-bold text-white">Email Alerts for New QR Scans</p>
                  <p className="text-[11px] text-slate-400">Receive instant email whenever a customer scans your QR</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div>
                  <p className="text-xs font-bold text-white">Weekly Performance Digest Email</p>
                  <p className="text-[11px] text-slate-400">Get a weekly PDF report of scans & review growth</p>
                </div>
                <input
                  type="checkbox"
                  checked={weeklyReports}
                  onChange={(e) => setWeeklyReports(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
              Security & Authentication
            </h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">New Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                />
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'business' || activeTab === 'billing') && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Please visit the dedicated <a href="/profile" className="text-blue-400 underline">Business Profile</a> or <a href="/billing" className="text-blue-400 underline">Billing & Subscriptions</a> page to configure these settings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
