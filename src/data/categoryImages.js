import avionics1 from '../assets/parts/avionics-1.webp';
import avionics2 from '../assets/parts/avionics-2.webp';
import hydraulics1 from '../assets/parts/hydraulics-1.webp';
import hydraulics2 from '../assets/parts/hydraulics-2.webp';
import hydraulics3 from '../assets/parts/hydraulics-3.webp';
import landingGear1 from '../assets/parts/landing-gear-1.webp';
import landingGear2 from '../assets/parts/landing-gear-2.webp';
import landingGear3 from '../assets/parts/landing-gear-3.webp';
import engine1 from '../assets/parts/engine-1.webp';
import engine2 from '../assets/parts/engine-2.webp';
import engine3 from '../assets/parts/engine-3.webp';
import cabin1 from '../assets/parts/cabin-1.webp';
import cabin2 from '../assets/parts/cabin-2.webp';
import electrical1 from '../assets/parts/electrical-1.webp';
import electrical2 from '../assets/parts/electrical-2.webp';
import flightControls1 from '../assets/parts/flight-controls-1.webp';
import flightControls2 from '../assets/parts/flight-controls-2.webp';
import fuel1 from '../assets/parts/fuel-1.webp';
import fuel2 from '../assets/parts/fuel-2.webp';

const CATEGORY_IMAGE_POOLS = {
  Avionics: [avionics1, avionics2],
  Hydraulics: [hydraulics1, hydraulics2, hydraulics3],
  'Landing Gear': [landingGear1, landingGear2, landingGear3],
  'Engine Components': [engine1, engine2, engine3],
  'Cabin Interiors': [cabin1, cabin2],
  'Electrical Systems': [electrical1, electrical2],
  'Flight Controls': [flightControls1, flightControls2],
  'Fuel Systems': [fuel1, fuel2],
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function imageForPart(part) {
  const pool = CATEGORY_IMAGE_POOLS[part.category];
  const index = hashString(part.id) % pool.length;
  return pool[index];
}
