import PartCard from './PartCard.jsx';

export default function RedesignedResultsGrid({ results }) {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {results.map((part) => (
          <PartCard key={part.id} part={part} />
        ))}
      </div>
      {results.length === 0 && (
        <p className="flex h-36 items-center justify-center text-sm text-chrome/50">
          No parts match those filters.
        </p>
      )}
    </div>
  );
}
