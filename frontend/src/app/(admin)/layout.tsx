'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldCheck,
  Building2,
  Users,
  CreditCard,
  Ticket,
  Sparkles,
  DollarSign,
  BarChart,
} from 'lucide-react';

const adminNav = [
  { name: 'Admin Overview', href: '/admin', icon: ShieldCheck },
  { name: 'Businesses', href: '/admin/businesses', icon: Building2 },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Plans', href: '/admin/plans', icon: CreditCard },
  { name: 'Coupons', href: '/admin/coupons', icon: Ticket },
  { name: 'AI Config', href: '/admin/ai-config', icon: Sparkles },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <aside className="w-64 bg-slate-900/90 backdrop-blur-xl border-r border-rose-900/30 flex flex-col justify-between p-4 sticky top-0 h-screen">
        <div>
          <Link href="/admin" className="flex items-center gap-2 px-3 py-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-rose-200 to-amber-300 bg-clip-text text-transparent">
              Super Admin
            </span>
          </Link>

          <nav className="mt-6 space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md shadow-rose-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
