// VELOCITY RUSH 3D - AI Highway Traffic System
import * as THREE from 'three';
import { LANES, TRAFFIC_TYPES } from './Constants.js';

export class TrafficManager {
  constructor(scene, modelFactory) {
    this.scene = scene;
    this.models = modelFactory;

    this.poolSize = 14;
    this.vehicles = [];

    this.spawnInterval = 1.4; // seconds between spawn attempts
    this.spawnTimer = 0;
    this.difficultyFactor = 1.0;

    this.initPool();
  }

  initPool() {
    for (let i = 0; i < this.poolSize; i++) {
      // Pick random traffic type based on weight
      const trafficType = this.getRandomTrafficType();
      const vehicleData = this.models.createTrafficVehicle(trafficType);

      vehicleData.group.visible = false;
      this.scene.add(vehicleData.group);

      this.vehicles.push({
        group: vehicleData.group,
        wheels: vehicleData.wheels,
        taillightMat: vehicleData.taillightMaterial,
        dim: vehicleData.dimensions,
        type: trafficType,
        active: false,
        laneIndex: 0,
        speedKmh: 80,
        speedMs: 80 / 3.6,
        z: 0,
        x: 0,
        lateralOffset: 0,
        targetLaneIndex: 0,
        isChangingLanes: false,
        laneChangeProgress: 0,
        wheelRotation: 0,
        hasBeenPassed: false,
        hasBeenNearMissed: false,
        collider: new THREE.Box3(),
        isSpinning: false,
        spinVelocity: 0
      });
    }
  }

  getRandomTrafficType() {
    const totalWeight = TRAFFIC_TYPES.reduce((acc, t) => acc + t.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const t of TRAFFIC_TYPES) {
      if (rand < t.weight) return t;
      rand -= t.weight;
    }
    return TRAFFIC_TYPES[0];
  }

  spawnVehicle(playerZ, playerSpeedKmh, roadManager) {
    const inactive = this.vehicles.find(v => !v.active);
    if (!inactive) return;

    // Pick spawn distance ahead of player (120 to 220 meters ahead)
    const spawnZ = playerZ - (130 + Math.random() * 90);

    // Find occupied lanes near this Z to prevent wall of cars
    const occupiedLanes = this.vehicles
      .filter(v => v.active && Math.abs(v.z - spawnZ) < 25)
      .map(v => v.laneIndex);

    // Available lanes
    const freeLanes = [0, 1, 2, 3].filter(lane => !occupiedLanes.includes(lane));
    if (freeLanes.length === 0 || freeLanes.length < 2) {
      // Ensure at least 2 lanes are open for safe arcade navigation
      return;
    }

    const chosenLane = freeLanes[Math.floor(Math.random() * freeLanes.length)];

    // Speed calculation
    const [minSpd, maxSpd] = inactive.type.speedRange;
    const speedKmh = minSpd + Math.random() * (maxSpd - minSpd);

    inactive.active = true;
    inactive.laneIndex = chosenLane;
    inactive.targetLaneIndex = chosenLane;
    inactive.isChangingLanes = false;
    inactive.speedKmh = speedKmh;
    inactive.speedMs = speedKmh / 3.6;
    inactive.z = spawnZ;
    inactive.lateralOffset = LANES[chosenLane];
    inactive.hasBeenPassed = false;
    inactive.hasBeenNearMissed = false;
    inactive.isSpinning = false;
    inactive.spinVelocity = 0;

    // Compute road curve
    const roadX = roadManager.getCurveOffset(spawnZ);
    inactive.x = roadX + inactive.lateralOffset;

    inactive.group.position.set(inactive.x, 0, inactive.z);
    inactive.group.rotation.set(0, 0, 0);
    inactive.group.visible = true;

    this.updateCollider(inactive);
  }

  update(delta, playerCar, roadManager, particleSystem, audioManager, onScoreEvent) {
    // 1. Spawning
    this.spawnTimer += delta;
    const effectiveSpawnInterval = Math.max(0.6, this.spawnInterval / this.difficultyFactor);

    if (this.spawnTimer >= effectiveSpawnInterval) {
      this.spawnTimer = 0;
      this.spawnVehicle(playerCar.position.z, playerCar.speedKmh, roadManager);
    }

    // 2. Update active traffic
    const playerZ = playerCar.position.z;
    const playerX = playerCar.position.x;
    const playerSpeed = playerCar.speedKmh;

    for (const v of this.vehicles) {
      if (!v.active) continue;

      // Handle Crash Spin
      if (v.isSpinning) {
        v.group.rotation.y += v.spinVelocity * delta;
        v.speedMs = Math.max(0, v.speedMs - 25.0 * delta);
        v.z -= v.speedMs * delta;
        particleSystem.emitTireSmoke(v.group.position, 1);
      } else {
        // Normal Driving Forward (Negative Z)
        v.z -= v.speedMs * delta;

        // Occasional AI Lane Changing
        if (!v.isChangingLanes && Math.random() < 0.003 * delta * 60) {
          const possibleLanes = [];
          if (v.laneIndex > 0) possibleLanes.push(v.laneIndex - 1);
          if (v.laneIndex < 3) possibleLanes.push(v.laneIndex + 1);

          if (possibleLanes.length > 0) {
            v.targetLaneIndex = possibleLanes[Math.floor(Math.random() * possibleLanes.length)];
            v.isChangingLanes = true;
            v.laneChangeProgress = 0;
          }
        }

        if (v.isChangingLanes) {
          v.laneChangeProgress += delta * 0.7; // Smooth 1.4s lane change
          const startX = LANES[v.laneIndex];
          const targetX = LANES[v.targetLaneIndex];
          v.lateralOffset = THREE.MathUtils.lerp(startX, targetX, THREE.MathUtils.smoothstep(v.laneChangeProgress, 0, 1));

          if (v.laneChangeProgress >= 1.0) {
            v.laneIndex = v.targetLaneIndex;
            v.lateralOffset = LANES[v.laneIndex];
            v.isChangingLanes = false;
          }
        }

        // Align with Road Curve
        const roadX = roadManager.getCurveOffset(v.z);
        const curveTangent = roadManager.getCurveTangent(v.z);
        const roadAngleY = Math.atan(curveTangent);

        v.x = roadX + v.lateralOffset;
        v.group.position.set(v.x, 0, v.z);
        v.group.rotation.y = roadAngleY;
      }

      // Wheel rotation
      const wheelCircumference = Math.PI * 0.65;
      v.wheelRotation += (v.speedMs * delta) / wheelCircumference;
      for (const wh of v.wheels) {
        wh.rotation.x = v.wheelRotation;
      }

      this.updateCollider(v);

      // --- Overtake / Near Miss Detection ---
      const zDiff = v.z - playerZ; // If player is ahead, zDiff > 0 (since driving into negative Z)

      // Passing Check
      if (!v.hasBeenPassed && zDiff > 3.0) {
        v.hasBeenPassed = true;
        if (onScoreEvent) {
          onScoreEvent('PASS', { speed: playerSpeed });
        }
      }

      // Near Miss Check: close lateral distance, player driving fast, passing along Z
      if (!v.hasBeenNearMissed && !v.isSpinning && playerSpeed > 85) {
        const xDist = Math.abs(playerX - v.x);
        const zDist = Math.abs(playerZ - v.z);

        // Near miss zone: lateral distance between 1.6m and 2.7m while within 2.5m Z
        if (xDist < 2.7 && xDist > 1.6 && zDist < 2.8) {
          v.hasBeenNearMissed = true;
          if (audioManager) audioManager.playNearMissSound();
          if (onScoreEvent) {
            onScoreEvent('NEAR_MISS', { speed: playerSpeed });
          }
        }
      }

      // Despawn if far behind player or too far ahead
      if (v.z > playerZ + 55 || v.z < playerZ - 280) {
        this.despawn(v);
      }
    }
  }

  updateCollider(v) {
    const halfW = v.dim.width * 0.48;
    const halfH = v.dim.height * 0.5;
    const halfL = v.dim.length * 0.48;

    v.collider.min.set(v.x - halfW, 0.1, v.z - halfL);
    v.collider.max.set(v.x + halfW, v.dim.height, v.z + halfL);
  }

  triggerCrash(vehicle) {
    vehicle.isSpinning = true;
    vehicle.spinVelocity = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 8.0 + 6.0);
  }

  despawn(v) {
    v.active = false;
    v.group.visible = false;
    v.isSpinning = false;
  }

  setDifficulty(level) {
    this.difficultyFactor = Math.max(1.0, Math.min(3.0, level));
  }

  reset() {
    for (const v of this.vehicles) {
      this.despawn(v);
    }
    this.spawnTimer = 0;
    this.difficultyFactor = 1.0;
  }
}

