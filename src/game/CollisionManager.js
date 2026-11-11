// VELOCITY RUSH 3D - Collision Detection & Physics Response
import * as THREE from 'three';

export class CollisionManager {
  constructor() {
    this.contactPoint = new THREE.Vector3();
  }

  checkPlayerTrafficCollisions(playerCar, trafficManager, particleSystem, audioManager, onCrash) {
    if (playerCar.isInvulnerable) return;

    const playerBox = playerCar.collider;

    for (const v of trafficManager.vehicles) {
      if (!v.active || v.isSpinning) continue;

      if (playerBox.intersectsBox(v.collider)) {
        // Calculate collision point between the two bounding boxes
        this.contactPoint.set(
          (playerCar.position.x + v.x) * 0.5,
          0.6,
          (playerCar.position.z + v.z) * 0.5
        );

        // Calculate impact severity based on relative speed
        const speedDelta = Math.abs(playerCar.speedKmh - v.speedKmh);
        const severity = Math.min(2.0, Math.max(0.4, speedDelta / 60));

        // Base damage scaled with speed delta
        const baseDamage = 15 + severity * 25; // 25 to 65 damage

        // Audio & Visual FX
        if (audioManager) audioManager.playCollisionSound(severity);
        particleSystem.emitCollisionSparks(this.contactPoint, 24);

        // Spin traffic car
        trafficManager.triggerCrash(v);

        // Damage player
        const isDead = playerCar.takeDamage(baseDamage);

        if (onCrash) {
          onCrash({
            severity: severity,
            damage: baseDamage,
            isDead: isDead
          });
        }

        // Only handle one major collision per frame
        break;
      }
    }
  }
}

