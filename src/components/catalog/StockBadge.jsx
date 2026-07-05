import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

const CONFIG = {
  'in-stock': {
    label: 'In stock',
    icon: CheckCircle2,
    className: 'bg-good/10 text-good',
  },
  'low-stock': {
    label: 'Low stock',
    icon: Clock,
    className: 'bg-warning/10 text-warning',
  },
  backordered: {
    label: 'Backordered',
    icon: AlertTriangle,
    className: 'bg-warning/10 text-warning',
  },
};

export default function StockBadge({ stock, leadTimeDays }) {
  const config = CONFIG[stock];
  const Icon = config.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${config.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
      {leadTimeDays > 0 && <span className="opacity-70">· {leadTimeDays}d lead</span>}
    </span>
  );
}
