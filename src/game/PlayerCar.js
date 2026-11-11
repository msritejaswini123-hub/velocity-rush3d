// VELOCITY RUSH 3D - Player Vehicle Controller & Physics
import * as THREE from 'three';
import { LANES, TOTAL_ROAD_WIDTH, ROAD_WIDTH } from './Constants.js';

export class PlayerCar {
  constructor(modelFactory, config, customColor = null) {
    this.models = modelFactory;
    this.config = config;
    this.customColor = customColor;

    // Vehicle 3D Instance
    this.vehicleData = this.models.createPlayerVehicle(this.config, this.customColor);
    this.group = this.vehicleData.group;

    // Physics & Motion State
    this.lateralOffset = LANES[1]; // Start in lane 2
    this.position = new THREE.Vector3(LANES[1], 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.speedKmh = 0;
    this.speedMs = 0;

    // Configurable Stats mapped from vehicle config
    this.maxSpeedKmh = this.config.stats.topSpeed;
    this.accelRate = (this.config.stats.acceleration / 100) * 18.0 + 8.0; // m/s^2
    this.brakeRate = (this.config.stats.braking / 100) * 28.0 + 15.0; // m/s^2
    this.handlingRate = (this.config.stats.handling / 100) * 14.0 + 10.0;
    this.armorRating = this.config.stats.armor;

    // Dynamics
    this.steerAngle = 0;
    this.maxSteerAngle = 0.42; // rad
    this.bodyRoll = 0;
    this.bodyPitch = 0;
    this.wheelRotation = 0;

    // Nitro System
    this.nitro = 100;
    this.maxNitro = 100;
    this.isBoosting = false;
    this.nitroDrainRate = 35; // % per second
    this.nitroRechargeRate = 4; // % per second when cruising

    // Health & Survival
    this.health = 100;
    this.maxHealth = 100;
    this.isInvulnerable = false;
    this.invulnerableTimer = 0;

    // Drift / Handbrake
    this.isDrifting = false;

    // Bounding Box
    this.collider = new THREE.Box3();
    this.updateCollider();
  }

  update(delta, input, roadManager, particleSystem, audioManager) {
    if (delta <= 0) return;

    // 1. Throttle, Boost & Braking Input
    const isForward = input.keys.forward;
    const isBraking = input.keys.backward;
    const isHandbrake = input.keys.handbrake;
    const wantsBoost = input.keys.boost;

    // Nitro Boost Activation
    if (wantsBoost && this.nitro > 5 && isForward) {
      this.isBoosting = true;
      this.nitro = Math.max(0, this.nitro - this.nitroDrainRate * delta);
    } else {
      this.isBoosting = false;
      // Passive nitro recharge at high speed
      if (this.speedKmh > 100) {
        this.nitro = Math.min(this.maxNitro, this.nitro + this.nitroRechargeRate * delta);
      }
    }

    // Top speed adjustment during boost
    const effectiveTopSpeedKmh = this.isBoosting ? this.maxSpeedKmh * 1.25 : this.maxSpeedKmh;
    const maxSpeedMs = effectiveTopSpeedKmh / 3.6;

    // Acceleration & Drag calculations
    let targetAccel = 0;
    if (isForward) {
      const boostMultiplier = this.isBoosting ? 1.8 : 1.0;
      targetAccel = this.accelRate * boostMultiplier;
    } else if (isBraking) {
      targetAccel = -this.brakeRate;
    } else {
      // Natural rolling resistance and air drag
      targetAccel = -6.5;
    }

    if (isHandbrake) {
      targetAccel = -this.brakeRate * 1.2;
      this.isDrifting = true;
    } else {
      this.isDrifting = false;
    }

    // Update forward speed (moving along -Z axis)
    this.speedMs += targetAccel * delta;
    this.speedMs = Math.max(0, Math.min(maxSpeedMs, this.speedMs));
    this.speedKmh = this.speedMs * 3.6;

    // 2. Lateral Steering
    const steerInput = input.steerAxis;
    // Tighter steering at higher speeds to maintain arcade precision
    const speedFactor = Math.max(0.4, 1.0 - (this.speedKmh / (this.maxSpeedKmh * 1.3)) * 0.45);
    const targetSteerAngle = -steerInput * this.maxSteerAngle * speedFactor;

    this.steerAngle = THREE.MathUtils.lerp(this.steerAngle, targetSteerAngle, delta * 12.0);

    // Lateral velocity
    let lateralSpeed = 0;
    if (this.speedMs > 1.0) {
      lateralSpeed = steerInput * this.handlingRate * (this.speedKmh / 100);
      lateralSpeed = Math.max(-22, Math.min(22, lateralSpeed));
    }

    // 3. Move along Highway & Curves
    // Player drives forward into negative Z
    this.position.z -= this.speedMs * delta;
    this.lateralOffset += lateralSpeed * delta;

    // Guardrail collision / clamping
    const maxLateralOffset = TOTAL_ROAD_WIDTH * 0.46;
    if (Math.abs(this.lateralOffset) > maxLateralOffset) {
      this.lateralOffset = Math.sign(this.lateralOffset) * maxLateralOffset;
      // Scrape penalty
      this.speedMs = Math.max(0, this.speedMs - 15.0 * delta);
      particleSystem.emitCollisionSparks(this.position, 6);
      if (audioManager) audioManager.setTireScreech(true, 0.6);
    }

    // Match road curvature
    const roadCenterX = roadManager.getCurveOffset(this.position.z);
    this.position.x = roadCenterX + this.lateralOffset;

    // Update group position
    this.group.position.copy(this.position);

    // 4. Vehicle Rotation & Body Tilt (Roll and Pitch)
    const curveTangent = roadManager.getCurveTangent(this.position.z);
    const roadAngleY = Math.atan(curveTangent);

    // Yaw: road angle + steering yaw
    const targetYaw = roadAngleY + this.steerAngle * 0.35 + (this.isDrifting ? -steerInput * 0.25 : 0);
    this.group.rotation.y = targetYaw;

    // Body Roll (lean into/out of turns)
    const targetRoll = -steerInput * (this.speedKmh / this.maxSpeedKmh) * 0.12;
    this.bodyRoll = THREE.MathUtils.lerp(this.bodyRoll, targetRoll, delta * 10.0);
    this.vehicleData.mainBody.rotation.z = this.bodyRoll;

    // Body Pitch (squat on accel, dive on brake)
    let targetPitch = 0;
    if (isForward && this.speedKmh < this.maxSpeedKmh * 0.9) {
      targetPitch = -0.04;
    } else if (isBraking) {
      targetPitch = 0.06;
    }
    this.bodyPitch = THREE.MathUtils.lerp(this.bodyPitch, targetPitch, delta * 8.0);
    this.vehicleData.mainBody.rotation.x = this.bodyPitch;

    // 5. Wheel Animations
    // Front wheel steering
    for (const pivot of this.vehicleData.steeringPivots) {
      pivot.rotation.y = this.steerAngle;
    }

    // All wheels rolling forward
    const wheelCircumference = Math.PI * 0.68;
    this.wheelRotation += (this.speedMs * delta) / wheelCircumference;
    for (const wh of this.vehicleData.wheels) {
      wh.rotation.x = this.wheelRotation;
    }

    // 6. Brake Light & Audio Feedback
    if (isBraking || isHandbrake) {
      this.vehicleData.taillightMaterial.emissiveIntensity = 2.4;
      this.vehicleData.taillightMaterial.color.setHex(0xff2222);
    } else {
      this.vehicleData.taillightMaterial.emissiveIntensity = 0.4;
      this.vehicleData.taillightMaterial.color.setHex(0x880000);
    }

    // 7. Particle Effects (Smoke, Nitro, Tire Screech)
    if (this.isBoosting) {
      // World-space exhaust coordinates
      const worldExhausts = this.vehicleData.exhaustPositions.map(pos => {
        return pos.clone().applyMatrix4(this.group.matrixWorld);
      });
      particleSystem.emitNitroFlames(worldExhausts);
    }

    if (this.isDrifting || (isBraking && this.speedKmh > 60) || (Math.abs(steerInput) > 0.8 && this.speedKmh > 140)) {
      particleSystem.emitTireSmoke(this.position, 2);
      if (audioManager) audioManager.setTireScreech(true, 1.0);
    } else {
      if (audioManager) audioManager.setTireScreech(false);
    }

    // 8. Invulnerability Blinking
    if (this.isInvulnerable) {
      this.invulnerableTimer -= delta;
      if (this.invulnerableTimer <= 0) {
        this.isInvulnerable = false;
        this.group.visible = true;
      } else {
        // Blink every 0.1s
        this.group.visible = Math.floor(this.invulnerableTimer * 10) % 2 === 0;
      }
    } else {
      this.group.visible = true;
    }

    // 9. Update Audio Engine
    if (audioManager) {
      audioManager.updateEngine(this.speedKmh, this.maxSpeedKmh, isForward, this.isBoosting);
    }

    // 10. Update Collider
    this.updateCollider();
  }

  updateCollider() {
    const dim = this.config.dimensions;
    const halfW = dim.width * 0.45;
    const halfH = dim.height * 0.5;
    const halfL = dim.length * 0.48;

    this.collider.min.set(
      this.position.x - halfW,
      this.position.y + 0.1,
      this.position.z - halfL
    );
    this.collider.max.set(
      this.position.x + halfW,
      this.position.y + halfH * 2,
      this.position.z + halfL
    );
  }

  takeDamage(amount) {
    if (this.isInvulnerable) return false;

    // Armor reduces damage percentage
    const reduction = (this.armorRating / 100) * 0.4; // Up to 40% damage reduction
    const actualDamage = amount * (1.0 - reduction);

    this.health = Math.max(0, this.health - actualDamage);

    // Trigger invulnerability window
    this.isInvulnerable = true;
    this.invulnerableTimer = 1.6;

    // Drop speed upon severe collision
    this.speedMs *= 0.55;
    this.speedKmh = this.speedMs * 3.6;

    return this.health <= 0;
  }

  repair(amount = 35) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  addNitro(amount = 50) {
    this.nitro = Math.min(this.maxNitro, this.nitro + amount);
  }

  reset(startLaneIndex = 1) {
    this.lateralOffset = LANES[startLaneIndex];
    this.position.set(LANES[startLaneIndex], 0, 0);
    this.velocity.set(0, 0, 0);
    this.speedKmh = 0;
    this.speedMs = 0;
    this.steerAngle = 0;
    this.bodyRoll = 0;
    this.bodyPitch = 0;
    this.health = this.maxHealth;
    this.nitro = this.maxNitro;
    this.isBoosting = false;
    this.isInvulnerable = false;
    this.invulnerableTimer = 0;
    this.group.visible = true;
    this.group.position.copy(this.position);
    this.group.rotation.set(0, 0, 0);
    this.updateCollider();
  }
}
