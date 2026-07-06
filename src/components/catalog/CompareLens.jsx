import { useCallback, useEffect, useRef, useState } from 'react';
import { GripVertical } from 'lucide-react';
import LegacyResultsGrid from './LegacyResultsGrid.jsx';
import RedesignedResultsGrid from './RedesignedResultsGrid.jsx';

export default function CompareLens({ results }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!isDragging) return undefined;

    const handleMove = (e) => updatePosition(e.clientX);
    const handleUp = () => setIsDragging(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, [isDragging, updatePosition]);

  const handlePointerDown = (e) => {
    updatePosition(e.clientX);
    setIsDragging(true);
  };

  return (
    <div>
      <div className="flex items-center gap-2 px-1 pt-4 text-xs text-chrome/50">
        <GripVertical className="h-3.5 w-3.5" />
        Drag the divider to compare the legacy portal against the redesign.
      </div>
      <div
        ref={containerRef}
        className="relative mt-3 select-none border-y border-hairline"
      >
        <div className="absolute left-3 top-3 z-20 rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
          Legacy
        </div>
        <div className="absolute right-3 top-3 z-20 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
          Redesigned
        </div>

        <RedesignedResultsGrid results={results} />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <LegacyResultsGrid results={results} />
        </div>

        <div
          className="absolute inset-y-0 z-10 flex w-0 justify-center"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-0.5 bg-chrome" />
          <button
            type="button"
            aria-label="Drag to compare legacy and redesigned catalog"
            onPointerDown={handlePointerDown}
            className="sticky top-1/2 flex h-9 w-9 shrink-0 -translate-x-1/2 -translate-y-1/2 cursor-col-resize touch-none items-center justify-center rounded-full border border-hairline bg-white shadow-md"
          >
            <GripVertical className="h-4 w-4 text-chrome/60" />
          </button>
        </div>
      </div>
    </div>
  );
}
