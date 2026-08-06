'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Mail, Building2, Globe, Phone } from 'lucide-react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('Restaurant / Cafe');
  const [googleUrl, setGoogleUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex font-['Inter',sans-serif]">
      {/* Left Side — Marketing Panel */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-12 flex-col justify-between overflow-hidden border-r border-slate-800">
        <div className="glow-mesh-blue top-0 left-0 opacity-50" />

        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">ReviewAI</span>
        </Link>

        <div className="max-w-md relative z-10 space-y-6 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> 14-Day Free Trial &bull; No Credit Card Required
          </div>

          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Start Generating <span className="gradient-accent">5-Star Google Reviews</span> Today
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            Setup takes less than 2 minutes. Generate your custom QR codes and start collecting authentic AI-drafted reviews immediately.
          </p>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Included in Free Trial:</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Unlimited Dynamic QR Code Generation
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> OpenAI GPT Review Drafting Engine
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Real-time Analytics & Keyword Insights
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-slate-500 relative z-10">
          Trusted by over 1,000+ local businesses worldwide.
        </div>
      </div>

      {/* Right Side — Signup Form */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 max-w-xl mx-auto w-full relative z-10">
        <div className="lg:hidden flex items-center justify-between pb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-white">ReviewAI</span>
          </Link>
          <Link href="/login" className="text-xs font-semibold text-blue-400">
            Log In &rarr;
          </Link>
        </div>

        <div className="my-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              <span>Step {step} of 2</span> &bull; {step === 1 ? 'Business Setup' : 'Account Credentials'}
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Create Business Account</h2>
            <p className="text-slate-400 text-sm mt-1">Get your smart Google Review QR code in minutes.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Business Name</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Aroma Roastery Cafe"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Business Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                    <option value="Salon & Spa">Salon & Spa</option>
                    <option value="Healthcare & Medical">Healthcare & Medical</option>
                    <option value="Fitness & Gym">Fitness & Gym</option>
                    <option value="Automotive">Automotive Services</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Hotel & Hospitality">Hotel & Hospitality</option>
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Google Review URL</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="url"
                      required
                      value={googleUrl}
                      onChange={(e) => setGoogleUrl(e.target.value)}
                      placeholder="https://g.page/r/your-google-review-link"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Customers will be directed to this link after AI generates their draft.</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  Continue to Credentials <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Work Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="owner@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Create Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Complete Account Setup <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </form>

          <p className="text-center text-xs text-slate-400 pt-4 border-t border-slate-900">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 font-semibold hover:text-blue-300">
              Log In
            </Link>
          </p>
        </div>

        <div className="text-xs text-slate-600 text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
