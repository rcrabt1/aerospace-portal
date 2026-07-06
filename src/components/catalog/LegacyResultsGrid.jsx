import { ArrowBigUp, ArrowBigDown, ImageOff, MessageSquare } from 'lucide-react';
import { votesFor } from '../../data/categoryIcons.js';

const STOCK_LABEL = {
  'in-stock': 'in stock',
  'low-stock': 'low stock',
  backordered: 'backordered',
};

const REDDIT_FONT = { fontFamily: 'Verdana, Geneva, Arial, sans-serif' };

function subreddit(category) {
  return 'r/' + category.replace(/\s+/g, '');
}

function RedditRow({ part, index }) {
  const votes = votesFor(part.id);
  const stockText = STOCK_LABEL[part.stock];
  return (
    <div
      className={`flex h-36 items-center gap-3 border-b border-[#ccc] px-3 ${
        index % 2 === 0 ? 'bg-white' : 'bg-[#f6f7f8]'
      }`}
      style={REDDIT_FONT}
    >
      <div className="flex shrink-0 flex-col items-center gap-0.5 text-[#9494a3]">
        <ArrowBigUp className="h-5 w-5 fill-[#ff4500] text-[#ff4500]" />
        <span className="text-xs font-bold text-[#1a1a1b]">{votes}</span>
        <ArrowBigDown className="h-5 w-5" />
      </div>

      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-0.5 border border-dashed border-[#ccc] bg-[#f0f0f0]">
        <ImageOff className="h-5 w-5 text-[#9494a3]" strokeWidth={1.5} />
        <span className="text-[9px] text-[#9494a3]">no thumb</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-medium text-[#0079d3]">{part.name}</h3>
        <p className="mt-1 truncate text-xs text-[#787c7e]">
          submitted to {subreddit(part.category)} &middot; {part.platform} &middot; {part.id}
        </p>
        <p className="mt-1 line-clamp-1 text-xs text-[#1a1a1b]/70">{part.description}</p>
        <div className="mt-1.5 flex items-center gap-3 text-xs text-[#787c7e]">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            {Math.max(1, votes % 40)} comments
          </span>
          <span>share</span>
          <span>save</span>
          <span className="text-[#787c7e]">
            ${part.price.toLocaleString()} &middot; {stockText}
            {part.leadTimeDays > 0 ? ` · ${part.leadTimeDays}d` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LegacyResultsGrid({ results }) {
  return (
    <div className="bg-[#dae0e6]">
      {results.map((part, i) => (
        <RedditRow key={part.id} part={part} index={i} />
      ))}
      {results.length === 0 && (
        <p
          className="flex h-36 items-center justify-center text-sm text-[#787c7e]"
          style={REDDIT_FONT}
        >
          no posts match those filters.
        </p>
      )}
    </div>
  );
}
