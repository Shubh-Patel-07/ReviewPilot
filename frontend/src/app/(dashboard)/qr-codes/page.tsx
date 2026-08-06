'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import {
  QrCode,
  Download,
  Copy,
  Check,
  Palette,
  Layout,
  Image as ImageIcon,
  Sparkles,
  Eye,
  Plus,
  Trash2,
  ExternalLink,
  Wifi,
} from 'lucide-react';

export default function QRCodeGeneratorPage() {
  const [qrName, setQrName] = useState('Main Counter Standee');
  const [fgColor, setFgColor] = useState('#2563EB');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [selectedFrame, setSelectedFrame] = useState('badge'); // badge, minimal, standee, border
  const [embedLogo, setEmbedLogo] = useState(true);
  const [copied, setCopied] = useState(false);
  const [targetUrl, setTargetUrl] = useState('http://172.20.10.2:3000/r/umiya-traders');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        setTargetUrl(`${window.location.origin}/r/umiya-traders`);
      } else {
        setTargetUrl(`http://172.20.10.2:3000/r/umiya-traders`);
      }
    }
  }, []);

  const existingQRs = [
    { id: '1', name: 'Main Counter Standee', scans: 1420, status: 'Active', created: '2026-07-20', type: 'Dynamic' },
    { id: '2', name: 'Table Tent Stand #4', scans: 890, status: 'Active', created: '2026-07-28', type: 'Dynamic' },
    { id: '3', name: 'Receipt Footer QR', scans: 530, status: 'Active', created: '2026-08-02', type: 'Static' },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = (type: 'png' | 'svg' | 'pdf', id: string, name: string) => {
    const svgElement = document.getElementById(id);
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgElement);
    const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    if (type === 'svg') {
      const a = document.createElement('a');
      a.href = svgUrl;
      a.download = `${name}.svg`;
      a.click();
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `${name}.${type}`; // simple hack for pdf as requested
        a.click();
      }
    };
    img.src = svgUrl;
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <QrCode className="w-4 h-4" /> Dynamic QR Code System
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            QR Generator & Customizer
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Generate print-ready 300 DPI QR codes customized with your brand colors, logo, and frames.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              window.scrollTo({ top: 300, behavior: 'smooth' });
              window.alert('Customizer ready below!');
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            <Plus className="w-4 h-4" /> Create New QR Code
          </button>
        </div>
      </div>

      {/* Main Grid: Customization Controls & Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-6">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Palette className="w-4 h-4 text-blue-400" /> QR Customization & Styling
            </h3>

            {/* Label Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">QR Code Name / Label</label>
              <input
                type="text"
                value={qrName}
                onChange={(e) => setQrName(e.target.value)}
                placeholder="e.g. Counter Standee, Table #2"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Scannable Target URL Input */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <label className="text-xs font-semibold text-slate-300 block flex items-center justify-between">
                <span>Scannable Target URL (Mobile Accessible)</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <Wifi className="w-3 h-3" /> Mobile Wi-Fi/LAN Ready
                </span>
              </label>
              <input
                type="text"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="http://172.20.10.2:3000/r/umiya-traders"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Note: Mobile phones on your Wi-Fi will open this exact URL when scanning the QR code!
              </p>
            </div>

            {/* Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <label className="text-xs font-semibold text-slate-300 block">Foreground Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-10 h-10 rounded-xl border-0 cursor-pointer bg-transparent"
                  />
                  <span className="font-mono text-xs text-slate-400 uppercase">{fgColor}</span>
                </div>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <label className="text-xs font-semibold text-slate-300 block">Background Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-10 h-10 rounded-xl border-0 cursor-pointer bg-transparent"
                  />
                  <span className="font-mono text-xs text-slate-400 uppercase">{bgColor}</span>
                </div>
              </div>
            </div>

            {/* Frame Template Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 block">Select Frame Template</label>
                <span className="text-[11px] text-slate-500">4 Frame Options</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'badge', name: 'Badge Style' },
                  { id: 'minimal', name: 'Minimal' },
                  { id: 'standee', name: 'Table Standee' },
                  { id: 'border', name: 'Border Frame' },
                ].map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame.id)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all border ${
                      selectedFrame === frame.id
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/80 shadow-md shadow-blue-600/10'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {frame.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Embed Toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Embed Business Logo in Center</p>
                  <p className="text-[11px] text-slate-400">Places your logo avatar at the center of the QR matrix</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={embedLogo}
                onChange={(e) => setEmbedLogo(e.target.checked)}
                className="w-5 h-5 rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Live Preview Card Column */}
        <div className="space-y-6">
          <div className="card-stripe rounded-3xl p-6 border border-slate-800 text-center space-y-5 sticky top-24">
            <h3 className="text-sm font-bold text-white flex items-center justify-center gap-2 border-b border-slate-800 pb-3">
              <Eye className="w-4 h-4 text-emerald-400" /> Real-Time Live Preview
            </h3>

            {/* Frame Wrapped Live Preview */}
            <div
              className={`p-6 rounded-3xl transition-all flex flex-col items-center justify-center space-y-3 ${
                selectedFrame === 'badge'
                  ? 'bg-gradient-to-b from-blue-900/60 to-slate-950 border-2 border-blue-500/40 shadow-2xl'
                  : selectedFrame === 'standee'
                  ? 'bg-slate-950 border-4 border-slate-800 shadow-2xl'
                  : 'bg-slate-950 border border-slate-800'
              }`}
            >
              {/* Real QR Container */}
              <div
                style={{ backgroundColor: bgColor }}
                className="p-4 rounded-2xl shadow-xl flex items-center justify-center relative border border-slate-700"
              >
                <div className="relative flex items-center justify-center">
                  <QRCodeSVG
                    id="live-qr"
                    value={targetUrl}
                    size={176}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    level="H"
                    includeMargin={false}
                  />

                  {embedLogo && (
                    <div className="absolute inset-0 m-auto w-10 h-10 rounded-xl bg-slate-900 border-2 border-white flex items-center justify-center text-lg font-bold text-white shadow-md">
                      ☕
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm font-bold text-white">{qrName}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Scan to leave a Google Review</p>
              </div>
            </div>

            {/* Download & Copy Buttons */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => downloadQR('png', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-md cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> PNG
                </button>
                <button onClick={() => downloadQR('svg', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> SVG
                </button>
                <button onClick={() => downloadQR('pdf', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
              </div>

              <button
                onClick={handleCopyLink}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Link Copied to Clipboard!' : 'Copy Target Short URL'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Existing QR Codes List */}
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <QrCode className="w-5 h-5 text-indigo-400" /> Active Business QR Codes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {existingQRs.map((qr) => (
            <div key={qr.id} className="card-stripe card-hover-lift rounded-3xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white">{qr.name}</h3>
                  <span className="text-[11px] text-blue-400 font-semibold">{qr.type} QR</span>
                </div>
                <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {qr.status}
                </span>
              </div>

              {/* Real QR Rendering in Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 bg-white p-2 rounded-xl shadow-lg border border-slate-700 flex items-center justify-center">
                  <QRCodeSVG
                    id={`qr-${qr.id}`}
                    value={targetUrl}
                    size={96}
                    bgColor="#FFFFFF"
                    fgColor="#0F172A"
                    level="H"
                    includeMargin={false}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Total Scans: <strong className="text-white">{qr.scans}</strong></span>
                <span>Created: {qr.created}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                <button onClick={() => downloadQR('png', `qr-${qr.id}`, qr.name)} className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-200 flex items-center justify-center gap-1 transition-colors cursor-pointer">
                  <Download className="w-3 h-3" /> PNG
                </button>
                <a href={targetUrl} target="_blank" className="w-full">
                  <button className="w-full py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-[11px] font-semibold text-blue-300 flex items-center justify-center gap-1 transition-colors cursor-pointer">
                    <ExternalLink className="w-3 h-3" /> Test URL
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
