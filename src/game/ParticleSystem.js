// VELOCITY RUSH 3D - High-Performance Pooled Particle System
import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene, textureGenerator) {
    this.scene = scene;
    this.textures = textureGenerator;

    this.maxParticles = 300;
    this.activeCount = 0;

    // Particle state arrays
    this.positions = new Float32Array(this.maxParticles * 3);
    this.velocities = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.sizes = new Float32Array(this.maxParticles);
    this.lifespans = new Float32Array(this.maxParticles);
    this.maxLifespans = new Float32Array(this.maxParticles);
    this.opacities = new Float32Array(this.maxParticles);

    // Three.js BufferGeometry
    this.geometry = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.positions, 3);
    this.colorAttr = new THREE.BufferAttribute(this.colors, 3);
    this.sizeAttr = new THREE.BufferAttribute(this.sizes, 1);

    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.colorAttr.setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr.setUsage(THREE.DynamicDrawUsage);

    this.geometry.setAttribute('position', this.posAttr);
    this.geometry.setAttribute('color', this.colorAttr);
    this.geometry.setAttribute('size', this.sizeAttr);

    // Custom Points Material with procedural circular gradient texture
    this.material = new THREE.PointsMaterial({
      size: 1.0,
      map: this.textures.getParticleTexture(),
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.scene.add(this.points);

    // Free pool index tracker
    this.freeIndices = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.freeIndices.push(i);
      this.positions[i * 3 + 1] = -9999; // Hide off-screen
    }
  }

  spawnParticle(pos, vel, color, size, lifespan) {
    if (this.freeIndices.length === 0) return;
    const idx = this.freeIndices.pop();

    const p3 = idx * 3;
    this.positions[p3] = pos.x;
    this.positions[p3 + 1] = pos.y;
    this.positions[p3 + 2] = pos.z;

    this.velocities[p3] = vel.x;
    this.velocities[p3 + 1] = vel.y;
    this.velocities[p3 + 2] = vel.z;

    this.colors[p3] = color.r;
    this.colors[p3 + 1] = color.g;
    this.colors[p3 + 2] = color.b;

    this.sizes[idx] = size;
    this.lifespans[idx] = lifespan;
    this.maxLifespans[idx] = lifespan;
    this.opacities[idx] = 1.0;
  }

  // --- Specialized Emitters ---
  emitTireSmoke(pos, count = 2) {
    for (let i = 0; i < count; i++) {
      const p = new THREE.Vector3(
        pos.x + (Math.random() - 0.5) * 0.3,
        pos.y + 0.1,
        pos.z + (Math.random() - 0.5) * 0.3
      );
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        Math.random() * 0.8 + 0.2,
        Math.random() * 2.0 + 1.0
      );
      const c = new THREE.Color(0.85, 0.85, 0.88);
      this.spawnParticle(p, v, c, 1.2 + Math.random() * 0.8, 0.45);
    }
  }

  emitNitroFlames(exhaustPosList) {
    const flameColors = [
      new THREE.Color(0.0, 0.85, 1.0), // Cyan
      new THREE.Color(0.2, 0.4, 1.0),  // Deep blue
      new THREE.Color(0.9, 0.2, 1.0)   // Magenta-violet
    ];

    for (const pos of exhaustPosList) {
      const p = pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08, 0.05));
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.4,
        Math.random() * 8.0 + 12.0
      );
      const c = flameColors[Math.floor(Math.random() * flameColors.length)];
      this.spawnParticle(p, v, c, 1.4, 0.18);
    }
  }

  emitCollisionSparks(pos, count = 18) {
    for (let i = 0; i < count; i++) {
      const p = pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.8));
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 12.0,
        Math.random() * 8.0 + 2.0,
        (Math.random() - 0.5) * 12.0
      );
      // Bright orange/yellow fire sparks
      const c = Math.random() > 0.4 ? new THREE.Color(1.0, 0.8, 0.1) : new THREE.Color(1.0, 0.3, 0.05);
      this.spawnParticle(p, v, c, 0.8 + Math.random() * 0.6, 0.5 + Math.random() * 0.3);
    }
  }

  emitCoinSparkles(pos, count = 12) {
    for (let i = 0; i < count; i++) {
      const p = pos.clone();
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.0 + 2.0;
      const v = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.random() * 5.0 + 2.0,
        Math.sin(angle) * speed
      );
      const c = new THREE.Color(1.0, 0.9, 0.2);
      this.spawnParticle(p, v, c, 0.9, 0.4);
    }
  }

  update(delta) {
    let hasActive = false;

    for (let i = 0; i < this.maxParticles; i++) {
      if (this.lifespans[i] <= 0) continue;

      this.lifespans[i] -= delta;
      if (this.lifespans[i] <= 0) {
        // Recycle particle
        this.positions[i * 3 + 1] = -9999;
        this.freeIndices.push(i);
        continue;
      }

      hasActive = true;
      const progress = 1.0 - (this.lifespans[i] / this.maxLifespans[i]);
      const p3 = i * 3;

      // Update position with velocity and gravity
      this.positions[p3] += this.velocities[p3] * delta;
      this.positions[p3 + 1] += this.velocities[p3 + 1] * delta;
      this.positions[p3 + 2] += this.velocities[p3 + 2] * delta;

      // Subtle gravity
      this.velocities[p3 + 1] -= 5.0 * delta;

      // Scale size over time
      this.sizes[i] *= (1.0 + delta * 0.8);
    }

    if (hasActive || this.freeIndices.length < this.maxParticles) {
      this.posAttr.needsUpdate = true;
      this.colorAttr.needsUpdate = true;
      this.sizeAttr.needsUpdate = true;
    }
  }

  clear() {
    this.freeIndices = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.lifespans[i] = 0;
      this.positions[i * 3 + 1] = -9999;
      this.freeIndices.push(i);
    }
    this.posAttr.needsUpdate = true;
  }
}

