import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuote } from '../../context/QuoteContext.jsx';
import { priceEstimateFor } from '../../data/partMeta.js';

const EBAY_FONT = { fontFamily: 'Arial, Helvetica, sans-serif' };

const CONDITION_TEXT = {
  'in-stock': { text: 'In stock - more than 10 available', className: 'text-[#333333]' },
  'low-stock': { text: 'Only 2 left - order soon', className: 'font-bold text-[#cc0000]' },
  backordered: { text: 'Currently unavailable', className: 'italic text-[#767676]' },
};

const beveled = {
  background: '#e0e0e0',
  boxShadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #888888',
};

function ListingRow({ part, index }) {
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);
  const stock = CONDITION_TEXT[part.stock];
  const estimate = priceEstimateFor(part);

  const handleBuy = () => {
    addItem(part);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className={`flex gap-3 border-b border-[#b0b0b0] px-3 py-3 ${
        index % 2 === 0 ? 'bg-white' : 'bg-[#ececec]'
      }`}
      style={EBAY_FONT}
    >
      <div className="min-w-0 flex-1">
        <Link to={`/parts/${part.id}`}>
          <h3 className="truncate text-[15px] font-normal text-[#0053a0] underline">
            {part.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-[#767676]">
          Condition: New &nbsp;|&nbsp; Category: {part.category} &nbsp;|&nbsp; Fits: {part.platform}
        </p>
        <p className="mt-0.5 text-xs text-[#767676]">Item #: {part.id}</p>
        <p className={`mt-1 text-xs ${stock.className}`}>{stock.text}</p>
      </div>

      <div className="flex w-40 shrink-0 flex-col items-end gap-1 text-right">
        <p className="text-[10px] text-[#767676]">Est. price:</p>
        {estimate.isRange ? (
          <p className="text-sm font-bold leading-tight text-[#333333]">
            ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
          </p>
        ) : (
          <p className="text-base font-bold text-[#333333]">${estimate.amount.toLocaleString()}</p>
        )}
        <p className="text-[11px] italic text-[#767676]">or Best Offer</p>
        {part.leadTimeDays > 0 && (
          <p className="text-[11px] text-[#767676]">+ {part.leadTimeDays}d handling</p>
        )}
        <button
          type="button"
          onClick={handleBuy}
          className="mt-1 px-3 py-1 text-xs font-bold text-[#333333]"
          style={beveled}
        >
          {added ? 'Added!' : 'Buy It Now'}
        </button>
      </div>
    </div>
  );
}

export default function LegacyResultsGrid({ results }) {
  return (
    <div className="min-h-full bg-[#d6d6d6]">
      <div
        className="border-b border-[#999999] bg-[#e8e8e8] px-3 py-2 text-xs text-[#767676]"
        style={EBAY_FONT}
      >
        {results.length} results
      </div>
      {results.map((part, i) => (
        <ListingRow key={part.id} part={part} index={i} />
      ))}
      {results.length === 0 && (
        <p
          className="flex h-24 items-center justify-center text-sm text-[#767676]"
          style={EBAY_FONT}
        >
          Your search returned no listings.
        </p>
      )}
    </div>
  );
}
