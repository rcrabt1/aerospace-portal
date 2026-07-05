export const CATEGORIES = [
  'Avionics',
  'Hydraulics',
  'Landing Gear',
  'Engine Components',
  'Cabin Interiors',
  'Electrical Systems',
  'Flight Controls',
  'Fuel Systems',
];

export const PLATFORMS = [
  'Boeing 737',
  'Boeing 777',
  'Airbus A320',
  'Airbus A350',
  'Embraer E190',
  'Bombardier CRJ700',
  'Gulfstream G650',
];

export const STOCK_STATUSES = ['in-stock', 'low-stock', 'backordered'];

export const PARTS = [
  { id: 'COL-AV-10234', name: 'Flight Management Computer Module', category: 'Avionics', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 18450, description: 'Dual-channel FMS module with GPS/WAAS integration, drop-in replacement for legacy units.' },
  { id: 'COL-AV-10891', name: 'Weather Radar Transceiver', category: 'Avionics', platform: 'Boeing 777', stock: 'in-stock', leadTimeDays: 0, price: 32100, description: 'X-band solid-state radar transceiver with predictive windshear detection.' },
  { id: 'COL-AV-11207', name: 'VHF Communication Radio', category: 'Avionics', platform: 'Airbus A320', stock: 'low-stock', leadTimeDays: 21, price: 6800, description: '8.33 kHz channel spacing, ARINC 750-compliant digital VHF transceiver.' },
  { id: 'COL-AV-11455', name: 'ADS-B Transponder', category: 'Avionics', platform: 'Embraer E190', stock: 'in-stock', leadTimeDays: 0, price: 9250, description: 'Mode S transponder with ADS-B Out, DO-260B compliant.' },
  { id: 'COL-AV-11902', name: 'Standby Attitude Indicator', category: 'Avionics', platform: 'Bombardier CRJ700', stock: 'backordered', leadTimeDays: 60, price: 4300, description: 'Self-contained battery-backed standby instrument, RVSM certified.' },
  { id: 'COL-AV-12310', name: 'Terrain Awareness Computer', category: 'Avionics', platform: 'Gulfstream G650', stock: 'in-stock', leadTimeDays: 0, price: 27600, description: 'TAWS Class A computer with forward-looking terrain alerting.' },

  { id: 'COL-HY-20114', name: 'Hydraulic Actuator Assembly', category: 'Hydraulics', platform: 'Airbus A350', stock: 'backordered', leadTimeDays: 120, price: 41800, description: 'Primary flight control actuator, 3000 psi rated, includes integral position sensor. Long-lead item, limited global supply.' },
  { id: 'COL-HY-20330', name: 'Hydraulic Pump, Engine-Driven', category: 'Hydraulics', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 15200, description: 'Variable displacement piston pump, 37 gpm rated flow.' },
  { id: 'COL-HY-20567', name: 'Landing Gear Selector Valve', category: 'Hydraulics', platform: 'Boeing 777', stock: 'in-stock', leadTimeDays: 0, price: 5400, description: 'Electro-hydraulic selector valve with manual override.' },
  { id: 'COL-HY-20812', name: 'Brake Hydraulic Accumulator', category: 'Hydraulics', platform: 'Airbus A320', stock: 'low-stock', leadTimeDays: 18, price: 3900, description: 'Piston-type accumulator, nitrogen precharge, for autobrake system.' },
  { id: 'COL-HY-21044', name: 'Reservoir Assembly, Hydraulic', category: 'Hydraulics', platform: 'Embraer E190', stock: 'in-stock', leadTimeDays: 0, price: 2750, description: 'Pressurized reservoir with quantity transmitter and low-level switch.' },

  { id: 'COL-LG-30021', name: 'Main Landing Gear Shock Strut', category: 'Landing Gear', platform: 'Boeing 737', stock: 'backordered', leadTimeDays: 90, price: 68500, description: 'Overhauled oleo-pneumatic shock strut assembly, full FAA 8130-3 documentation.' },
  { id: 'COL-LG-30244', name: 'Nose Wheel Steering Actuator', category: 'Landing Gear', platform: 'Airbus A320', stock: 'in-stock', leadTimeDays: 0, price: 22300, description: 'Dual-tandem steering actuator with feedback potentiometer.' },
  { id: 'COL-LG-30489', name: 'Brake Assembly, Carbon', category: 'Landing Gear', platform: 'Boeing 777', stock: 'low-stock', leadTimeDays: 30, price: 51200, description: 'Multi-disc carbon brake, reduced weight vs. steel equivalent, extended service life.' },
  { id: 'COL-LG-30703', name: 'Tire, Radial', category: 'Landing Gear', platform: 'Gulfstream G650', stock: 'in-stock', leadTimeDays: 0, price: 3100, description: 'Radial main gear tire, 18-ply rating.' },
  { id: 'COL-LG-30955', name: 'Gear Uplock Actuator', category: 'Landing Gear', platform: 'Bombardier CRJ700', stock: 'in-stock', leadTimeDays: 0, price: 8900, description: 'Electromechanical uplock actuator with position indication.' },

  { id: 'COL-EN-40118', name: 'Fuel Nozzle Assembly', category: 'Engine Components', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 4200, description: 'Air-blast fuel nozzle, overhauled to OEM spec.' },
  { id: 'COL-EN-40362', name: 'High-Pressure Turbine Blade Set', category: 'Engine Components', platform: 'Airbus A350', stock: 'backordered', leadTimeDays: 150, price: 94500, description: 'Single-crystal HPT blade set, thermal barrier coating. Extended lead time due to casting demand.' },
  { id: 'COL-EN-40590', name: 'Bleed Air Valve', category: 'Engine Components', platform: 'Boeing 777', stock: 'in-stock', leadTimeDays: 0, price: 7650, description: 'Pneumatically actuated bleed valve with position feedback.' },
  { id: 'COL-EN-40811', name: 'Ignition Exciter Unit', category: 'Engine Components', platform: 'Embraer E190', stock: 'low-stock', leadTimeDays: 25, price: 6100, description: 'High-energy capacitor discharge ignition exciter.' },
  { id: 'COL-EN-41034', name: 'Engine Fire Detection Loop', category: 'Engine Components', platform: 'Gulfstream G650', stock: 'in-stock', leadTimeDays: 0, price: 3400, description: 'Continuous-loop fire detection sensor, dual-loop redundancy.' },

  { id: 'COL-CI-50127', name: 'Overhead Bin Assembly', category: 'Cabin Interiors', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 5900, description: 'Pivoting overhead stowage bin, lightweight composite construction.' },
  { id: 'COL-CI-50345', name: 'Passenger Service Unit', category: 'Cabin Interiors', platform: 'Airbus A320', stock: 'in-stock', leadTimeDays: 0, price: 2100, description: 'Integrated PSU with reading light, air vent, and call button.' },
  { id: 'COL-CI-50589', name: 'Galley Chiller Unit', category: 'Cabin Interiors', platform: 'Boeing 777', stock: 'low-stock', leadTimeDays: 14, price: 12800, description: 'Vapor-cycle galley chiller, forced-air cooling.' },
  { id: 'COL-CI-50802', name: 'Lavatory Vacuum Generator', category: 'Cabin Interiors', platform: 'Embraer E190', stock: 'in-stock', leadTimeDays: 0, price: 4600, description: 'Vacuum motor assembly for lavatory waste system.' },
  { id: 'COL-CI-51023', name: 'Cabin Attendant Seat', category: 'Cabin Interiors', platform: 'Bombardier CRJ700', stock: 'in-stock', leadTimeDays: 0, price: 3300, description: 'Fold-down jumpseat with integrated harness and life vest stowage.' },

  { id: 'COL-ES-60119', name: 'Generator Control Unit', category: 'Electrical Systems', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 8750, description: 'Regulates generator voltage and frequency, includes protection logic.' },
  { id: 'COL-ES-60346', name: 'Battery Charger Unit', category: 'Electrical Systems', platform: 'Airbus A320', stock: 'in-stock', leadTimeDays: 0, price: 3950, description: 'Nickel-cadmium battery charger with temperature compensation.' },
  { id: 'COL-ES-60578', name: 'External Power Contactor', category: 'Electrical Systems', platform: 'Boeing 777', stock: 'backordered', leadTimeDays: 45, price: 2600, description: 'High-current contactor for ground power interface.' },
  { id: 'COL-ES-60801', name: 'Static Inverter', category: 'Electrical Systems', platform: 'Gulfstream G650', stock: 'in-stock', leadTimeDays: 0, price: 11400, description: 'Solid-state inverter, 400 Hz AC output from DC bus.' },
  { id: 'COL-ES-61024', name: 'Circuit Breaker Panel', category: 'Electrical Systems', platform: 'Embraer E190', stock: 'low-stock', leadTimeDays: 20, price: 6200, description: 'Modular breaker panel, thermal and magnetic trip elements.' },

  { id: 'COL-FC-70132', name: 'Aileron Trim Actuator', category: 'Flight Controls', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 9800, description: 'Electromechanical trim actuator with dual position sensors.' },
  { id: 'COL-FC-70367', name: 'Rudder Pedal Assembly', category: 'Flight Controls', platform: 'Airbus A320', stock: 'in-stock', leadTimeDays: 0, price: 4100, description: 'Adjustable rudder pedal assembly with toe brake linkage.' },
  { id: 'COL-FC-70589', name: 'Spoiler Actuator', category: 'Flight Controls', platform: 'Boeing 777', stock: 'low-stock', leadTimeDays: 28, price: 19700, description: 'Hydraulic spoiler actuator with electronic control valve.' },
  { id: 'COL-FC-70804', name: 'Elevator Feel Computer', category: 'Flight Controls', platform: 'Airbus A350', stock: 'in-stock', leadTimeDays: 0, price: 14300, description: 'Artificial feel computer for elevator control feedback.' },
  { id: 'COL-FC-71028', name: 'Yaw Damper Actuator', category: 'Flight Controls', platform: 'Bombardier CRJ700', stock: 'in-stock', leadTimeDays: 0, price: 7200, description: 'Series servo actuator for yaw damper system.' },

  { id: 'COL-FS-80145', name: 'Fuel Quantity Indicator', category: 'Fuel Systems', platform: 'Boeing 737', stock: 'in-stock', leadTimeDays: 0, price: 5200, description: 'Digital fuel quantity indicating system processor unit.' },
  { id: 'COL-FS-80378', name: 'Fuel Boost Pump', category: 'Fuel Systems', platform: 'Airbus A320', stock: 'backordered', leadTimeDays: 40, price: 8600, description: 'Centrifugal boost pump, submerged tank-mounted configuration.' },
  { id: 'COL-FS-80592', name: 'Fuel-Oil Heat Exchanger', category: 'Fuel Systems', platform: 'Boeing 777', stock: 'in-stock', leadTimeDays: 0, price: 6900, description: 'Shell-and-tube heat exchanger, cools engine oil using fuel flow.' },
  { id: 'COL-FS-80815', name: 'Fuel Shutoff Valve', category: 'Fuel Systems', platform: 'Gulfstream G650', stock: 'in-stock', leadTimeDays: 0, price: 4750, description: 'Motor-operated fuel shutoff valve with position indication.' },
  { id: 'COL-FS-81037', name: 'Fuel Filter Housing', category: 'Fuel Systems', platform: 'Embraer E190', stock: 'low-stock', leadTimeDays: 15, price: 1950, description: 'Fuel filter housing with differential pressure indicator.' },
];
