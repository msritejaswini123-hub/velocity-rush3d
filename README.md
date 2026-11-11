# VELOCITY RUSH 3D 🏎️⚡

A high-octane, arcade-style 3D car racing game built with **Three.js**, **HTML5/CSS3**, and **Vite**. Features smooth physics, traffic dodging, near-miss bonuses, 5 unlockable vehicles in a 3D showroom garage, dynamic synthwave music, and 3 full game modes.

---

## 🌟 Features

### 1. Visual Aesthetics & 3D World
- **Procedural 3D Vehicles**: Detailed sports cars with chassis, cabin glass, spoilers, exhausts, and 3D wheels that steer and rotate with forward velocity.
- **Endless Curved Highway**: Seamless segment recycling (object pooling) with smooth S-curve road geometry, multi-lane markings, red/white curbs, steel guardrails, and overhead gantries.
- **Atmospheric Environment**: Dynamic directional sun/moonlight with soft shadows, atmospheric horizon fog, distant mountain silhouettes, and skyscraper city towers.
- **Dynamic Chase Camera**: Follows the car with speed-responsive Field of View (FOV warp), subtle high-speed shake, and switchable camera modes (Chase, Close, Hood).
- **Particle System**: High-performance pooled particle effects for nitro flame exhausts, tire smoke on drifting/braking, crash sparks, and coin sparkles.

### 2. Gameplay & Physics
- **Responsive Arcade Driving**: Acceleration, braking, handbrake drifting, and emergency lane changes.
- **Nitro Boost System**: Trigger hyper-speed with motion blur FOV widening and dual glowing exhaust flames.
- **AI Highway Traffic**: 4 traffic classes (Sedans, SUVs, Sports Coupes, Heavy Freight Trucks) cruising with safe randomized lane spawning and AI lane changes.
- **Overtakes & Near Misses**: Overtaking traffic grants score; zipping past traffic cars within inches at >85 km/h awards "+500 NEAR MISS!" bonuses and drives combo multipliers up to 5X.
- **Health & Armor Integrity**: Vehicles sustain scrape and impact damage reduced by their armor rating, complete with temporary post-crash invulnerability.

### 3. Game Modes
1. **Endless Highway**: Survive as long as you can, dodging dense traffic and setting new distance and high-score records.
2. **Time Trial**: 60-second countdown. Overtake traffic (+1.5s) and score near misses (+3.0s) to keep the clock running.
3. **Traffic Challenge**: Precision driving trial — execute 20 overtakes and score 20,000 points without totaling your car.

### 4. Showroom Garage & Progression
- **5 Distinct Vehicles**:
  1. *Phantom GT* (Class C - Balanced starter sports car)
  2. *Apex Turbo* (Class B - High-revving track specialist)
  3. *Venom RS* (Class A - Extreme top speed hypercar)
  4. *Thunder Truck* (Class Heavy - High armor muscle rig)
  5. *Cyber Vortex* (Class S - Next-gen prototype hypercar)
- **Vehicle Customization**: 7 custom paint finishes.
- **In-Game Currency & Persistence**: Collect gold coins on the highway to buy and unlock vehicles. Progress saves automatically to browser `localStorage`.

### 5. Procedural Web Audio Engine
- **Zero Asset Dependencies**: 100% synthesized through the Web Audio API — works immediately offline without missing audio files or CORS blocks.
- **Speed-Dependent Engine**: Sawtooth and triangle oscillators modulated in real-time by engine RPM, vehicle speed, and gear shifts.
- **Sound Effects**: Tire screeching during sharp drifts, deep sub-bass crash crunches, two-tone coin chime, Doppler whoosh on near misses, and UI clicks.
- **Dynamic Synthwave Music**: Built-in 128 BPM retro synthwave generator featuring a 4-on-the-floor kick, snare, hi-hat, and 16th-note arpeggiated bassline progression.

---

## 🎮 Controls

### Desktop Controls
| Key | Action |
| --- | --- |
| **W** or **↑** | Accelerate / Gas |
| **S** or **↓** | Brake / Reverse |
| **A** or **←** | Steer Left |
| **D** or **→** | Steer Right |
| **Shift** or **N** | Nitro Boost ⚡ |
| **Space** | Handbrake / Drift |
| **C** | Cycle Camera View (Chase / Close / Hood) |
| **ESC** or **P** | Pause / Resume |

### Mobile & Touch Controls
- **◀ / ▶**: Steer Left & Right
- **🏎️**: Throttle / Gas
- **🛑**: Foot Brake
- **⚡**: Nitro Boost

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Modern WebGL-capable browser (Chrome, Edge, Firefox, Safari)

### Installation
```bash
# Clone or navigate to the project directory
cd "c:\Users\ST.THOMAS SCHOOL\Desktop\GAME JAM"

# Install dependencies (Three.js & Vite)
npm install
```

### Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Run Automated Test Suite
```bash
npm test
```

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
VELOCITY RUSH 3D/
├── index.html                  # HTML5 Canvas shell & fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite bundler configuration
├── src/
│   ├── main.js                 # App bootstrap
│   ├── styles/
│   │   ├── main.css            # Global theme & typography
│   │   ├── menu.css            # Main menu, garage & modal styling
│   │   └── hud.css             # High-tech racing HUD & speedometer
│   ├── game/
│   │   ├── Constants.js        # Lanes, speeds, vehicle stats, traffic weights
│   │   ├── GameState.js        # State machine (Menu, Garage, Playing, Paused, GameOver)
│   │   ├── GameLoop.js         # RequestAnimationFrame loop with clamped delta time
│   │   ├── StorageManager.js   # LocalStorage persistence for high scores, coins, unlocks
│   │   ├── TextureGenerator.js # Canvas-based asphalt, curbs, lane marks & buildings
│   │   ├── ModelFactory.js     # Procedural 3D cars, trucks, coins & scenery
│   │   ├── AudioManager.js     # Web Audio API engine & synthwave music synthesizer
│   │   ├── InputManager.js     # Keyboard, touch buttons, and focus loss handling
│   │   ├── ParticleSystem.js   # Pooled particles for smoke, flames, sparks, and stars
│   │   ├── RoadManager.js      # Segment recycling & highway curvature calculation
│   │   ├── EnvironmentManager.js # Cityscape towers, sky, lighting & fog
│   │   ├── PlayerCar.js        # Vehicle physics, steering, acceleration & damage
│   │   ├── TrafficManager.js   # AI highway traffic spawning, cruising & overtakes
│   │   ├── CoinManager.js      # Floating coins, nitro cans & magnetic attraction
│   │   ├── CollisionManager.js # Bounding-box collisions & crash dynamics
│   │   ├── CameraController.js # Dynamic chase follow, FOV warp & camera shake
│   │   ├── ScoreManager.js     # Distance, score, combo multipliers & game mode rules
│   │   ├── VehicleGarage.js    # Showroom purchasing, stats & selection logic
│   │   └── Game.js             # Master conductor tying all subsystems together
│   └── ui/
│       ├── UIManager.js        # Screen transition & popup coordination
│       ├── MainMenu.js         # Mode selection, best score & start race
│       ├── GameHUD.js          # Speedometer, gear, health, nitro & combo display
│       ├── GarageScreen.js     # 3D turntable viewer & vehicle specs comparison
│       ├── PauseMenu.js        # Pause overlay with resume, restart, settings
│       ├── ResultsScreen.js    # Run summary, high score records & retry
│       ├── SettingsScreen.js   # Audio volume, graphics quality & camera presets
│       └── InstructionsModal.js# Controls & gameplay tutorial
└── test/
    └── game.test.js            # Automated verification test suite (15 test suites)
```

---

## 🏆 Acceptance Criteria Verification

| Requirement | Status | Notes |
| --- | --- | --- |
| 1. Starts without JS / build errors | ✅ Verified | Vite production build succeeds in <3s with 0 errors |
| 2. 3D scene renders correctly | ✅ Verified | PBR materials, directional shadows, fog, road and scenery |
| 3. Car accelerates, brakes, steers | ✅ Verified | Validated through physics formulas & test suite |
| 4. Camera follows smoothly | ✅ Verified | Dynamic lerping, FOV warp up to 76°, camera shake |
| 5. Road recycling without gaps | ✅ Verified | 16 object-pooled 60m segments with continuous S-curves |
| 6. Traffic moves & spawns safely | ✅ Verified | 4 vehicle types, speed ranges, safe lane distribution |
| 7. Collision detection works | ✅ Verified | AABB bounding-box checks with speed delta damage & crash spins |
| 8. Score & distance update | ✅ Verified | Distance-based score + overtakes + speed multipliers |
| 9. Coins collected | ✅ Verified | Magnetic attraction, +10 coins, persistent balance |
| 10. Pause & resume work | ✅ Verified | Halts physics, resumes engine audio cleanly |
| 11. Restart resets run | ✅ Verified | Clears traffic, particles, resets position, health, and timer |
| 12. Results display correctly | ✅ Verified | Shows score, distance, coins, near misses, record badge |
| 13. Best score persists | ✅ Verified | `localStorage` persistence validated in test suite |
| 14. Garage vehicle selection | ✅ Verified | 5 distinct car configs with stats comparison & 3D preview |
| 15. Currency & unlocks persist | ✅ Verified | `localStorage` vehicle unlock and coin deduction checks pass |
| 16. Mobile touch controls | ✅ Verified | Virtual steering, gas, brake, and nitro buttons |
| 17. Audio can be muted | ✅ Verified | Master SFX and Music volume sliders + mute |
| 18. Window resizing responsive | ✅ Verified | Aspect ratio & projection matrix recalculation on resize |
| 19. No nonfunctional buttons | ✅ Verified | All buttons wired to active actions, modals, and screens |
| 20. Production build passes | ✅ Verified | `npm run build` generates optimized distribution assets |

---

## 📜 License
MIT License. Built for Game Jam 2026.

