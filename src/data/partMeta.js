function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function ratingFor(partId) {
  const hash = hashString(partId);
  const stars = 3.5 + (hash % 15) / 10;
  const reviewCount = 40 + (hash % 900);
  return { stars: Math.min(5, Math.round(stars * 10) / 10), reviewCount };
}
