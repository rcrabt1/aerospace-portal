import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import LegacyResultsGrid from './LegacyResultsGrid.jsx';
import RedesignedResultsGrid from './RedesignedResultsGrid.jsx';

export default function CompareLens({ results }) {
  const containerRef = useRef(null);
  const legacyRef = useRef(null);
  const redesignedRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const recomputeHeight = useCallback(() => {
    const legacyHeight = legacyRef.current?.scrollHeight ?? 0;
    const redesignedHeight = redesignedRef.current?.scrollHeight ?? 0;
    setMaxHeight(Math.max(legacyHeight, redesignedHeight));
  }, []);

  useLayoutEffect(() => {
    recomputeHeight();
  }, [recomputeHeight, results]);

  useEffect(() => {
    recomputeHeight();
    document.fonts?.ready?.then(recomputeHeight);

    const observer = new ResizeObserver(recomputeHeight);
    if (legacyRef.current) observer.observe(legacyRef.current);
    if (redesignedRef.current) observer.observe(redesignedRef.current);

    window.addEventListener('resize', recomputeHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', recomputeHeight);
    };
  }, [recomputeHeight, results]);

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
    setHasInteracted(true);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-chrome">Legacy vs. redesigned</h2>
      <p className="mt-1 text-sm text-chrome/60">
        Drag the handle left and right. Same search results on both sides, only the experience
        changes.
      </p>

      <div
        ref={containerRef}
        className="relative mt-4 select-none border-4 border-chrome shadow-xl"
        style={{ height: maxHeight ? `${maxHeight}px` : undefined }}
      >
        <div className="sticky top-4 z-20 h-0 overflow-visible">
          <div className="pointer-events-none flex justify-between px-4">
            <span className="rounded-full bg-gray-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
              Legacy
            </span>
            <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
              Redesigned
            </span>
          </div>
        </div>

        <div
          ref={redesignedRef}
          className="absolute inset-x-0 top-0"
          style={{ height: maxHeight ? `${maxHeight}px` : undefined }}
        >
          <RedesignedResultsGrid results={results} />
        </div>

        <div
          ref={legacyRef}
          className="absolute inset-x-0 top-0"
          style={{
            height: maxHeight ? `${maxHeight}px` : undefined,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <LegacyResultsGrid results={results} />
        </div>

        <div className="absolute inset-y-0 z-10" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 left-0 w-1 -translate-x-1/2 bg-accent shadow-[0_0_0_1px_rgba(0,0,0,0.4)]" />
          <button
            type="button"
            aria-label="Drag to compare legacy and redesigned catalog"
            onPointerDown={handlePointerDown}
            className="sticky left-0 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-col-resize touch-none items-center justify-center rounded-full border-2 border-white bg-accent shadow-2xl"
          >
            {!hasInteracted && (
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/50" />
            )}
            <MoveHorizontal className="h-6 w-6 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
