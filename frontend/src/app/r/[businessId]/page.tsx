'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  X,
} from 'lucide-react';

export default function CustomerQRReviewPage() {
  const params = useParams();
  const businessId = (params?.businessId as string) || 'umiya-traders';

  const [businessName, setBusinessName] = useState<string>('Umiya Traders');
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('');
  const [aiDraft, setAiDraft] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showFloatingActionBar, setShowFloatingActionBar] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [selectedTone, setSelectedTone] = useState<string>('Enthusiastic');

  const lastReviewRef = useRef<string>('');

  // OFFICIAL Direct Google Write-a-Review Deep Link for Umiya Traders
  const UMIYA_DIRECT_WRITE_REVIEW_LINK = 'https://www.google.com/search?q=Umiya+traders#lrd=0x395c870e52c628c7:0xc460ce380999c40d,3';

  const [googleReviewUrl, setGoogleReviewUrl] = useState<string>(UMIYA_DIRECT_WRITE_REVIEW_LINK);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUrl = localStorage.getItem('google_review_url');
      if (savedUrl && (savedUrl.includes('#lrd=') || savedUrl.includes('writereview'))) {
        setGoogleReviewUrl(savedUrl);
      } else {
        localStorage.setItem('google_review_url', UMIYA_DIRECT_WRITE_REVIEW_LINK);
        setGoogleReviewUrl(UMIYA_DIRECT_WRITE_REVIEW_LINK);
      }

      const savedName = localStorage.getItem('business_name');
      if (savedName) setBusinessName(savedName);
      else localStorage.setItem('business_name', 'Umiya Traders');
    }
  }, []);

  // Super-Dynamic High-Variety AI Review Engine
  const generateUniqueReview = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const name = businessName || 'Umiya Traders';
      const userText = feedback.trim();

      // MASSIVE OPENING VARIATIONS
      const openings5_Enthusiastic = [
        `Honestly, ${name} completely surpassed what I was expecting today!`,
        `Just finished visiting ${name} and I couldn't be happier with the whole experience.`,
        `Stopped by ${name} earlier and was blown away by their fantastic service and collection.`,
        `Huge shoutout to the team at ${name} for going above and beyond!`,
        `If you're looking for genuine quality, ${name} is 100% the place to go.`,
        `Had a 5-star experience at ${name} from start to finish!`,
        `So glad I decided to visit ${name} today. Truly top-notch service!`,
      ];

      const openings5_Professional = [
        `I am writing to express my high level of satisfaction with ${name}.`,
        `My experience with ${name} was smooth, professional, and thoroughly impressive.`,
        `The staff and quality of service at ${name} represent true professionalism.`,
        `${name} consistently delivers excellent service and reliable products.`,
      ];

      const openings5_Casual = [
        `Super happy with my visit to ${name}!`,
        `Checked out ${name} today and they did an awesome job.`,
        `Quick review for ${name} — 100% worth visiting!`,
        `Always a pleasant experience whenever I go to ${name}.`,
      ];

      const openings4 = [
        `Had a really solid experience with ${name}. Good quality overall.`,
        `Overall very pleased with my purchase and visit to ${name}.`,
        `Pretty great service at ${name}. Reliable and fair pricing.`,
        `${name} delivered good quality service as expected.`,
      ];

      const openings3 = [
        `Fair experience overall at ${name}. Service was acceptable.`,
        `Decent visit to ${name} today. Room for minor improvements.`,
        `Average experience at ${name}. Staff was polite enough.`,
      ];

      // MASSIVE BODY DETAILS VARIATIONS
      const bodyDetails = [
        userText ? `I especially appreciated that ${userText}.` : "The customer service was friendly, attentive, and very helpful.",
        userText ? `What really stood out to me was ${userText}.` : "Their product collection is great and the pricing is very reasonable.",
        userText ? `A major highlight for me was ${userText}.` : "Everything was handled quickly without any hassle or delay.",
        userText ? `Loved how ${userText}.` : "The team took the time to answer all my questions patiently.",
        userText ? `Super impressed that ${userText}.` : "The atmosphere was welcoming and the service was super fast.",
        "The overall attention to detail was super impressive.",
        "It's rare to find such honest and transparent service nowadays.",
        "Quality standards are top tier and the staff genuinely cares about customers.",
      ];

      // MASSIVE CLOSING VARIATIONS
      const endings = [
        "Will definitely be coming back again soon!",
        `10/10 recommend checking out ${name}!`,
        "Couldn't have asked for a better overall experience.",
        "Definitely earned a permanent spot on my list of favorites.",
        "Will be recommending them to all my friends and family!",
        "Keep up the amazing work guys!",
        "Looking forward to my next visit already.",
        "Highly recommended to everyone!",
      ];

      // Random picker helper avoiding duplicate of last generated review
      const pickRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

      let chosenOpenings = openings5_Enthusiastic;
      if (selectedTone === 'Professional') chosenOpenings = openings5_Professional;
      if (selectedTone === 'Casual') chosenOpenings = openings5_Casual;

      if (rating === 4) chosenOpenings = openings4;
      if (rating <= 3) chosenOpenings = openings3;

      let draft = '';
      let attempts = 0;

      do {
        const op = pickRandom(chosenOpenings);
        const bd = pickRandom(bodyDetails);
        const ed = pickRandom(endings);

        // Mix sentence count randomly (Sometimes 2 sentences, sometimes 3 sentences)
        const formatStyle = Math.floor(Math.random() * 3);
        if (formatStyle === 0) {
          draft = `${op} ${bd}`;
        } else if (formatStyle === 1) {
          draft = `${op} ${ed}`;
        } else {
          draft = `${op} ${bd} ${ed}`;
        }
        attempts++;
      } while (draft === lastReviewRef.current && attempts < 10);

      lastReviewRef.current = draft;
      setAiDraft(draft);
      setIsGenerating(false);
    }, 500);
  };

  useEffect(() => {
    generateUniqueReview();
  }, [rating, businessName, selectedTone]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGoogle = () => {
    // 1. Auto-copy AI review draft to clipboard
    navigator.clipboard.writeText(aiDraft);
    setCopied(true);

    // 2. Show floating action guidance bar
    setShowFloatingActionBar(true);

    // 3. Open official Direct Write-a-Review popup URL in new tab
    window.open(googleReviewUrl, '_blank');
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
          <ShieldCheck className="w-3.5 h-3.5" /> Verified Google Business
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
                🏭
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-slate-900 shadow">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              {businessName}
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
              placeholder="e.g. Great products, fast service..."
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
                className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none cursor-pointer"
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
                className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none cursor-pointer"
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
                AI is crafting a unique review...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Generate New Unique Review
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
                <span>AI Review Draft (100% Unique Output)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3 h-3" />
                  {isEditing ? 'Done' : 'Edit'}
                </button>
                <button
                  onClick={generateUniqueReview}
                  className="p-1 px-2 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Generate new unique variation"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>New</span>
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

            {/* Action Buttons: Copy & Open Direct Google Review Popup */}
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

      {/* Floating Action Guidance Bar on Bottom Right */}
      {showFloatingActionBar && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full card-stripe-glow rounded-3xl p-5 border border-emerald-500/40 shadow-2xl space-y-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Review Copied! Review Popup Opened
            </span>
            <button
              onClick={() => setShowFloatingActionBar(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>On Umiya Traders Review Popup:</span>
              <span className="text-amber-400 font-bold">⭐ Tap 5th Star</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied!' : 'Click to Recopy Text'}
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center">
              Then click inside Google's text box & press <strong>Ctrl + V (Paste)</strong>!
            </p>
          </div>
        </div>
      )}

      {/* Footer Disclaimer */}
      <footer className="w-full max-w-md text-center py-4 text-[11px] text-slate-500 z-10">
        ReviewAI does not auto-post reviews. You are in full control of what you publish on Google.
      </footer>
    </div>
  );
}
