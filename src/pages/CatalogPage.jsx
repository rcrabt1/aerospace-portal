import { useMemo, useState } from 'react';
import { Info, Search } from 'lucide-react';
import { CATEGORIES, PLATFORMS, PARTS } from '../data/parts.js';
import CompareLens from '../components/catalog/CompareLens.jsx';

const AVAILABILITY_OPTIONS = [
  { value: 'all', label: 'All availability' },
  { value: 'in-stock', label: 'In stock' },
  { value: 'low-stock', label: 'Low stock' },
  { value: 'backordered', label: 'Backordered' },
];

export default function CatalogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [platform, setPlatform] = useState('all');
  const [availability, setAvailability] = useState('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PARTS.filter((part) => {
      if (q && !part.name.toLowerCase().includes(q) && !part.id.toLowerCase().includes(q)) {
        return false;
      }
      if (category !== 'all' && part.category !== category) return false;
      if (platform !== 'all' && part.platform !== platform) return false;
      if (availability !== 'all' && part.stock !== availability) return false;
      return true;
    });
  }, [query, category, platform, availability]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex items-start gap-2 border border-hairline bg-surface px-3 py-2 text-xs text-chrome/60">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>
          Every part number, spec, price, and order on this page is made up for this demo. None
          of it is a real product or price.
        </span>
      </div>

      <h1 className="mt-4 text-2xl font-semibold text-chrome">Parts Catalog</h1>
      <p className="mt-1 text-sm text-chrome/60">
        Search by part number or name, then filter by category, platform, or availability.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chrome/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search part number or name"
            className="w-full border border-hairline bg-white py-2.5 pl-9 pr-3 text-sm text-chrome placeholder:text-chrome/40 focus:border-accent focus:outline-none"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-hairline bg-white px-3 py-2.5 text-sm text-chrome focus:border-accent focus:outline-none"
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border border-hairline bg-white px-3 py-2.5 text-sm text-chrome focus:border-accent focus:outline-none"
        >
          <option value="all">All platforms</option>
          {PLATFORMS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border border-hairline bg-white px-3 py-2.5 text-sm text-chrome focus:border-accent focus:outline-none"
        >
          {AVAILABILITY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-chrome/40">
        {results.length} {results.length === 1 ? 'part' : 'parts'}
      </p>

      <CompareLens results={results} />
    </div>
  );
}
