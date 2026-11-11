// VELOCITY RUSH 3D - Procedural Canvas Texture Generator
import * as THREE from 'three';

export class TextureGenerator {
  constructor() {
    this.cache = new Map();
  }

  getAsphaltTexture() {
    if (this.cache.has('asphalt')) return this.cache.get('asphalt');

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base dark asphalt
    ctx.fillStyle = '#1c1f24';
    ctx.fillRect(0, 0, 512, 512);

    // Fine asphalt grain noise
    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 35;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // Aggregate specks (small rocks and bitumen highlights)
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const radius = Math.random() * 1.5 + 0.5;
      const shade = Math.floor(Math.random() * 60 + 50);
      ctx.fillStyle = `rgb(${shade},${shade},${shade + 5})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Faint tire skid tracks running vertically
    ctx.fillStyle = 'rgba(10, 12, 15, 0.12)';
    ctx.fillRect(100, 0, 25, 512);
    ctx.fillRect(145, 0, 25, 512);
    ctx.fillRect(340, 0, 25, 512);
    ctx.fillRect(385, 0, 25, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 8);
    this.cache.set('asphalt', texture);
    return texture;
  }

  getLaneDashTexture() {
    if (this.cache.has('lane_dash')) return this.cache.get('lane_dash');

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 64, 256);

    // Crisp white reflective road dash
    ctx.fillStyle = '#ffffff';
    // Dash takes up upper half, blank on lower half
    ctx.fillRect(16, 20, 32, 140);

    // Subtle edge wear
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillRect(14, 20, 2, 140);
    ctx.fillRect(48, 20, 2, 140);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 4);
    this.cache.set('lane_dash', texture);
    return texture;
  }

  getRoadEdgeTexture() {
    if (this.cache.has('road_edge')) return this.cache.get('road_edge');

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Continuous bright yellow solid highway boundary line
    ctx.fillStyle = '#ffd000';
    ctx.fillRect(20, 0, 24, 256);
    ctx.fillStyle = '#ffaa00';
    ctx.fillRect(22, 0, 4, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 4);
    this.cache.set('road_edge', texture);
    return texture;
  }

  getCurbTexture() {
    if (this.cache.has('curb')) return this.cache.get('curb');

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Alternating red and white curb stripes
    ctx.fillStyle = '#d32f2f';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 64, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 6);
    this.cache.set('curb', texture);
    return texture;
  }

  getGuardrailTexture() {
    if (this.cache.has('guardrail')) return this.cache.get('guardrail');

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Metallic corrugated steel with shadows
    ctx.fillStyle = '#8a959e';
    ctx.fillRect(0, 0, 128, 64);

    const grad = ctx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0, '#535c64');
    grad.addColorStop(0.2, '#9ba7b0');
    grad.addColorStop(0.4, '#c0ccd6');
    grad.addColorStop(0.5, '#636c74');
    grad.addColorStop(0.7, '#9ba7b0');
    grad.addColorStop(0.9, '#c0ccd6');
    grad.addColorStop(1, '#535c64');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 64);

    // Bolts
    ctx.fillStyle = '#3a4147';
    ctx.beginPath();
    ctx.arc(32, 32, 5, 0, Math.PI * 2);
    ctx.arc(96, 32, 5, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 1);
    this.cache.set('guardrail', texture);
    return texture;
  }

  getBuildingTexture(theme = 'modern') {
    const key = `building_${theme}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Dark sleek skyscraper glass/concrete
    ctx.fillStyle = theme === 'cyber' ? '#0d111a' : '#141a24';
    ctx.fillRect(0, 0, 256, 512);

    // Grid of glowing and dark windows
    const cols = 8;
    const rows = 24;
    const winWidth = 20;
    const winHeight = 12;
    const gapX = 12;
    const gapY = 8;
    const startX = 8;
    const startY = 16;

    const windowColors = [
      'rgba(255, 230, 150, 0.85)', // Warm gold
      'rgba(180, 230, 255, 0.85)', // Cool cyan
      'rgba(255, 120, 80, 0.75)',  // Orange
      'rgba(20, 30, 45, 0.95)',    // Dark / off window
      'rgba(20, 30, 45, 0.95)',
      'rgba(20, 30, 45, 0.95)'
    ];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * (winWidth + gapX);
        const y = startY + r * (winHeight + gapY);
        const colIdx = Math.floor(Math.random() * windowColors.length);
        ctx.fillStyle = windowColors[colIdx];
        ctx.fillRect(x, y, winWidth, winHeight);

        // Window frame border
        ctx.strokeStyle = '#080c12';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, winWidth, winHeight);
      }
    }

    // Vertical architectural mullions
    ctx.fillStyle = '#0a0d14';
    for (let c = 0; c <= cols; c++) {
      ctx.fillRect(startX + c * (winWidth + gapX) - 3, 0, 3, 512);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.cache.set(key, texture);
    return texture;
  }

  getHeadlightGlowTexture() {
    if (this.cache.has('headlight_glow')) return this.cache.get('headlight_glow');

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.2, 'rgba(220, 245, 255, 0.8)');
    grad.addColorStop(0.5, 'rgba(100, 200, 255, 0.3)');
    grad.addColorStop(1, 'rgba(0, 150, 255, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set('headlight_glow', texture);
    return texture;
  }

  getTaillightGlowTexture() {
    if (this.cache.has('taillight_glow')) return this.cache.get('taillight_glow');

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 200, 200, 1.0)');
    grad.addColorStop(0.25, 'rgba(255, 30, 30, 0.8)');
    grad.addColorStop(0.6, 'rgba(200, 0, 0, 0.25)');
    grad.addColorStop(1, 'rgba(120, 0, 0, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set('taillight_glow', texture);
    return texture;
  }

  getParticleTexture() {
    if (this.cache.has('particle')) return this.cache.get('particle');

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
    grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set('particle', texture);
    return texture;
  }

  getCoinTexture() {
    if (this.cache.has('coin')) return this.cache.get('coin');

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Outer gold ring
    const grad = ctx.createRadialGradient(64, 64, 20, 64, 64, 60);
    grad.addColorStop(0, '#fff4a3');
    grad.addColorStop(0.4, '#ffd700');
    grad.addColorStop(0.8, '#d4af37');
    grad.addColorStop(1, '#996515');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 58, 0, Math.PI * 2);
    ctx.fill();

    // Inner embossed circle
    ctx.strokeStyle = '#fff8b3';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(64, 64, 48, 0, Math.PI * 2);
    ctx.stroke();

    // V-Rush Logo "V"
    ctx.fillStyle = '#664400';
    ctx.font = 'bold 52px Montserrat, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('V', 64, 66);

    ctx.fillStyle = '#ffffff';
    ctx.fillText('V', 63, 64);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set('coin', texture);
    return texture;
  }
}

