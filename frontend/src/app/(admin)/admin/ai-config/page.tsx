'use client';

import React, { useState } from 'react';
import { Sparkles, Save, Check, Cpu } from 'lucide-react';

export default function AdminAIConfigPage() {
  const [model, setModel] = useState('gpt-4o-mini');
  const [temperature, setTemperature] = useState('0.9');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-['Inter',sans-serif]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> AI Engine Configuration
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            AI Models & Prompt Engineering
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Configure system prompts, OpenAI model selection, and temperature parameters for review generation.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all cursor-pointer"
        >
          {isSaved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
          {isSaved ? 'Config Saved!' : 'Save AI Settings'}
        </button>
      </div>

      <form onSubmit={handleSave} className="card-stripe rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
          OpenAI Model Parameters
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Default AI Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            >
              <option value="gpt-4o-mini">OpenAI GPT-4o-mini (Recommended for speed & low cost)</option>
              <option value="gpt-4o">OpenAI GPT-4o (Highest Quality)</option>
              <option value="gpt-3.5-turbo">GPT-3.5-Turbo (Legacy)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">Creativity Temperature ({temperature})</label>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full h-2 bg-slate-900 rounded-lg cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold"
          >
            {isSaved ? 'Config Saved!' : 'Save AI Configuration'}
          </button>
        </div>
      </form>
    </div>
  );
}
