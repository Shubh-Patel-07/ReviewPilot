'use client';

import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Header } from '@/components/ui/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex font-['Inter',sans-serif]">
      {/* Linear-style Collapsible Sidebar */}
      <Sidebar />

      {/* Main Content & Top Header */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8">{children}</main>
      </div>
    </div>
  );
}
