import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2, Minus, Plus, Trash2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext.jsx';

function generateConfirmationNumber() {
  const digits = Math.floor(100000 + Math.random() * 900000);
  return `Q-${digits}`;
}

export default function QuotePage() {
  const { items, removeItem, updateQuantity, clearItems } = useQuote();
  const [status, setStatus] = useState('idle');
  const [confirmationNumber, setConfirmationNumber] = useState(null);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    setStatus('submitting');
    setTimeout(() => {
      setConfirmationNumber(generateConfirmationNumber());
      setStatus('success');
      clearItems();
    }, 900);
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-good" strokeWidth={1.5} />
        <h1 className="mt-4 text-2xl font-semibold text-chrome">Quote request submitted</h1>
        <p className="mt-2 text-sm text-chrome/60">
          Confirmation number <span className="font-semibold text-chrome">{confirmationNumber}</span>
        </p>
        <p className="mt-1 text-xs text-chrome/40">
          This is a simulated submission. Nothing was saved or sent anywhere.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-chrome px-5 py-2.5 text-sm font-semibold text-white"
        >
          Back to catalog
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-sm text-chrome/60">Your quote request is empty.</p>
        <Link to="/" className="mt-4 inline-block text-sm font-medium text-accent">
          Browse the catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-2xl font-semibold text-chrome">Quote Request</h1>
      <p className="mt-1 text-sm text-chrome/60">
        Review the parts below, then submit for a formal quote.
      </p>

      <div className="mt-6 border-y border-hairline">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b border-hairline py-4 last:border-b-0"
          >
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-chrome/40">
                {item.id}
              </p>
              <h3 className="truncate text-sm font-semibold text-chrome">{item.name}</h3>
              <p className="text-sm text-chrome/60">${item.price.toLocaleString()} each</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-chrome/60"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-6 text-center text-sm text-chrome">{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-chrome/60"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <span className="w-24 shrink-0 text-right text-sm font-semibold text-chrome">
              ${(item.price * item.quantity).toLocaleString()}
            </span>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name}`}
              className="text-chrome/40 hover:text-warning"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-chrome/60">Estimated total</span>
        <span className="text-xl font-bold text-accent">${total.toLocaleString()}</span>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-chrome px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? 'Submitting...' : 'Submit Quote Request'}
      </button>
    </div>
  );
}
