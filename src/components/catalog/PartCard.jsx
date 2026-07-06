import { Star, ShoppingCart } from 'lucide-react';
import { imageForPart } from '../../data/categoryImages.js';
import { ratingFor } from '../../data/partMeta.js';
import StockBadge from './StockBadge.jsx';

export default function PartCard({ part }) {
  const image = imageForPart(part);
  const { stars, reviewCount } = ratingFor(part.id);
  const fullStars = Math.floor(stars);

  return (
    <div className="flex flex-col overflow-hidden border border-hairline bg-white">
      <div className="aspect-[4/3] w-full overflow-hidden bg-surface">
        <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-chrome/40">
          {part.id} · {part.category} · {part.platform}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-chrome">
          {part.name}
        </h3>
        <div className="flex items-center gap-1.5">
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
          <span className="text-xs text-chrome/50">{reviewCount.toLocaleString()}</span>
        </div>
        <p className="line-clamp-2 text-sm text-chrome/60">{part.description}</p>

        <div className="mt-auto flex flex-col gap-2 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-accent">
              ${part.price.toLocaleString()}
            </span>
            <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 rounded-full bg-chrome px-3 py-2 text-xs font-semibold text-white"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Quote
          </button>
        </div>
      </div>
    </div>
  );
}
