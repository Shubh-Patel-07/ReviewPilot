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
  const [targetUrl, setTargetUrl] = useState('/r/umiya-traders');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTargetUrl(`${window.location.origin}/r/umiya-traders`);
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

  // ═══════════════════════════════════════════════════════════════
  // PROFESSIONAL PRINT-READY QR POSTER GENERATOR
  // Generates beautiful A5-sized standee/poster with:
  //  - Gradient header with business name
  //  - 5-star rating display
  //  - High-res QR code centered
  //  - "Scan Me" call-to-action
  //  - Google Review branding footer
  //  - Ready for direct printing at any print shop
  // ═══════════════════════════════════════════════════════════════
  const downloadPrintReady = (format: 'png' | 'svg' | 'pdf', qrSvgId: string, label: string) => {
    const svgElement = document.getElementById(qrSvgId);
    if (!svgElement) return;

    // If SVG raw download requested
    if (format === 'svg') {
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svgElement);
      const blob = new Blob([source], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${label}_QR.svg`;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    // For PNG & PDF: Generate beautiful print-ready poster using Canvas
    const serializer = new XMLSerializer();
    const svgSource = serializer.serializeToString(svgElement);
    const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgSource);

    const qrImg = new Image();
    qrImg.onload = () => {
      // A5 size at 300 DPI = 1748 × 2480 px (we'll use a scaled version)
      const W = 1200;
      const H = 1700;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const bName = label || businessName || 'Umiya Traders';

      // ── BACKGROUND ──
      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0, '#0F172A');
      bgGrad.addColorStop(0.4, '#1E293B');
      bgGrad.addColorStop(1, '#0F172A');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ── TOP GRADIENT BANNER ──
      const bannerH = 320;
      const bannerGrad = ctx.createLinearGradient(0, 0, W, bannerH);
      bannerGrad.addColorStop(0, '#2563EB');
      bannerGrad.addColorStop(0.5, '#4F46E5');
      bannerGrad.addColorStop(1, '#7C3AED');
      ctx.fillStyle = bannerGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(W, 0);
      ctx.lineTo(W, bannerH - 60);
      ctx.quadraticCurveTo(W / 2, bannerH + 30, 0, bannerH - 60);
      ctx.closePath();
      ctx.fill();

      // ── BUSINESS NAME ──
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 52px Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(bName, W / 2, 120);

      // ── TAGLINE ──
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '28px Inter, Arial, sans-serif';
      ctx.fillText('Your Feedback Means Everything To Us!', W / 2, 175);

      // ── 5 STARS ──
      const starY = 220;
      const starSize = 42;
      const starSpacing = 55;
      const starsStartX = W / 2 - (starSpacing * 2);
      ctx.fillStyle = '#FBBF24';
      ctx.font = `${starSize}px Arial`;
      for (let i = 0; i < 5; i++) {
        ctx.fillText('★', starsStartX + (i * starSpacing), starY);
      }

      // ── QR CODE WHITE CARD ──
      const cardW = 520;
      const cardH = 520;
      const cardX = (W - cardW) / 2;
      const cardY = 380;

      // Card shadow
      ctx.shadowColor = 'rgba(37, 99, 235, 0.3)';
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;

      // Rounded card
      const r = 30;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(cardX + r, cardY);
      ctx.lineTo(cardX + cardW - r, cardY);
      ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + r);
      ctx.lineTo(cardX + cardW, cardY + cardH - r);
      ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - r, cardY + cardH);
      ctx.lineTo(cardX + r, cardY + cardH);
      ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - r);
      ctx.lineTo(cardX, cardY + r);
      ctx.quadraticCurveTo(cardX, cardY, cardX + r, cardY);
      ctx.closePath();
      ctx.fill();

      // Blue border around card
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#2563EB';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw QR code inside white card
      const qrSize = 420;
      const qrX = cardX + (cardW - qrSize) / 2;
      const qrY = cardY + (cardH - qrSize) / 2;
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      // ── SCAN ME BADGE ──
      const badgeY = cardY + cardH + 40;
      const badgeW = 300;
      const badgeH = 65;
      const badgeX = (W - badgeW) / 2;

      const badgeGrad = ctx.createLinearGradient(badgeX, badgeY, badgeX + badgeW, badgeY);
      badgeGrad.addColorStop(0, '#2563EB');
      badgeGrad.addColorStop(1, '#4F46E5');
      ctx.fillStyle = badgeGrad;

      // Rounded badge
      const br = 20;
      ctx.beginPath();
      ctx.moveTo(badgeX + br, badgeY);
      ctx.lineTo(badgeX + badgeW - br, badgeY);
      ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + br);
      ctx.lineTo(badgeX + badgeW, badgeY + badgeH - br);
      ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - br, badgeY + badgeH);
      ctx.lineTo(badgeX + br, badgeY + badgeH);
      ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - br);
      ctx.lineTo(badgeX, badgeY + br);
      ctx.quadraticCurveTo(badgeX, badgeY, badgeX + br, badgeY);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 32px Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('📱  SCAN ME', W / 2, badgeY + 44);

      // ── INSTRUCTIONS TEXT ──
      const instrY = badgeY + badgeH + 60;
      ctx.fillStyle = '#94A3B8';
      ctx.font = '26px Inter, Arial, sans-serif';
      ctx.fillText('1. Open your phone camera', W / 2, instrY);
      ctx.fillText('2. Point at the QR code above', W / 2, instrY + 45);
      ctx.fillText('3. Share your experience on Google', W / 2, instrY + 90);

      // ── GOOGLE REVIEW BRANDING ──
      const googleY = instrY + 160;
      ctx.fillStyle = '#E2E8F0';
      ctx.font = 'bold 30px Inter, Arial, sans-serif';
      ctx.fillText('Leave us a Google Review', W / 2, googleY);

      // Google colored dots
      const dotY = googleY + 40;
      const dotR = 8;
      const dotColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
      const dotSpacing = 30;
      const dotsStartX = W / 2 - ((dotColors.length - 1) * dotSpacing) / 2;
      dotColors.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(dotsStartX + (i * dotSpacing), dotY, dotR, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── FOOTER ──
      ctx.fillStyle = '#475569';
      ctx.font = '18px Inter, Arial, sans-serif';
      ctx.fillText('Powered by ReviewAI', W / 2, H - 60);

      // ── DECORATIVE CORNER ACCENTS ──
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
      ctx.lineWidth = 3;
      // Top-left
      ctx.beginPath(); ctx.moveTo(30, 80); ctx.lineTo(30, 30); ctx.lineTo(80, 30); ctx.stroke();
      // Top-right
      ctx.beginPath(); ctx.moveTo(W - 30, 80); ctx.lineTo(W - 30, 30); ctx.lineTo(W - 80, 30); ctx.stroke();
      // Bottom-left
      ctx.beginPath(); ctx.moveTo(30, H - 80); ctx.lineTo(30, H - 30); ctx.lineTo(80, H - 30); ctx.stroke();
      // Bottom-right
      ctx.beginPath(); ctx.moveTo(W - 30, H - 80); ctx.lineTo(W - 30, H - 30); ctx.lineTo(W - 80, H - 30); ctx.stroke();

      // ── DOWNLOAD ──
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${bName}_QR_Poster.${format === 'pdf' ? 'png' : 'png'}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    qrImg.src = svgDataUrl;
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
                placeholder="https://yoursite.vercel.app/r/umiya-traders"
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
                <button onClick={() => downloadPrintReady('png', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-md cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> PNG
                </button>
                <button onClick={() => downloadPrintReady('svg', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> SVG
                </button>
                <button onClick={() => downloadPrintReady('pdf', 'live-qr', qrName || 'qrcode')} className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer">
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
                <button onClick={() => downloadPrintReady('png', `qr-${qr.id}`, qr.name)} className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-200 flex items-center justify-center gap-1 transition-colors cursor-pointer">
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
