import StockBadge from './StockBadge.jsx';

export default function PartCard({ part }) {
  return (
    <div className="flex h-28 items-center gap-4 border-b border-hairline bg-white px-5">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-chrome/50">
          {part.id} · {part.category} · {part.platform}
        </p>
        <h3 className="mt-0.5 truncate text-sm font-semibold text-chrome">{part.name}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-chrome/60">{part.description}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span className="whitespace-nowrap text-sm font-semibold text-chrome">
          ${part.price.toLocaleString()}
        </span>
        <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
      </div>
    </div>
  );
}
