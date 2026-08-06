'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  QrCode,
  Star,
  Zap,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Copy,
  Check,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Lock,
} from 'lucide-react';

export default function LandingPage() {
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('Great service and warm ambiance!');
  const [aiDraft, setAiDraft] = useState<string>(
    'Absolute 5-star experience! The team was super attentive, the atmosphere was wonderful, and every detail exceeded expectations. Highly recommend!'
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSimulateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (rating >= 4) {
        setAiDraft(
          `Fantastic experience! ${feedback ? `"${feedback}" — ` : ''}The quality and customer service were outstanding. I will definitely be back and recommend this place to all my friends!`
        );
      } else {
        setAiDraft(
          `Appreciate the visit! ${feedback ? feedback : 'The team was responsive to feedback.'} Looking forward to seeing even more improvements on my next visit.`
        );
      }
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative">
      {/* Background Ambient Glow Orbs */}
      <div className="glow-blob-purple -top-40 -left-40 opacity-70" />
      <div className="glow-blob-blue top-96 -right-40 opacity-60" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight gradient-text">
              ReviewAI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#demo" className="hover:text-white transition-colors">Live Preview</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto text-center space-y-8 z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
          <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          Zero Customer Login &bull; 10x Google Reviews Growth
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
          Turn Every Customer Into A{' '}
          <span className="gradient-text-accent">5-Star Google Review</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Smart QR codes that eliminate friction. Customers scan, rate 1–5 stars, and AI instantly generates a natural, unique Google review draft. <strong className="text-slate-200">No login, no app download required.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/r/demo-business-123"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel text-slate-200 hover:text-white font-bold text-lg border border-slate-700/80 hover:border-slate-500 hover:bg-slate-900/90 transition-all flex items-center justify-center gap-2"
          >
            <QrCode className="w-5 h-5 text-indigo-400" /> Scan QR Demo
          </Link>
        </div>

        {/* Hero Feature Highlights */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Policy Compliant (No Bot Reviews)
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" /> No Customer Signup or OTP
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" /> OpenAI GPT Powered
          </div>
        </div>
      </section>

      {/* Interactive Live Demo Preview Section */}
      <section id="demo" className="relative py-16 px-6 max-w-5xl mx-auto z-10">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Interactive Preview</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">See How Fast Customers Draft Reviews</h2>
        </div>

        <div className="glass-card-glow rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
                ☕
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Aroma Roastery & Cafe</h3>
                <p className="text-xs text-slate-400">Tap stars to generate an AI review</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Preview
            </span>
          </div>

          {/* Star Rating Selector */}
          <div className="text-center space-y-2 py-2">
            <p className="text-sm font-semibold text-slate-300">How was your experience?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-125 focus:outline-none"
                >
                  <Star
                    size={36}
                    className={`${
                      star <= rating
                        ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]'
                        : 'fill-slate-800 text-slate-700'
                    } transition-all`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 block">Optional Short Comment</label>
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="e.g. Great coffee, cozy vibe"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleSimulateAI}
            disabled={isGenerating}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-spin" /> AI Crafting Review...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Generate Magic AI Review
              </span>
            )}
          </button>

          {/* Generated AI Review Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> AI Generated Draft
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <p className="text-sm text-slate-200 italic leading-relaxed">
              "{aiDraft}"
            </p>

            <div className="pt-2 border-t border-slate-900 flex justify-end">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 flex items-center gap-1.5 transition-all"
              >
                Post on Google Reviews <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Everything You Need</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Built for Maximum Conversion</h2>
          <p className="text-slate-400">Designed to convert casual customers into enthusiastic 5-star Google reviewers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: QrCode,
              title: 'Dynamic QR Code Generator',
              desc: 'Custom colors, business logo embedding, and instant dynamic redirects in PNG, SVG, or print-ready PDF formats.',
              color: 'from-blue-500 to-indigo-500',
            },
            {
              icon: Sparkles,
              title: 'Human-Like AI Drafting',
              desc: 'OpenAI GPT produces unique, grammatically perfect reviews with varied wording every single time.',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: Lock,
              title: 'Zero Customer Friction',
              desc: 'Customers scan and review in seconds. No app downloads, no account signups, and no phone OTP required.',
              color: 'from-emerald-500 to-teal-500',
            },
            {
              icon: Globe2,
              title: 'Multi-Language Support',
              desc: 'Automatically generate reviews in English, Spanish, French, German, Hindi, and 20+ other languages.',
              color: 'from-amber-500 to-orange-500',
            },
            {
              icon: TrendingUp,
              title: 'Real-Time Scan Analytics',
              desc: 'Track total scans, review conversion rates, visitor trends, top keywords, and customer feedback insights.',
              color: 'from-rose-500 to-red-500',
            },
            {
              icon: ShieldCheck,
              title: '100% Policy Compliant',
              desc: 'ReviewAI never automatically posts reviews or impersonates customers. The user approves and posts directly.',
              color: 'from-indigo-500 to-cyan-500',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl space-y-4 hover:border-slate-700/80 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Simple Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Choose Your Growth Plan</h2>
          <p className="text-slate-400">Start with our free trial. Cancel or upgrade anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: 'Free', price: '$0', period: '/month', limit: '1 QR Code', scans: '100 Scans/mo', popular: false },
            { name: 'Starter', price: '$19', period: '/month', limit: '5 QR Codes', scans: '1,000 Scans/mo', popular: false },
            { name: 'Pro', price: '$49', period: '/month', limit: '25 QR Codes', scans: '10,000 Scans/mo', popular: true },
            { name: 'Agency', price: '$149', period: '/month', limit: 'Unlimited QR Codes', scans: '100,000 Scans/mo', popular: false },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 space-y-6 flex flex-col justify-between ${
                plan.popular
                  ? 'glass-card-glow border-2 border-indigo-500 scale-105 shadow-2xl'
                  : 'glass-panel border border-slate-800'
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white uppercase tracking-wider inline-block mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> {plan.limit}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> {plan.scans}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Unlimited AI Review Drafts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Custom Logo Embedding
                  </li>
                </ul>
              </div>

              <Link
                href="/register"
                className={`w-full py-3 rounded-xl text-center font-bold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
            R
          </div>
          <span className="font-semibold text-slate-300">ReviewAI SaaS Platform</span>
          <span>&bull; &copy; 2026 ReviewAI Inc. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-slate-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-slate-300">Terms of Service</a>
          <a href="mailto:support@reviewai.com" className="hover:text-slate-300">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}
