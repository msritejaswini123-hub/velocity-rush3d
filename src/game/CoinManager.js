// VELOCITY RUSH 3D - Collectibles & Coin Manager
import * as THREE from 'three';
import { LANES } from './Constants.js';

export class CoinManager {
  constructor(scene, modelFactory) {
    this.scene = scene;
    this.models = modelFactory;

    this.items = [];
    this.poolSize = 16;
    this.spawnTimer = 0;
    this.spawnInterval = 2.2; // Spawns coin clusters or nitro periodically

    this.initPool();
  }

  initPool() {
    for (let i = 0; i < this.poolSize; i++) {
      const isNitro = i % 5 === 0; // 20% chance of nitro canister
      const group = isNitro ? this.models.createNitroMesh() : this.models.createCoinMesh();

      group.visible = false;
      this.scene.add(group);

      this.items.push({
        group: group,
        type: isNitro ? 'nitro' : 'coin',
        active: false,
        laneIndex: 0,
        z: 0,
        x: 0,
        baseY: 0.8,
        floatOffset: Math.random() * Math.PI * 2,
        rotationSpeed: isNitro ? 2.5 : 4.0,
        boundingRadius: isNitro ? 1.4 : 1.2
      });
    }
  }

  spawnPickup(playerZ, roadManager) {
    const inactive = this.items.filter(it => !it.active);
    if (inactive.length === 0) return;

    // Decide whether to spawn a trail of 3 coins or a single item
    const lane = Math.floor(Math.random() * 4);
    const spawnZ = playerZ - (100 + Math.random() * 80);

    const countToSpawn = Math.min(inactive.length, Math.random() > 0.4 ? 3 : 1);
    for (let i = 0; i < countToSpawn; i++) {
      const item = inactive[i];
      item.active = true;
      item.laneIndex = lane;
      item.z = spawnZ - i * 6.0; // 6m spacing in line

      const roadX = roadManager.getCurveOffset(item.z);
      item.x = roadX + LANES[lane];

      item.group.position.set(item.x, item.baseY, item.z);
      item.group.visible = true;
    }
  }

  update(delta, playerCar, roadManager, particleSystem, audioManager, onCollect) {
    // 1. Spawning
    this.spawnTimer += delta;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      this.spawnPickup(playerCar.position.z, roadManager);
    }

    const playerPos = playerCar.position;
    const isPlayerBoosting = playerCar.isBoosting;

    // Magnet distance increases during boost
    const magnetDistance = isPlayerBoosting ? 9.0 : 4.0;
    const collectDistance = 2.2;

    for (const item of this.items) {
      if (!item.active) continue;

      // Bob and spin
      item.floatOffset += delta * 3.5;
      item.group.rotation.y += item.rotationSpeed * delta;
      item.group.position.y = item.baseY + Math.sin(item.floatOffset) * 0.15;

      // Distance to player
      const dx = playerPos.x - item.group.position.x;
      const dz = playerPos.z - item.group.position.z;
      const distSq = dx * dx + dz * dz;
      const dist = Math.sqrt(distSq);

      // Magnetic Attraction
      if (dist < magnetDistance) {
        const pullSpeed = (magnetDistance - dist) * 16.0;
        item.group.position.x += (dx / dist) * pullSpeed * delta;
        item.group.position.z += (dz / dist) * pullSpeed * delta;
      } else {
        // Keep aligned with road curve
        const roadX = roadManager.getCurveOffset(item.group.position.z);
        item.group.position.x = roadX + LANES[item.laneIndex];
      }

      // Collect Check
      if (dist < collectDistance) {
        this.collect(item, particleSystem, audioManager, onCollect);
        continue;
      }

      // Despawn if far behind player
      if (item.group.position.z > playerPos.z + 40) {
        this.despawn(item);
      }
    }
  }

  collect(item, particleSystem, audioManager, onCollect) {
    if (item.type === 'coin') {
      particleSystem.emitCoinSparkles(item.group.position, 14);
      if (audioManager) audioManager.playCoinSound();
      if (onCollect) onCollect('coin', { amount: 10, score: 250 });
    } else if (item.type === 'nitro') {
      particleSystem.emitNitroFlames([item.group.position]);
      if (audioManager) audioManager.playNitroSound();
      if (onCollect) onCollect('nitro', { amount: 50, score: 150 });
    }

    this.despawn(item);
  }

  despawn(item) {
    item.active = false;
    item.group.visible = false;
  }

  reset() {
    for (const item of this.items) {
      this.despawn(item);
    }
    this.spawnTimer = 0;
  }
}
