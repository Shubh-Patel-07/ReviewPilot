'use client';

import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  Building2,
  Sparkles,
  User,
  Settings,
  LogOut,
  Plus,
} from 'lucide-react';

export const Header: React.FC = () => {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Search Input */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search QR codes, drafts, keywords... (Press ⌘K)"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Business Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowBusinessDropdown(!showBusinessDropdown)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 font-medium hover:border-slate-700 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
              ☕
            </div>
            <span>Aroma Roastery</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showBusinessDropdown && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 text-xs space-y-1">
              <div className="px-3 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Switch Business
              </div>
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800/80 text-white font-medium">
                <span className="flex items-center gap-2">☕ Aroma Roastery</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </button>
              <button onClick={() => alert('Switched to Apex Fitness!')} className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-800/50 text-slate-300">
                <span className="flex items-center gap-2">🏋️ Apex Fitness</span>
              </button>
              <div className="border-t border-slate-800 pt-1 mt-1">
                <button onClick={() => alert('Add New Location coming soon!')} className="w-full flex items-center gap-2 px-3 py-2 text-blue-400 hover:bg-blue-500/10 rounded-xl font-medium">
                  <Plus className="w-3.5 h-3.5" /> Add New Location
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 z-50 text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white">Notifications</span>
                <span onClick={() => alert('All notifications marked as read.')} className="text-[10px] text-blue-400 font-semibold cursor-pointer">Mark all read</span>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <p className="font-semibold text-slate-200">New 5-Star Review Draft Generated</p>
                  <p className="text-[11px] text-slate-400">Customer scanned Main Entrance QR Code.</p>
                  <span className="text-[10px] text-slate-500">2 mins ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2.5 pl-2 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
              BO
            </div>
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 text-xs space-y-1">
              <div className="px-3 py-2 border-b border-slate-800">
                <p className="font-bold text-white">Sarah Jenkins</p>
                <p className="text-[11px] text-slate-400">Pro Business Owner</p>
              </div>
              <a href="/profile" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300">
                <User className="w-3.5 h-3.5" /> Business Profile
              </a>
              <a href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300">
                <Settings className="w-3.5 h-3.5" /> App Settings
              </a>
              <div className="border-t border-slate-800 pt-1">
                <a href="/login" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-rose-500/10 text-rose-400">
                  <LogOut className="w-3.5 h-3.5" /> Log Out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
