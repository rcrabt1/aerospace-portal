function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function roundToTen(value) {
  return Math.round(value / 10) * 10;
}

export function priceEstimateFor(part) {
  const hash = hashString(part.id);
  const isRange = hash % 2 === 0;
  if (!isRange) {
    return { isRange: false, amount: part.price };
  }
  const spreadPct = 0.08 + (hash % 10) / 100;
  const low = roundToTen(part.price * (1 - spreadPct / 2));
  const high = roundToTen(part.price * (1 + spreadPct / 2));
  return { isRange: true, low, high };
}

export function formatPriceEstimate(part) {
  const estimate = priceEstimateFor(part);
  if (estimate.isRange) {
    return `Est. $${estimate.low.toLocaleString()} - $${estimate.high.toLocaleString()}`;
  }
  return `Est. $${estimate.amount.toLocaleString()}`;
}
