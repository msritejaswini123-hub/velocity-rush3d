// VELOCITY RUSH 3D - Game Constants & Configurations

export const LANES = [-6, -2, 2, 6]; // 4-lane highway X coordinates
export const LANE_WIDTH = 4.0;
export const ROAD_WIDTH = 18.0;
export const SHOULDER_WIDTH = 4.0;
export const TOTAL_ROAD_WIDTH = ROAD_WIDTH + SHOULDER_WIDTH * 2;

export const ROAD_SEGMENT_LENGTH = 60.0;
export const TOTAL_ROAD_SEGMENTS = 16; // Gives ~960m visible highway
export const DESPAWN_DISTANCE_BEHIND = 70.0;

export const GAME_MODES = {
  ENDLESS: 'endless',
  TIME_TRIAL: 'time_trial',
  TRAFFIC_CHALLENGE: 'traffic_challenge'
};

export const GAME_STATES = {
  MENU: 'menu',
  GARAGE: 'garage',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'game_over'
};

export const CAMERA_MODES = {
  CHASE: 'chase',
  CLOSE: 'close',
  HOOD: 'hood'
};

export const VEHICLE_CONFIGS = [
  {
    id: 'phantom_gt',
    name: 'Phantom GT',
    tier: 'Class C - Sports',
    description: 'Balanced aerodynamics and reliable handling. The perfect highway starter.',
    price: 0,
    unlocked: true,
    color: '#00f0ff',
    stats: {
      topSpeed: 180, // km/h
      acceleration: 65,
      handling: 70,
      braking: 60,
      armor: 75
    },
    dimensions: { width: 1.85, height: 1.25, length: 4.2 },
    bodyStyle: 'sports'
  },
  {
    id: 'apex_turbo',
    name: 'Apex Turbo',
    tier: 'Class B - Track Special',
    description: 'High-revving twin turbo with rapid throttle response and sharp cornering.',
    price: 3500,
    unlocked: false,
    color: '#ff5500',
    stats: {
      topSpeed: 215,
      acceleration: 82,
      handling: 85,
      braking: 75,
      armor: 65
    },
    dimensions: { width: 1.9, height: 1.2, length: 4.3 },
    bodyStyle: 'coupe'
  },
  {
    id: 'venom_rs',
    name: 'Venom RS',
    tier: 'Class A - Supercar',
    description: 'V10 monster designed for extreme straight-line velocity and highway dominance.',
    price: 8000,
    unlocked: false,
    color: '#e60050',
    stats: {
      topSpeed: 250,
      acceleration: 90,
      handling: 80,
      braking: 85,
      armor: 60
    },
    dimensions: { width: 1.98, height: 1.15, length: 4.5 },
    bodyStyle: 'supercar'
  },
  {
    id: 'thunder_truck',
    name: 'Thunder Truck',
    tier: 'Class Heavy - Muscle Rig',
    description: 'Reinforced steel chassis that shrugs off collisions with ease.',
    price: 12000,
    unlocked: false,
    color: '#ffbb00',
    stats: {
      topSpeed: 195,
      acceleration: 70,
      handling: 55,
      braking: 70,
      armor: 100
    },
    dimensions: { width: 2.1, height: 1.6, length: 4.8 },
    bodyStyle: 'truck'
  },
  {
    id: 'cyber_vortex',
    name: 'Cyber Vortex',
    tier: 'Class S - Prototype',
    description: 'Next-gen experimental hypercar equipped with electromagnetic boost thrust.',
    price: 25000,
    unlocked: false,
    color: '#9900ff',
    stats: {
      topSpeed: 290,
      acceleration: 98,
      handling: 95,
      braking: 92,
      armor: 85
    },
    dimensions: { width: 2.05, height: 1.1, length: 4.6 },
    bodyStyle: 'hypercar'
  }
];

export const TRAFFIC_TYPES = [
  {
    type: 'sedan',
    name: 'City Sedan',
    colorList: ['#2c3e50', '#7f8c8d', '#bdc3c7', '#34495e', '#16a085'],
    dimensions: { width: 1.8, height: 1.3, length: 4.1 },
    speedRange: [75, 105],
    weight: 40
  },
  {
    type: 'suv',
    name: 'Family SUV',
    colorList: ['#27ae60', '#d35400', '#2980b9', '#8e44ad', '#34495e'],
    dimensions: { width: 1.95, height: 1.6, length: 4.5 },
    speedRange: [70, 95],
    weight: 25
  },
  {
    type: 'sports',
    name: 'Speedster',
    colorList: ['#c0392b', '#f39c12', '#1abc9c', '#e74c3c'],
    dimensions: { width: 1.85, height: 1.18, length: 4.2 },
    speedRange: [95, 125],
    weight: 15
  },
  {
    type: 'truck',
    name: 'Freight Hauler',
    colorList: ['#e67e22', '#34495e', '#7f8c8d', '#95a5a6'],
    dimensions: { width: 2.3, height: 2.4, length: 8.5 },
    speedRange: [55, 75],
    weight: 20
  }
];

export const GRAPHIC_SETTINGS = {
  LOW: {
    shadows: false,
    particles: 'low',
    pixelRatio: 1.0,
    antiAlias: false,
    sceneryDetail: 'low'
  },
  MEDIUM: {
    shadows: true,
    particles: 'medium',
    pixelRatio: 1.25,
    antiAlias: true,
    sceneryDetail: 'medium'
  },
  HIGH: {
    shadows: true,
    particles: 'high',
    pixelRatio: 1.5,
    antiAlias: true,
    sceneryDetail: 'high'
  }
};

