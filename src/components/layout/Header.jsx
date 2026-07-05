import { Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-chrome text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Plane className="h-6 w-6 text-accent" strokeWidth={2} />
          <span className="text-lg font-semibold tracking-tight">
            Aerospace Parts Portal
          </span>
        </div>
        <div className="text-sm text-white/60">
          Logged in as <span className="text-white/90">M. Alvarez, Procurement</span>
        </div>
      </div>
    </header>
  );
}
