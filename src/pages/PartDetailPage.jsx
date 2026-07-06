import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { PARTS } from '../data/parts.js';
import { imageForPart } from '../data/categoryImages.js';
import { formatPriceEstimate } from '../data/partMeta.js';
import StockBadge from '../components/catalog/StockBadge.jsx';
import { useQuote } from '../context/QuoteContext.jsx';

export default function PartDetailPage() {
  const { id } = useParams();
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);
  const part = PARTS.find((p) => p.id === id);

  if (!part) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sm text-chrome/60">No part found for item number {id}.</p>
        <Link to="/" className="mt-4 inline-block text-sm font-medium text-accent">
          Back to catalog
        </Link>
      </div>
    );
  }

  const image = imageForPart(part);

  const handleAdd = () => {
    addItem(part);
    setAdded(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-chrome/60 hover:text-chrome">
        <ArrowLeft className="h-4 w-4" />
        Back to catalog
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="aspect-[4/3] w-full overflow-hidden border border-hairline bg-surface">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-chrome/40">
            {part.id} · {part.category}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-chrome">{part.name}</h1>

          <p className="mt-3 text-sm leading-relaxed text-chrome/70">{part.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-hairline py-4 text-sm">
            <dt className="text-chrome/50">Compatible platform</dt>
            <dd className="text-chrome">{part.platform}</dd>
            <dt className="text-chrome/50">Category</dt>
            <dd className="text-chrome">{part.category}</dd>
            <dt className="text-chrome/50">Item number</dt>
            <dd className="text-chrome">{part.id}</dd>
            <dt className="text-chrome/50">Lead time</dt>
            <dd className="text-chrome">
              {part.leadTimeDays > 0 ? `${part.leadTimeDays} business days` : 'Ships same day'}
            </dd>
          </dl>

          <div className="mt-6 flex flex-col gap-3">
            <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
            <div>
              <p className="text-xs text-chrome/50">Estimated price</p>
              <span className="text-2xl font-bold leading-tight text-accent">
                {formatPriceEstimate(part)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-chrome px-4 py-3 text-sm font-semibold text-white"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Quote
          </button>

          {added && (
            <p className="mt-3 text-center text-sm text-good">
              Added to your quote.{' '}
              <Link to="/quote" className="font-medium underline">
                View quote
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
