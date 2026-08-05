'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { QrCode as QrIcon, Download, Plus, Eye, Palette, Check } from 'lucide-react';

export default function QRCodesPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');

  const qrCodes = [
    { id: '1', name: 'Front Counter QR', scans: 842, type: 'Dynamic', status: 'Active', created: '2026-07-15' },
    { id: '2', name: 'Table Tent Stand QR', scans: 412, type: 'Dynamic', status: 'Active', created: '2026-07-20' },
    { id: '3', name: 'Receipt Footer QR', scans: 166, type: 'Static', status: 'Active', created: '2026-08-01' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">QR Code Generator & Management</h1>
          <p className="text-slate-400 mt-1">Generate dynamic QR codes customized with your brand logo and colors.</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create New QR Code
        </Button>
      </div>

      {/* QR Code List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {qrCodes.map((qr) => (
          <Card key={qr.id} className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">{qr.name}</h3>
                <span className="text-xs text-indigo-400 font-semibold">{qr.type} QR</span>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {qr.status}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl flex items-center justify-center border-2 border-slate-700">
              <div className="w-32 h-32 bg-slate-950 text-white flex items-center justify-center font-bold text-xs rounded-lg">
                [ QR PREVIEW ]
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3">
              <span>Scans: <strong className="text-white">{qr.scans}</strong></span>
              <span>Created: {qr.created}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" variant="secondary" className="w-full flex items-center justify-center gap-1">
                <Download className="w-3.5 h-3.5" /> Download
              </Button>
              <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-1">
                <Eye className="w-3.5 h-3.5" /> Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Generator Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <Card className="w-full max-w-lg space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-indigo-400" />
              Customize & Generate QR Code
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">QR Code Name</label>
                <input
                  type="text"
                  placeholder="e.g. Table #4 Scanner"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-300 block mb-1">Foreground Color</label>
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-full h-10 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 block mb-1">Background Color</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-10 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-slate-800">
              <Button variant="ghost" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowCreateModal(false)}>
                Generate & Save
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
