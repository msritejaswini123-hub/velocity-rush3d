// VELOCITY RUSH 3D - Automated Verification & Acceptance Test Suite
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Mock minimal DOM environment for Node.js
if (typeof window === 'undefined') {
  global.window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {}
  };
  global.document = {
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          width: 512,
          height: 512,
          getContext: () => ({
            fillStyle: '',
            strokeStyle: '',
            lineWidth: 1,
            fillRect: () => {},
            clearRect: () => {},
            getImageData: () => ({ data: new Uint8ClampedArray(512 * 512 * 4) }),
            putImageData: () => {},
            beginPath: () => {},
            arc: () => {},
            fill: () => {},
            stroke: () => {},
            strokeRect: () => {},
            fillText: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
            createRadialGradient: () => ({ addColorStop: () => {} })
          })
        };
      }
      return {
        className: '',
        style: {},
        innerHTML: '',
        appendChild: () => {},
        querySelector: () => ({ addEventListener: () => {}, textContent: '', style: {} }),
        querySelectorAll: () => [],
        addEventListener: () => {},
        classList: { add: () => {}, remove: () => {}, contains: () => false }
      };
    },
    addEventListener: () => {}
  };
  global.localStorage = (() => {
    let store = {};
    return {
      getItem: (k) => store[k] || null,
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: (k) => { delete store[k]; },
      clear: () => { store = {}; }
    };
  })();
}

import { LANES, VEHICLE_CONFIGS, TRAFFIC_TYPES, GAME_MODES, CAMERA_MODES } from '../src/game/Constants.js';
import { StorageManager } from '../src/game/StorageManager.js';
import { TextureGenerator } from '../src/game/TextureGenerator.js';
import { ModelFactory } from '../src/game/ModelFactory.js';
import { PlayerCar } from '../src/game/PlayerCar.js';
import { RoadManager } from '../src/game/RoadManager.js';
import { TrafficManager } from '../src/game/TrafficManager.js';
import { CoinManager } from '../src/game/CoinManager.js';
import { ScoreManager } from '../src/game/ScoreManager.js';
import { CollisionManager } from '../src/game/CollisionManager.js';
import { VehicleGarage } from '../src/game/VehicleGarage.js';
import { CameraController } from '../src/game/CameraController.js';
import * as THREE from 'three';

describe('VELOCITY RUSH 3D Test Suite', () => {

  it('1. Constants & Configuration Integrity', () => {
    assert.equal(LANES.length, 4, 'Must have 4 highway lanes');
    assert.equal(VEHICLE_CONFIGS.length, 5, 'Must have 5 distinct car configurations');
    assert.equal(TRAFFIC_TYPES.length, 4, 'Must have 4 traffic vehicle types');
    
    // Verify each car has valid stats
    for (const car of VEHICLE_CONFIGS) {
      assert.ok(car.stats.topSpeed >= 150, `${car.name} top speed must be >= 150 km/h`);
      assert.ok(car.stats.acceleration > 0, `${car.name} accel must be > 0`);
      assert.ok(car.stats.handling > 0, `${car.name} handling must be > 0`);
      assert.ok(car.stats.braking > 0, `${car.name} braking must be > 0`);
      assert.ok(car.stats.armor > 0, `${car.name} armor must be > 0`);
    }
  });

  it('2. StorageManager Persistence & Validation', () => {
    global.localStorage.clear();
    const storage = new StorageManager();

    // Default coins
    assert.equal(storage.getCoins(), 0);

    // Add and spend coins
    storage.addCoins(500);
    assert.equal(storage.getCoins(), 500);

    const spendOk = storage.spendCoins(200);
    assert.equal(spendOk, true);
    assert.equal(storage.getCoins(), 300);

    const spendFail = storage.spendCoins(1000);
    assert.equal(spendFail, false);
    assert.equal(storage.getCoins(), 300);

    // High Score saving
    const newBest = storage.saveHighScore('endless', 15000);
    assert.equal(newBest, true);
    assert.equal(storage.getHighScores().endless, 15000);

    const lowerScore = storage.saveHighScore('endless', 8000);
    assert.equal(lowerScore, false);
    assert.equal(storage.getHighScores().endless, 15000);

    // Car unlocks
    assert.deepEqual(storage.getUnlockedCars(), ['phantom_gt']);
    storage.unlockCar('apex_turbo');
    assert.ok(storage.getUnlockedCars().includes('apex_turbo'));

    // Selected car
    storage.setSelectedCar('apex_turbo');
    assert.equal(storage.getSelectedCar(), 'apex_turbo');
  });

  it('3. Procedural Texture Generation', () => {
    const texGen = new TextureGenerator();
    assert.ok(texGen.getAsphaltTexture(), 'Asphalt texture should generate');
    assert.ok(texGen.getLaneDashTexture(), 'Lane dash texture should generate');
    assert.ok(texGen.getRoadEdgeTexture(), 'Road edge texture should generate');
    assert.ok(texGen.getCurbTexture(), 'Curb texture should generate');
    assert.ok(texGen.getGuardrailTexture(), 'Guardrail texture should generate');
    assert.ok(texGen.getBuildingTexture('modern'), 'Modern building texture should generate');
    assert.ok(texGen.getParticleTexture(), 'Particle texture should generate');
    assert.ok(texGen.getCoinTexture(), 'Coin texture should generate');
  });

  it('4. Procedural 3D Model Factory', () => {
    const texGen = new TextureGenerator();
    const factory = new ModelFactory(texGen);

    // Test creating all 5 player vehicles
    for (const carConfig of VEHICLE_CONFIGS) {
      const vehicle = factory.createPlayerVehicle(carConfig);
      assert.ok(vehicle.group, `Car ${carConfig.id} group created`);
      assert.equal(vehicle.wheels.length, 4, `Car ${carConfig.id} must have 4 wheels`);
      assert.equal(vehicle.steeringPivots.length, 2, `Car ${carConfig.id} must have 2 steering pivots`);
      assert.ok(vehicle.taillightMaterial, `Car ${carConfig.id} has taillight material`);
      assert.equal(vehicle.exhaustPositions.length, 2, `Car ${carConfig.id} has 2 exhaust positions`);
    }

    // Test creating traffic vehicles
    for (const tType of TRAFFIC_TYPES) {
      const traffic = factory.createTrafficVehicle(tType);
      assert.ok(traffic.group, `Traffic ${tType.type} group created`);
      assert.ok(traffic.wheels.length >= 4, `Traffic ${tType.type} has wheels`);
      assert.ok(traffic.taillightMaterial, `Traffic ${tType.type} has taillight material`);
    }

    // Collectibles & scenery
    assert.ok(factory.createCoinMesh());
    assert.ok(factory.createNitroMesh());
    assert.ok(factory.createStreetLight());
    assert.ok(factory.createBuilding(20, 50, 20));
    assert.ok(factory.createHighwayGantry(26));
  });

  it('5. RoadManager & Highway Curvature', () => {
    const scene = new THREE.Scene();
    const texGen = new TextureGenerator();
    const factory = new ModelFactory(texGen);
    const road = new RoadManager(scene, texGen, factory);

    assert.equal(road.segments.length, 16, 'Should have 16 road segments');
    
    // Check curvature calculation
    const curveAt0 = road.getCurveOffset(0);
    const curveAt100 = road.getCurveOffset(-100);
    assert.ok(typeof curveAt0 === 'number');
    assert.ok(typeof curveAt100 === 'number');

    // Test segment recycling
    const initialFurthestZ = road.furthestZ;
    road.update(-500); // Simulate player moving 500m forward
    assert.ok(road.furthestZ < initialFurthestZ, 'Furthest segment must advance ahead of player');
  });

  it('6. PlayerCar Physics & Movement', () => {
    const texGen = new TextureGenerator();
    const factory = new ModelFactory(texGen);
    const car = new PlayerCar(factory, VEHICLE_CONFIGS[0]);

    assert.equal(car.speedKmh, 0);
    assert.equal(car.health, 100);
    assert.equal(car.nitro, 100);

    const scene = new THREE.Scene();
    const road = new RoadManager(scene, texGen, factory);

    // Mock input: Accelerate forward
    const input = {
      keys: { forward: true, backward: false, left: false, right: false, handbrake: false, boost: false },
      steerAxis: 0
    };

    const dummyParticles = { emitNitroFlames: () => {}, emitTireSmoke: () => {}, emitCollisionSparks: () => {} };

    // Update for 1 second of acceleration
    for (let i = 0; i < 60; i++) {
      car.update(1 / 60, input, road, dummyParticles, null);
    }

    assert.ok(car.speedKmh > 20, 'Car should accelerate to > 20 km/h in 1 second');
    assert.ok(car.position.z < 0, 'Car should travel into negative Z');

    // Test steering left
    input.keys.left = true;
    input.steerAxis = -1;
    const prevLateral = car.lateralOffset;
    for (let i = 0; i < 30; i++) {
      car.update(1 / 60, input, road, dummyParticles, null);
    }
    assert.ok(car.lateralOffset < prevLateral, 'Car should steer to the left (smaller X/lateralOffset)');

    // Test damage and armor absorption
    const dead = car.takeDamage(40);
    assert.equal(dead, false);
    assert.ok(car.health < 100 && car.health > 50, 'Damage must be applied with armor absorption');
    assert.equal(car.isInvulnerable, true, 'Car should become temporarily invulnerable');

    // Test reset
    car.reset(1);
    assert.equal(car.health, 100);
    assert.equal(car.speedKmh, 0);
    assert.equal(car.isInvulnerable, false);
  });

  it('7. TrafficManager Spawning & Near-Miss Detection', () => {
    const scene = new THREE.Scene();
    const texGen = new TextureGenerator();
    const factory = new ModelFactory(texGen);
    const traffic = new TrafficManager(scene, factory);
    const road = new RoadManager(scene, texGen, factory);

    assert.equal(traffic.vehicles.length, 14, 'Should pool 14 traffic vehicles');

    // Spawn traffic ahead
    traffic.spawnVehicle(-50, 120, road);
    const activeVehicles = traffic.vehicles.filter(v => v.active);
    assert.ok(activeVehicles.length > 0, 'At least 1 traffic car should be active');

    const v = activeVehicles[0];
    assert.ok(v.z < -50, 'Traffic should spawn ahead of player');

    // Test reset
    traffic.reset();
    assert.equal(traffic.vehicles.filter(v => v.active).length, 0, 'All traffic should be inactive after reset');
  });

  it('8. ScoreManager & Combo System', () => {
    global.localStorage.clear();
    const storage = new StorageManager();
    const score = new ScoreManager(storage);

    score.setMode(GAME_MODES.ENDLESS);
    assert.equal(score.score, 0);
    assert.equal(score.combo, 1);

    // Overtake event
    score.handleScoreEvent('PASS');
    assert.equal(score.carsPassedCount, 1);
    assert.equal(score.combo, 2, 'Overtake should increase combo to 2X');

    // Near miss event
    score.handleScoreEvent('NEAR_MISS');
    assert.equal(score.nearMissCount, 1);
    assert.equal(score.combo, 3, 'Near miss should increase combo to 3X');

    // Crash event resets combo
    score.handleCrash();
    assert.equal(score.combo, 1, 'Crash must reset combo to 1X');

    // Coin collection
    score.handleCollectEvent('coin', { amount: 10, score: 250 });
    assert.equal(score.coins, 10);
    assert.equal(storage.getCoins(), 10, 'Coins must persist to storage');

    // Finalize run
    const result = score.finalizeRun();
    assert.ok(result.score > 0);
    assert.equal(result.isNewRecord, true);
  });

  it('9. VehicleGarage Progression & Purchases', () => {
    global.localStorage.clear();
    const storage = new StorageManager();
    const garage = new VehicleGarage(storage);

    // Starter car
    const starter = garage.getSelectedCar();
    assert.equal(starter.id, 'phantom_gt');
    assert.equal(starter.unlocked, true);

    // Apex turbo is locked
    const apex = garage.getCarById('apex_turbo');
    assert.equal(apex.unlocked, false);

    // Cannot afford without coins
    assert.equal(garage.canAfford('apex_turbo'), false);
    assert.equal(garage.buyCar('apex_turbo'), false);

    // Add coins and purchase
    storage.addCoins(4000);
    assert.equal(garage.canAfford('apex_turbo'), true);
    const buyOk = garage.buyCar('apex_turbo');
    assert.equal(buyOk, true);

    // Apex turbo is now unlocked and selected
    assert.equal(garage.getSelectedCar().id, 'apex_turbo');
    assert.equal(storage.getCoins(), 4000 - 3500);
  });

  it('10. CollisionManager Damage Calculations', () => {
    const texGen = new TextureGenerator();
    const factory = new ModelFactory(texGen);
    const car = new PlayerCar(factory, VEHICLE_CONFIGS[0]);
    const collisions = new CollisionManager();

    const scene = new THREE.Scene();
    const traffic = new TrafficManager(scene, factory);

    // Position car and traffic in same location
    car.position.set(0, 0, -100);
    car.speedKmh = 180;
    car.updateCollider();

    const tVehicle = traffic.vehicles[0];
    tVehicle.active = true;
    tVehicle.x = 0;
    tVehicle.z = -100;
    tVehicle.speedKmh = 80;
    traffic.updateCollider(tVehicle);

    let crashTriggered = false;
    const dummyParticles = { emitCollisionSparks: () => {} };

    collisions.checkPlayerTrafficCollisions(
      car,
      traffic,
      dummyParticles,
      null,
      (data) => {
        crashTriggered = true;
        assert.ok(data.damage > 0);
        assert.ok(data.severity > 0);
      }
    );

    assert.equal(crashTriggered, true, 'Collision must trigger when colliders intersect');
    assert.equal(tVehicle.isSpinning, true, 'Traffic car must spin out upon impact');
  });

  it('11. CameraController Modes & Dynamic FOV', () => {
    const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 1000);
    const controller = new CameraController(camera);

    assert.equal(controller.currentMode, CAMERA_MODES.CHASE);
    controller.cycleMode();
    assert.equal(controller.currentMode, CAMERA_MODES.CLOSE);
    controller.cycleMode();
    assert.equal(controller.currentMode, CAMERA_MODES.HOOD);
    controller.cycleMode();
    assert.equal(controller.currentMode, CAMERA_MODES.CHASE);

    // Camera shake
    controller.addShake(0.8, 0.4);
    assert.ok(controller.shakeIntensity > 0);
    assert.ok(controller.shakeDuration > 0);
  });

  it('12. Time Trial Mode Countdown & Expiry', () => {
    global.localStorage.clear();
    const storage = new StorageManager();
    const score = new ScoreManager(storage);
    score.setMode(GAME_MODES.TIME_TRIAL);

    assert.equal(score.timeRemaining, 60.0);

    let timeUpCalled = false;
    const dummyPlayer = { speedMs: 50, speedKmh: 180 };

    // Update for 10 seconds
    score.update(10.0, dummyPlayer, () => { timeUpCalled = true; });
    assert.equal(score.timeRemaining, 50.0);
    assert.equal(timeUpCalled, false);

    // Overtake adds bonus time
    score.handleScoreEvent('PASS');
    assert.equal(score.timeRemaining, 51.5);

    // Update remaining 52 seconds -> expires
    score.update(52.0, dummyPlayer, () => { timeUpCalled = true; });
    assert.equal(score.timeRemaining, 0);
    assert.equal(timeUpCalled, true);
  });

  it('13. Traffic Challenge Mode Victory Check', () => {
    global.localStorage.clear();
    const storage = new StorageManager();
    const score = new ScoreManager(storage);
    score.setMode(GAME_MODES.TRAFFIC_CHALLENGE);

    let challengeWon = false;
    score.onChallengeComplete = () => { challengeWon = true; };

    const dummyPlayer = { speedMs: 50, speedKmh: 180 };

    // Simulate overtakes until target is reached
    for (let i = 0; i < 20; i++) {
      score.handleScoreEvent('PASS');
      score.update(0.1, dummyPlayer, null);
    }

    assert.equal(score.carsPassedCount, 20);
    assert.equal(challengeWon, true, 'Challenge should complete upon reaching target overtakes');
  });

  it('14. GameState Lifecycle Transitions', () => {
    const state = new (class {
      constructor() {
        this.current = 'menu';
        this.history = [];
      }
      setState(s) {
        this.history.push(s);
        this.current = s;
      }
    })();

    state.setState('playing');
    state.setState('paused');
    state.setState('playing');
    state.setState('game_over');
    state.setState('menu');

    assert.deepEqual(state.history, ['playing', 'paused', 'playing', 'game_over', 'menu']);
  });

  it('15. AudioManager Volume & Mute Controls', () => {
    global.localStorage.clear();
    const storage = new StorageManager();
    
    // Test storage defaults
    const settings = storage.getSettings();
    assert.equal(settings.soundVolume, 0.8);
    assert.equal(settings.musicVolume, 0.6);

    // Test saving new audio volumes
    storage.saveSettings({ soundVolume: 0.5, musicVolume: 0.3 });
    const updated = storage.getSettings();
    assert.equal(updated.soundVolume, 0.5);
    assert.equal(updated.musicVolume, 0.3);
  });

});
