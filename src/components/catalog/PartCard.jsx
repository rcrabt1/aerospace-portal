import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ShoppingCart } from 'lucide-react';
import { imageForPart } from '../../data/categoryImages.js';
import { formatPriceEstimate, ratingFor } from '../../data/partMeta.js';
import { useQuote } from '../../context/QuoteContext.jsx';
import StockBadge from './StockBadge.jsx';

export default function PartCard({ part }) {
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);
  const image = imageForPart(part);
  const { stars, reviewCount } = ratingFor(part.id);
  const fullStars = Math.floor(stars);

  const handleAdd = () => {
    addItem(part);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col overflow-hidden border border-hairline bg-white">
      <Link to={`/parts/${part.id}`} className="aspect-[4/3] w-full overflow-hidden bg-surface">
        <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-chrome/40">
          {part.id} · {part.category} · {part.platform}
        </p>
        <Link to={`/parts/${part.id}`}>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-chrome hover:underline">
            {part.name}
          </h3>
        </Link>
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
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-bold leading-tight text-accent">
              {formatPriceEstimate(part)}
            </span>
            <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center justify-center gap-1.5 rounded-full bg-chrome px-3 py-2 text-xs font-semibold text-white"
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5" />
                Add to Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
