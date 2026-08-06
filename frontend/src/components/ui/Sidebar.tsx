'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  QrCode,
  BarChart3,
  MessageSquare,
  Building2,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const menuItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'QR Code System', href: '/qr-codes', icon: QrCode },
  { name: 'Review Drafts', href: '/qr-codes', icon: MessageSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Business Profile', href: '/profile', icon: Building2 },
  { name: 'Billing & Plan', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-slate-900/80 backdrop-blur-xl border-r border-slate-800/80 flex flex-col justify-between p-4 sticky top-0 h-screen transition-all duration-300 z-30 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Brand Logo */}
        <div className="flex items-center justify-between px-2 py-3 mb-4">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            {!collapsed && (
              <span className="text-xl font-extrabold tracking-tight text-white">
                Review<span className="text-blue-500">AI</span>
              </span>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
                title={collapsed ? item.name : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Super Admin Badge link & Pro Plan indicator */}
      {!collapsed ? (
        <div className="space-y-3 pt-4 border-t border-slate-800/80">
          <Link
            href="/admin"
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs transition-colors"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Super Admin
            </div>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-bold">
              Access
            </span>
          </Link>
        </div>
      ) : (
        <div className="pt-4 border-t border-slate-800 text-center">
          <Link href="/admin" className="p-2 text-indigo-400 inline-block" title="Super Admin Panel">
            <ShieldCheck className="w-5 h-5" />
          </Link>
        </div>
      )}
    </aside>
  );
};
