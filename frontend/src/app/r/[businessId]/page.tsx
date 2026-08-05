"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function QRScanPage({ params }: { params: { businessId: string } }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiDraft, setAiDraft] = useState("");

  const handleGenerate = async () => {
    if (rating === 0) return;
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      setAiDraft(`I had an amazing experience at this business! The service was outstanding, and the staff was incredibly friendly and helpful. Highly recommend to anyone looking for top-notch quality.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-primary p-8 text-center text-primary-foreground">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner">
            <span className="text-3xl font-bold text-primary">B</span>
          </div>
          <h1 className="text-2xl font-bold mb-1">Business Name</h1>
          <p className="opacity-90 text-sm">We value your feedback!</p>
        </div>

        <div className="p-8">
          {!aiDraft ? (
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">How was your experience?</h2>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="focus:outline-none transition-transform hover:scale-110"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        size={40}
                        className={cn(
                          "transition-colors",
                          (hoverRating || rating) >= star
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {rating > 0 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <textarea
                    placeholder="Tell us a bit more (optional)..."
                    className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                    rows={3}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      "Generate Magic Review ✨"
                    )}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-xl font-semibold mb-4 text-center">Your AI Draft</h2>
              <div className="bg-gray-50 p-5 rounded-xl border mb-6 relative">
                <p className="text-gray-700 italic">"{aiDraft}"</p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800">
                  Copy & Open Google
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 border rounded-xl font-medium hover:bg-gray-50">Edit</button>
                  <button className="flex-1 py-3 border rounded-xl font-medium hover:bg-gray-50">Regenerate</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
