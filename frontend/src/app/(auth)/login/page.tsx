'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    alert('Login successful! Redirecting to dashboard...');
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex font-['Inter',sans-serif]">
      {/* Left Side — Marketing Panel with Artwork & Gradient */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-12 flex-col justify-between overflow-hidden border-r border-slate-800">
        <div className="glow-mesh-blue top-0 left-0 opacity-50" />
        <div className="glow-mesh-indigo bottom-0 right-0 opacity-50" />

        {/* Top Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">ReviewAI</span>
        </Link>

        {/* Center Marketing Headline & Features */}
        <div className="max-w-md relative z-10 space-y-6 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Enterprise Google Review Engine
          </div>

          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Turn Customer Feedback Into{' '}
            <span className="gradient-accent">5-Star Growth</span>
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            Join 1,000+ top-rated businesses using intelligent QR codes and AI drafting to 10x their Google Reviews effortlessly.
          </p>

          {/* Bullet points */}
          <div className="space-y-3 pt-4">
            {[
              'Zero customer login or app download required',
              'AI generates unique, natural review drafts in 20+ languages',
              'Real-time scan analytics and keyword tracking',
              '100% compliant with Google Review policies',
            ].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className="relative z-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <p className="text-xs text-slate-300 italic">
            "ReviewAI helped us gain 140+ new 5-star Google reviews in just 3 weeks. Conversion has been unbelievable!"
          </p>
          <p className="text-xs font-bold text-white mt-2">&mdash; Sarah Jenkins, Owner at Aroma Roastery</p>
        </div>
      </div>

      {/* Right Side — Modern Login Form */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 max-w-xl mx-auto w-full relative z-10">
        <div className="lg:hidden flex items-center justify-between pb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-white">ReviewAI</span>
          </Link>
          <Link href="/register" className="text-xs font-semibold text-blue-400">
            Sign Up &rarr;
          </Link>
        </div>

        <div className="my-auto space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-sm mt-1">Enter your details to access your Business Dashboard.</p>
          </div>

          {/* Google SSO Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex-1 h-px bg-slate-800" />
            <span>OR EMAIL LOGIN</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Work Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300">Password</label>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset email feature coming soon!'); }} className="text-xs text-blue-400 hover:text-blue-300 font-medium">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-blue-600 w-4 h-4"
                />
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              {isLoading ? (
                <span>Logging in...</span>
              ) : (
                <>
                  Log In to Dashboard <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 pt-4 border-t border-slate-900">
            Don't have a business account?{' '}
            <Link href="/register" className="text-blue-400 font-semibold hover:text-blue-300">
              Start Free Trial
            </Link>
          </p>
        </div>

        <div className="text-xs text-slate-600 text-center">
          &copy; 2026 ReviewAI Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
