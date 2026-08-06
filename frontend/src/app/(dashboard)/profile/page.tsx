'use client';

import React, { useState, useEffect } from 'react';
import {
  Building2,
  Globe,
  Phone,
  Mail,
  MapPin,
  Upload,
  Save,
  Check,
  Camera,
  Sparkles,
} from 'lucide-react';

export default function BusinessProfilePage() {
  const [businessName, setBusinessName] = useState('Umiya Traders');
  const [category, setCategory] = useState('Retail & Wholesale');
  const [googleUrl, setGoogleUrl] = useState('https://www.google.com/search?q=Umiya+traders#lrd=0x395c870e52c628c7:0xc460ce380999c40d,3');
  const [website, setWebsite] = useState('https://aromaroastery.com');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [email, setEmail] = useState('contact@aromaroastery.com');
  const [address, setAddress] = useState('101 Coffee Street, Suite 4, San Francisco, CA 94107');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUrl = localStorage.getItem('google_review_url');
      if (savedUrl) setGoogleUrl(savedUrl);

      const savedName = localStorage.getItem('business_name');
      if (savedName) setBusinessName(savedName);
    }
  }, []);

  const bannerRef = React.useRef<HTMLInputElement>(null);
  const logoRef = React.useRef<HTMLInputElement>(null);

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      window.alert('Banner selected: ' + e.target.files[0].name);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      window.alert('Logo selected: ' + e.target.files[0].name);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('google_review_url', googleUrl);
      localStorage.setItem('business_name', businessName);
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-['Inter',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4" /> Business Identity & Links
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Business Profile & Google Link
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Manage your brand assets, logo avatar, and target Google Review page link.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          {isSaved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
          {isSaved ? 'Profile Saved!' : 'Save Changes'}
        </button>
      </div>

      {/* Banner & Logo Header Card */}
      <div className="card-stripe rounded-3xl border border-slate-800 overflow-hidden space-y-0">
        {/* Cover Banner */}
        <div className="h-40 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 relative p-4 flex items-end justify-end">
          <input type="file" ref={bannerRef} className="hidden" accept="image/*" onChange={handleBannerUpload} />
          <button 
            type="button"
            onClick={() => bannerRef.current?.click()}
            className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-xs font-semibold text-slate-200 backdrop-blur-md border border-slate-700/80 flex items-center gap-1.5 transition-colors">
            <Camera className="w-3.5 h-3.5" /> Change Banner Cover
          </button>
        </div>

        {/* Profile Avatar Overlay & Name */}
        <div className="p-6 relative pt-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border-4 border-[#0F172A] p-1 shadow-2xl flex items-center justify-center text-4xl">
                ☕
              </div>
              <input type="file" ref={logoRef} className="hidden" accept="image/*" onChange={handleLogoUpload} />
              <button
                type="button"
                onClick={() => logoRef.current?.click()}
                className="absolute bottom-0 right-0 p-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg border-2 border-slate-900 transition-colors"
                title="Upload Logo"
              >
                <Upload className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-white">{businessName}</h2>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Details */}
      <form onSubmit={handleSave} className="card-stripe rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3">
          General Business Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Business Name</label>
            <input
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="Restaurant / Cafe">Restaurant / Cafe</option>
              <option value="Salon & Spa">Salon & Spa</option>
              <option value="Healthcare & Medical">Healthcare & Medical</option>
              <option value="Fitness & Gym">Fitness & Gym</option>
              <option value="Automotive">Automotive</option>
              <option value="Retail Store">Retail Store</option>
            </select>
          </div>
        </div>

        {/* Target Google Review Link */}
        <div className="space-y-1.5 pt-2">
          <label className="text-xs font-semibold text-slate-300 block flex items-center justify-between">
            <span>Google Review Direct Link (Entered by Business)</span>
            <span className="text-[11px] text-emerald-400 font-normal">Active Target URL</span>
          </label>
          <div className="relative">
            <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="url"
              required
              value={googleUrl}
              onChange={(e) => setGoogleUrl(e.target.value)}
              placeholder="https://g.page/r/your-business-link"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Customers will be directed to this link when they click "Post on Google" after review generation.
          </p>
        </div>

        {/* Contact Details */}
        <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 pt-4">
          Contact & Location Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Public Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Website URL</label>
            <div className="relative">
              <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 block">Physical Address</label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer"
          >
            {isSaved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            {isSaved ? 'Profile Saved!' : 'Save Business Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}
