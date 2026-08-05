'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  interactive = true,
  size = 'md',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const starSizes = {
    sm: 18,
    md: 28,
    lg: 40,
  };

  const activeRating = hoverRating !== null ? hoverRating : rating;

  return (
    <div className="flex items-center gap-1.5 justify-center py-2">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          type="button"
          disabled={!interactive}
          className={`transition-all duration-200 focus:outline-none ${
            interactive ? 'cursor-pointer hover:scale-125 active:scale-110' : 'cursor-default'
          }`}
          onMouseEnter={() => interactive && setHoverRating(starIndex)}
          onMouseLeave={() => interactive && setHoverRating(null)}
          onClick={() => interactive && onRatingChange && onRatingChange(starIndex)}
        >
          <Star
            size={starSizes[size]}
            className={`${
              starIndex <= activeRating
                ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                : 'fill-slate-800 text-slate-700'
            } transition-all duration-150`}
          />
        </button>
      ))}
    </div>
  );
};
