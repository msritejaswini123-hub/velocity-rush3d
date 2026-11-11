// VELOCITY RUSH 3D - Dynamic Third-Person Chase Camera & FOV Warp
import * as THREE from 'three';
import { CAMERA_MODES } from './Constants.js';

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.currentMode = CAMERA_MODES.CHASE;

    // Camera Mode Offsets (relative to car)
    this.modeOffsets = {
      [CAMERA_MODES.CHASE]: {
        posOffset: new THREE.Vector3(0, 3.2, 7.5),
        lookOffset: new THREE.Vector3(0, 1.2, -18.0)
      },
      [CAMERA_MODES.CLOSE]: {
        posOffset: new THREE.Vector3(0, 2.1, 5.2),
        lookOffset: new THREE.Vector3(0, 1.0, -15.0)
      },
      [CAMERA_MODES.HOOD]: {
        posOffset: new THREE.Vector3(0, 1.25, -0.2),
        lookOffset: new THREE.Vector3(0, 1.0, -25.0)
      }
    };

    this.currentPos = new THREE.Vector3(0, 5, 10);
    this.targetLook = new THREE.Vector3(0, 1, -10);

    // Dynamic FOV
    this.baseFov = 60;
    this.maxFov = 76;
    this.currentFov = 60;

    // Camera Shake
    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeDecay = 4.0;
  }

  setMode(mode) {
    if (this.modeOffsets[mode]) {
      this.currentMode = mode;
    }
  }

  cycleMode() {
    const modes = [CAMERA_MODES.CHASE, CAMERA_MODES.CLOSE, CAMERA_MODES.HOOD];
    const nextIdx = (modes.indexOf(this.currentMode) + 1) % modes.length;
    this.currentMode = modes[nextIdx];
    return this.currentMode;
  }

  addShake(intensity = 0.5, duration = 0.35) {
    this.shakeIntensity = Math.min(1.2, this.shakeIntensity + intensity);
    this.shakeDuration = Math.max(this.shakeDuration, duration);
  }

  update(delta, playerCar, roadManager) {
    if (!playerCar) return;

    const carPos = playerCar.position;
    const speedKmh = playerCar.speedKmh;
    const maxSpeedKmh = playerCar.maxSpeedKmh;
    const isBoosting = playerCar.isBoosting;

    const offsets = this.modeOffsets[this.currentMode];

    // 1. Dynamic FOV warp based on speed & boost
    const speedRatio = Math.min(1.0, speedKmh / maxSpeedKmh);
    const boostBonus = isBoosting ? 6.0 : 0.0;
    const targetFov = this.baseFov + speedRatio * (this.maxFov - this.baseFov) + boostBonus;
    this.currentFov = THREE.MathUtils.lerp(this.currentFov, targetFov, delta * 5.0);
    this.camera.fov = this.currentFov;
    this.camera.updateProjectionMatrix();

    // 2. Camera Chase Position (smoothed with lerp)
    const curveTangent = roadManager.getCurveTangent(carPos.z);
    const carHeading = Math.atan(curveTangent);

    // Rotate posOffset by car heading
    const desiredPos = carPos.clone().add(
      new THREE.Vector3(
        offsets.posOffset.x + Math.sin(carHeading) * offsets.posOffset.z * 0.4,
        offsets.posOffset.y,
        offsets.posOffset.z
      )
    );

    // 3. Shake Offset
    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeDuration > 0) {
      this.shakeDuration -= delta;
      const amt = this.shakeIntensity * (this.shakeDuration / 0.35);
      shakeX = (Math.random() - 0.5) * amt * 0.5;
      shakeY = (Math.random() - 0.5) * amt * 0.5;
    } else {
      // Very subtle high speed vibration
      if (speedKmh > 120) {
        const subtleAmt = (speedKmh / maxSpeedKmh) * 0.04;
        shakeX = (Math.random() - 0.5) * subtleAmt;
        shakeY = (Math.random() - 0.5) * subtleAmt;
      }
    }

    desiredPos.x += shakeX;
    desiredPos.y += shakeY;

    // Follow smoothing factor (tighter Z tracking, smooth X lateral tracking)
    const lerpRateX = delta * 10.0;
    const lerpRateZ = delta * 20.0;

    this.currentPos.x = THREE.MathUtils.lerp(this.currentPos.x, desiredPos.x, lerpRateX);
    this.currentPos.y = THREE.MathUtils.lerp(this.currentPos.y, desiredPos.y, delta * 8.0);
    this.currentPos.z = THREE.MathUtils.lerp(this.currentPos.z, desiredPos.z, lerpRateZ);

    this.camera.position.copy(this.currentPos);

    // 4. Look-Ahead Target
    const lookZ = carPos.z + offsets.lookOffset.z;
    const lookX = roadManager.getCurveOffset(lookZ) + offsets.lookOffset.x;
    const desiredLook = new THREE.Vector3(lookX, carPos.y + offsets.lookOffset.y, lookZ);

    this.targetLook.lerp(desiredLook, delta * 12.0);
    this.camera.lookAt(this.targetLook);
  }

  reset(playerCar) {
    if (!playerCar) return;
    const offsets = this.modeOffsets[this.currentMode];
    this.currentPos.copy(playerCar.position).add(offsets.posOffset);
    this.targetLook.copy(playerCar.position).add(offsets.lookOffset);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.targetLook);
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
    this.shakeDuration = 0;
    this.shakeIntensity = 0;
  }
}

