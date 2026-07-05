import StockBadge from './StockBadge.jsx';

export default function PartCard({ part }) {
  return (
    <div className="flex flex-col gap-3 border border-hairline bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-chrome/50">
            {part.id}
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-chrome">{part.name}</h3>
        </div>
        <span className="whitespace-nowrap text-sm font-semibold text-chrome">
          ${part.price.toLocaleString()}
        </span>
      </div>
      <p className="text-sm leading-snug text-chrome/60">{part.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
        <div className="flex flex-wrap gap-1.5 text-xs text-chrome/50">
          <span className="rounded-full bg-surface px-2 py-1">{part.category}</span>
          <span className="rounded-full bg-surface px-2 py-1">{part.platform}</span>
        </div>
        <StockBadge stock={part.stock} leadTimeDays={part.leadTimeDays} />
      </div>
    </div>
  );
}
