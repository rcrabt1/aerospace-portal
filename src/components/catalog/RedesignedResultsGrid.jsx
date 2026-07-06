import PartCard from './PartCard.jsx';

export default function RedesignedResultsGrid({ results }) {
  return (
    <div className="bg-white">
      {results.map((part) => (
        <PartCard key={part.id} part={part} />
      ))}
      {results.length === 0 && (
        <p className="flex h-28 items-center justify-center text-sm text-chrome/50">
          No parts match those filters.
        </p>
      )}
    </div>
  );
}
