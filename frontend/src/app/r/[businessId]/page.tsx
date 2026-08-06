'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  Star,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Edit3,
  ExternalLink,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export default function CustomerQRReviewPage() {
  const params = useParams();
  const businessId = (params?.businessId as string) || 'demo-business';

  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('');
  const [aiDraft, setAiDraft] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [selectedTone, setSelectedTone] = useState<string>('Enthusiastic');

  // Variety Generator following expert rules
  const generateUniqueReview = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const openings5 = [
        "Stopped by Aroma Roastery today and was thoroughly impressed.",
        "Honestly, Aroma Roastery exceeded what I was expecting.",
        "Just left Aroma Roastery and felt compelled to leave a quick review.",
        "I've been hearing great things about Aroma Roastery and finally gave them a try.",
        "Can't say enough good things about my visit to Aroma Roastery today.",
      ];

      const openings4 = [
        "Had a really solid experience at Aroma Roastery.",
        "Overall very pleased with my visit to Aroma Roastery.",
        "Consistently good service and quality at Aroma Roastery.",
      ];

      const openings3 = [
        "Fair experience overall at Aroma Roastery.",
        "Decent visit to Aroma Roastery today.",
      ];

      const details = [
        feedback ? `Loved that ${feedback}. Everything was handled with great care and attention.` : "The atmosphere was welcoming and the team was genuinely attentive throughout.",
        feedback ? `Highlight of the visit was definitely ${feedback}.` : "The quality stood out immediately and the staff made sure every detail was taken care of.",
        feedback ? `Really appreciated how ${feedback}.` : "Fast, friendly, and consistently top quality from start to finish.",
      ];

      const endings = [
        "Will definitely be returning again soon!",
        "10/10 recommend checking them out if you haven't already.",
        "Couldn't have asked for a better overall experience.",
        "Definitely earned a permanent spot on my list of favorites.",
      ];

      let draft = '';
      if (rating === 5) {
        draft = `${openings5[Math.floor(Math.random() * openings5.length)]} ${details[Math.floor(Math.random() * details.length)]} ${endings[Math.floor(Math.random() * endings.length)]}`;
      } else if (rating === 4) {
        draft = `${openings4[Math.floor(Math.random() * openings4.length)]} ${details[Math.floor(Math.random() * details.length)]} Will be back again!`;
      } else {
        draft = `${openings3[Math.floor(Math.random() * openings3.length)]} ${feedback ? feedback : 'Staff was polite.'} Hoping for an even better visit next time.`;
      }

      setAiDraft(draft);
      setIsGenerating(false);
    }, 600);
  };

  useEffect(() => {
    generateUniqueReview();
  }, [rating]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGoogle = () => {
    navigator.clipboard.writeText(aiDraft);
    window.open('https://maps.google.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col items-center justify-between p-4 sm:p-6 relative overflow-hidden font-['Inter',sans-serif]">
      {/* Background Ambient Glow */}
      <div className="glow-mesh-blue top-0 -left-20 opacity-40" />
      <div className="glow-mesh-indigo bottom-0 -right-20 opacity-40" />

      {/* Header */}
      <header className="w-full max-w-md flex items-center justify-between py-2 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold tracking-wide text-slate-200">ReviewAI</span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> Official Review Assistant
        </span>
      </header>

      {/* Main Glass Card */}
      <main className="w-full max-w-md my-auto z-10 space-y-5">
        {/* Business Hero Card */}
        <div className="card-stripe rounded-3xl p-6 text-center relative overflow-hidden space-y-4 border border-slate-800 shadow-2xl">
          {/* Logo Avatar */}
          <div className="relative mx-auto w-20 h-20">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-xl shadow-indigo-500/20">
              <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-white">
                ☕
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-slate-900 shadow">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Aroma Roastery & Cafe
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Your feedback takes only 10 seconds & helps us grow!
            </p>
          </div>

          {/* Interactive Star Rating Selector */}
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Tap to Rate Your Visit
            </p>
            <div className="flex justify-center items-center gap-2 bg-slate-950/60 py-3 px-4 rounded-2xl border border-slate-800">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  type="button"
                  className="transition-all duration-200 hover:scale-125 focus:outline-none cursor-pointer"
                >
                  <Star
                    size={34}
                    className={`${
                      star <= rating
                        ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                        : 'fill-slate-800 text-slate-700'
                    } transition-all`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Optional Short Feedback Textarea */}
          <div className="space-y-1 text-left pt-1">
            <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
              <span>Optional Comment / Highlights</span>
              <span className="text-[10px] text-slate-500">helps AI customize your review</span>
            </label>
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="e.g. Great cappuccino, friendly barista..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          {/* Tone & Language Toggles */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-500">Tone:</span>
              <select
                value={selectedTone}
                onChange={(e) => setSelectedTone(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none"
              >
                <option value="Enthusiastic">Enthusiastic</option>
                <option value="Professional">Professional</option>
                <option value="Casual">Casual</option>
                <option value="Detailed">Detailed</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-500">Language:</span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Generate AI Review Button */}
          <button
            onClick={generateUniqueReview}
            disabled={isGenerating}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer btn-glow"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                AI is crafting your unique review...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Generate AI Review Draft
              </span>
            )}
          </button>
        </div>

        {/* Generated AI Review Container */}
        {aiDraft && (
          <div className="card-stripe-glow rounded-3xl p-5 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Review Draft (Unique Every Time)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3 h-3" />
                  {isEditing ? 'Done' : 'Edit'}
                </button>
                <button
                  onClick={generateUniqueReview}
                  className="p-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Regenerate unique version"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Review Draft Editable Text */}
            {isEditing ? (
              <textarea
                value={aiDraft}
                onChange={(e) => setAiDraft(e.target.value)}
                rows={4}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <p className="text-xs text-slate-200 leading-relaxed italic bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                "{aiDraft}"
              </p>
            )}

            {/* Action Buttons: Copy & Open Google Review */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700/80 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy Review'}
              </button>

              <button
                onClick={handleOpenGoogle}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Post on Google <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer Disclaimer */}
      <footer className="w-full max-w-md text-center py-4 text-[11px] text-slate-500 z-10">
        ReviewAI does not auto-post reviews. You are in full control of what you publish on Google.
      </footer>
    </div>
  );
}
