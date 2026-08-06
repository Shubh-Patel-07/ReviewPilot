'use client';

import React, { useState } from 'react';
import { CreditCard, Check, Zap, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export default function SubscriptionBillingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free Trial',
      priceMonthly: '$0',
      priceYearly: '$0',
      desc: 'Perfect for trying out ReviewAI for 14 days.',
      features: ['1 QR Code', '100 Scans/mo', 'Basic AI Review Drafts', 'Email Support'],
      popular: false,
    },
    {
      id: 'starter',
      name: 'Starter',
      priceMonthly: '$19',
      priceYearly: '$15',
      desc: 'Ideal for single location coffee shops & salons.',
      features: ['5 QR Codes', '1,000 Scans/mo', 'Unlimited AI Drafts', 'Custom Colors & Logo', 'Basic Analytics'],
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro Business',
      priceMonthly: '$49',
      priceYearly: '$39',
      desc: 'For growing businesses seeking rapid review growth.',
      features: ['25 QR Codes', '10,000 Scans/mo', 'Advanced GPT-4o Engine', 'Multi-Language Support', 'Priority Support'],
      popular: true,
    },
    {
      id: 'agency',
      name: 'Agency / Enterprise',
      priceMonthly: '$149',
      priceYearly: '$119',
      desc: 'For multi-location chains and marketing agencies.',
      features: ['Unlimited QR Codes', '100,000 Scans/mo', 'Dedicated Account Manager', 'Custom API Access', 'White-Label Reports'],
      popular: false,
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Inter',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <CreditCard className="w-4 h-4" /> Subscription & Plan Management
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Plans & Billing
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Manage your active subscription, payment methods, and upgrade your tier.
          </p>
        </div>

        {/* Current Plan Badge */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px]">Current Active Plan</span>
            <strong className="text-white font-bold">Pro Business Plan ($49/mo)</strong>
          </div>
          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Active
          </span>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex items-center justify-center gap-3 py-2">
        <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
          Monthly Billing
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          className="w-12 h-6 rounded-full bg-slate-900 border border-slate-800 p-1 flex items-center transition-colors cursor-pointer"
        >
          <div
            className={`w-4 h-4 rounded-full bg-blue-600 transition-transform ${
              billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-xs font-semibold ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
          Yearly Billing <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-6 flex flex-col justify-between space-y-6 transition-all ${
              plan.popular
                ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-blue-500 shadow-2xl scale-105 relative'
                : 'card-stripe border border-slate-800'
            }`}
          >
            <div>
              {plan.popular && (
                <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-blue-600 text-white uppercase tracking-wider inline-block mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{plan.desc}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">
                  {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                </span>
                <span className="text-xs text-slate-400">/month</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                plan.id === 'pro'
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20'
                  : plan.popular
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {plan.id === 'pro' ? 'Current Plan' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Feature Table */}
      <div className="card-stripe rounded-3xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
          Plan Comparison Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Free</th>
                <th className="px-4 py-3">Starter</th>
                <th className="px-4 py-3">Pro</th>
                <th className="px-4 py-3">Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { feature: 'QR Codes Limit', free: '1', starter: '5', pro: '25', agency: 'Unlimited' },
                { feature: 'Monthly Scans Limit', free: '100', starter: '1,000', pro: '10,000', agency: '100,000' },
                { feature: 'AI Engine', free: 'Standard', starter: 'Standard', pro: 'Advanced GPT-4o', agency: 'Advanced GPT-4o' },
                { feature: 'Custom Colors & Logo', free: 'No', starter: 'Yes', pro: 'Yes', agency: 'Yes' },
                { feature: 'Analytics Export', free: 'No', starter: 'Basic', pro: 'Full CSV/PDF', agency: 'Custom API' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">{row.feature}</td>
                  <td className="px-4 py-3">{row.free}</td>
                  <td className="px-4 py-3">{row.starter}</td>
                  <td className="px-4 py-3 text-blue-400 font-bold">{row.pro}</td>
                  <td className="px-4 py-3">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
