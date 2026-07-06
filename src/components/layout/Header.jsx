import { Link } from 'react-router-dom';
import { Plane, ShoppingCart } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext.jsx';

export default function Header() {
  const { itemCount } = useQuote();

  return (
    <header className="bg-chrome text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <Plane className="h-6 w-6 text-accent" strokeWidth={2} />
          <span className="text-lg font-semibold tracking-tight">
            Aerospace Parts Portal
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="text-sm text-white/60">
            Logged in as <span className="text-white/90">M. Alvarez, Procurement</span>
          </div>
          <Link to="/quote" className="relative flex items-center gap-2 text-sm font-medium">
            <ShoppingCart className="h-5 w-5" />
            Quote
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
