import { Star } from 'lucide-react';

const STOCK_LABEL = {
  'in-stock': { text: 'In Stock', className: 'text-green-600' },
  'low-stock': { text: 'Low Stock', className: 'text-yellow-600' },
  backordered: { text: 'Backordered', className: 'text-red-600' },
};

function SkeletonCard() {
  return (
    <div className="flex h-28 animate-pulse items-center gap-4 border-b border-gray-200 bg-gray-50 px-5">
      <div className="min-w-0 flex-1">
        <div className="h-2.5 w-40 rounded bg-gray-300" />
        <div className="mt-2 h-4 w-2/3 rounded bg-gray-300" />
        <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <div className="h-4 w-14 rounded bg-gray-300" />
        <div className="h-3 w-16 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function LegacyCard({ part }) {
  const stock = STOCK_LABEL[part.stock];
  return (
    <div className="flex h-28 items-center gap-4 border-b border-gray-300 bg-white px-5 shadow-sm">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase text-gray-500">
          {part.id} &bull; {part.category} &bull; {part.platform}
        </p>
        <h3 className="mt-0.5 truncate text-sm font-bold text-gray-900">{part.name}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-gray-500">{part.description}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <span className="text-sm font-bold text-gray-900">${part.price.toLocaleString()}</span>
        <p className={`text-xs font-semibold ${stock.className}`}>{stock.text}</p>
        <button type="button" disabled className="inline-flex items-center gap-1 text-xs text-gray-400">
          <Star className="h-3 w-3" />
          Favorite
        </button>
      </div>
    </div>
  );
}

export default function LegacyResultsGrid({ results }) {
  return (
    <div className="bg-gray-100">
      {results.map((part, i) =>
        i % 5 === 4 ? <SkeletonCard key={part.id} /> : <LegacyCard key={part.id} part={part} />
      )}
      {results.length === 0 && (
        <p className="flex h-28 items-center justify-center text-sm text-gray-500">
          No parts match those filters.
        </p>
      )}
    </div>
  );
}
