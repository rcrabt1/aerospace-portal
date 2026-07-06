import { Star, ShoppingCart } from 'lucide-react';
import { CATEGORY_ICONS, ratingFor } from '../../data/categoryIcons.js';
import StockBadge from './StockBadge.jsx';

export default function PartCard({ part }) {
  const Icon = CATEGORY_ICONS[part.category];
  const { stars, reviewCount } = ratingFor(part.id);
  const fullStars = Math.floor(stars);

  return (
    <div className="flex h-36 items-center gap-4 border-b border-hairline bg-white px-5">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded border border-hairline bg-surface">
        <Icon className="h-10 w-10 text-chrome/40" strokeWidth={1.5} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-chrome/40">
          {part.id} · {part.category} · {part.platform}
        </p>
        <h3 className="mt-0.5 truncate text-sm font-semibold text-chrome">{part.name}</h3>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="flex text-warning">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5"
                fill={i < fullStars ? 'currentColor' : 'none'}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-xs text-chrome/50">{reviewCount.toLocaleString()} ratings</span>
        </div>
        <p className="mt-1 line-clamp-1 text-sm text-chrome/60">{part.description}</p>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span className="whitespace-nowrap text-lg font-bold text-accent">
          ${part.price.toLocaleString()}
        </span>
        <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
        <button
          type="button"
          className="mt-0.5 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-chrome px-3 py-1.5 text-xs font-semibold text-white"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Quote
        </button>
      </div>
    </div>
  );
}
