// VELOCITY RUSH 3D - Procedural Web Audio Engine & Synthwave Music System

export class AudioManager {
  constructor(storageManager) {
    this.storage = storageManager;
    const settings = this.storage.getSettings();
    this.sfxVolume = settings.soundVolume !== undefined ? settings.soundVolume : 0.8;
    this.musicVolume = settings.musicVolume !== undefined ? settings.musicVolume : 0.6;
    this.isMuted = false;

    this.ctx = null;
    this.isInitialized = false;

    // Engine Audio Nodes
    this.engineOsc1 = null;
    this.engineOsc2 = null;
    this.engineSub = null;
    this.engineFilter = null;
    this.engineGain = null;
    this.isEngineRunning = false;

    // Tire Screech Node
    this.tireNoise = null;
    this.tireFilter = null;
    this.tireGain = null;

    // Music System
    this.isMusicPlaying = false;
    this.musicTimer = null;
    this.musicBeat = 0;
    this.musicGain = null;
    this.sfxMasterGain = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) {
        console.warn('AudioManager: Web Audio API not supported in this browser.');
        return false;
      }
      this.ctx = new AudioCtx();

      // Master Busses
      this.sfxMasterGain = this.ctx.createGain();
      this.sfxMasterGain.gain.setValueAtTime(this.isMuted ? 0 : this.sfxVolume, this.ctx.currentTime);
      this.sfxMasterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.isMuted ? 0 : this.musicVolume, this.ctx.currentTime);
      this.musicGain.connect(this.ctx.destination);

      this.isInitialized = true;
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch((e) => console.warn('Could not resume audio:', e));
    }

    return true;
  }

  setSfxVolume(vol) {
    this.sfxVolume = Math.max(0, Math.min(1, vol));
    if (this.sfxMasterGain && this.ctx && !this.isMuted) {
      this.sfxMasterGain.gain.setTargetAtTime(this.sfxVolume, this.ctx.currentTime, 0.05);
    }
  }

  setMusicVolume(vol) {
    this.musicVolume = Math.max(0, Math.min(1, vol));
    if (this.musicGain && this.ctx && !this.isMuted) {
      this.musicGain.gain.setTargetAtTime(this.musicVolume, this.ctx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ctx) {
      const targetSfx = this.isMuted ? 0 : this.sfxVolume;
      const targetMusic = this.isMuted ? 0 : this.musicVolume;
      this.sfxMasterGain.gain.setTargetAtTime(targetSfx, this.ctx.currentTime, 0.05);
      this.musicGain.gain.setTargetAtTime(targetMusic, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  // --- Engine Sound Simulation ---
  startEngine() {
    if (!this.ensureContext() || this.isEngineRunning) return;

    try {
      const now = this.ctx.currentTime;

      // Primary Cylinder Osc (sawtooth for aggressive engine growl)
      this.engineOsc1 = this.ctx.createOscillator();
      this.engineOsc1.type = 'sawtooth';
      this.engineOsc1.frequency.setValueAtTime(45, now);

      // Harmonic Osc (triangle for exhaust body)
      this.engineOsc2 = this.ctx.createOscillator();
      this.engineOsc2.type = 'triangle';
      this.engineOsc2.frequency.setValueAtTime(90, now);

      // Deep Sub rumble (sine)
      this.engineSub = this.ctx.createOscillator();
      this.engineSub.type = 'sine';
      this.engineSub.frequency.setValueAtTime(30, now);

      // Engine Low-Pass Resonant Filter
      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = 'lowpass';
      this.engineFilter.frequency.setValueAtTime(250, now);
      this.engineFilter.Q.setValueAtTime(2.5, now);

      // Engine Gain
      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.setValueAtTime(0.15, now);

      // Connect nodes
      this.engineOsc1.connect(this.engineFilter);
      this.engineOsc2.connect(this.engineFilter);
      this.engineSub.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.sfxMasterGain);

      this.engineOsc1.start();
      this.engineOsc2.start();
      this.engineSub.start();
      this.isEngineRunning = true;
    } catch (e) {
      console.warn('Engine sound init error:', e);
    }
  }

  updateEngine(speedKmh, maxSpeedKmh, isAccelerating, isBoosting) {
    if (!this.isEngineRunning || !this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const speedRatio = Math.max(0, Math.min(1.2, speedKmh / maxSpeedKmh));

      // Simulate 5 gears with momentary drop during gear progression
      const gearProgress = (speedRatio * 5) % 1.0;
      const baseFreq = 42 + gearProgress * 55 + speedRatio * 40 + (isBoosting ? 30 : 0);

      this.engineOsc1.frequency.setTargetAtTime(baseFreq, now, 0.05);
      this.engineOsc2.frequency.setTargetAtTime(baseFreq * 2.0, now, 0.05);
      this.engineSub.frequency.setTargetAtTime(baseFreq * 0.5, now, 0.05);

      // Open filter more when accelerating / boosting
      const filterCutoff = 220 + speedRatio * 900 + (isAccelerating ? 250 : 0) + (isBoosting ? 500 : 0);
      this.engineFilter.frequency.setTargetAtTime(filterCutoff, now, 0.08);

      const targetGain = 0.12 + speedRatio * 0.18 + (isAccelerating ? 0.05 : 0) + (isBoosting ? 0.08 : 0);
      this.engineGain.gain.setTargetAtTime(targetGain, now, 0.05);
    } catch {
      // Audio param bounds safeguard
    }
  }

  stopEngine() {
    if (!this.isEngineRunning || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (this.engineGain) {
        this.engineGain.gain.setTargetAtTime(0, now, 0.05);
      }
      setTimeout(() => {
        try {
          if (this.engineOsc1) this.engineOsc1.stop();
          if (this.engineOsc2) this.engineOsc2.stop();
          if (this.engineSub) this.engineSub.stop();
        } catch {}
        this.isEngineRunning = false;
      }, 100);
    } catch {
      this.isEngineRunning = false;
    }
  }

  // --- Tire Screech ---
  setTireScreech(active, intensity = 1.0) {
    if (!this.ensureContext()) return;
    const now = this.ctx.currentTime;

    if (active) {
      if (!this.tireNoise) {
        // Create white noise buffer
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        this.tireFilter = this.ctx.createBiquadFilter();
        this.tireFilter.type = 'bandpass';
        this.tireFilter.frequency.setValueAtTime(1400, now);
        this.tireFilter.Q.setValueAtTime(3.5, now);

        this.tireGain = this.ctx.createGain();
        this.tireGain.gain.setValueAtTime(0, now);

        whiteNoise.connect(this.tireFilter);
        this.tireFilter.connect(this.tireGain);
        this.tireGain.connect(this.sfxMasterGain);

        whiteNoise.start();
        this.tireNoise = whiteNoise;
      }
      const gainVal = Math.min(0.25, 0.18 * intensity);
      this.tireGain.gain.setTargetAtTime(gainVal, now, 0.05);
      this.tireFilter.frequency.setTargetAtTime(1200 + intensity * 600, now, 0.05);
    } else {
      if (this.tireGain) {
        this.tireGain.gain.setTargetAtTime(0, now, 0.08);
      }
    }
  }

  // --- Sound Effects ---
  playCoinSound() {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;

      // Note 1: 987.77 Hz (B5)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(987.77, now);
      gain1.gain.setValueAtTime(0.22, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(this.sfxMasterGain);
      osc1.start(now);
      osc1.stop(now + 0.18);

      // Note 2: 1318.51 Hz (E6)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1318.51, now + 0.08);
      gain2.gain.setValueAtTime(0.25, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc2.connect(gain2);
      gain2.connect(this.sfxMasterGain);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.35);
    } catch {}
  }

  playCollisionSound(severity = 1.0) {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;

      // 1. Heavy bass thud
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(150, now);
      subOsc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
      subGain.gain.setValueAtTime(0.4 * severity, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      subOsc.connect(subGain);
      subGain.connect(this.sfxMasterGain);
      subOsc.start(now);
      subOsc.stop(now + 0.4);

      // 2. Metallic crash crunch (distorted noise)
      const bufferSize = this.ctx.sampleRate * 0.4;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.12));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const crashFilter = this.ctx.createBiquadFilter();
      crashFilter.type = 'lowpass';
      crashFilter.frequency.setValueAtTime(1800, now);
      crashFilter.frequency.exponentialRampToValueAtTime(300, now + 0.4);

      const crashGain = this.ctx.createGain();
      crashGain.gain.setValueAtTime(0.45 * severity, now);
      crashGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      noise.connect(crashFilter);
      crashFilter.connect(crashGain);
      crashGain.connect(this.sfxMasterGain);

      noise.start(now);
      noise.stop(now + 0.4);
    } catch {}
  }

  playNearMissSound() {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;
      // High speed stereo Doppler whoosh
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const pan = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.28);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.28, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      if (pan) {
        pan.pan.setValueAtTime(-0.8, now);
        pan.pan.linearRampToValueAtTime(0.8, now + 0.3);
        osc.connect(gain);
        gain.connect(pan);
        pan.connect(this.sfxMasterGain);
      } else {
        osc.connect(gain);
        gain.connect(this.sfxMasterGain);
      }

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {}
  }

  playNitroSound() {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.4);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, now);
      filter.Q.setValueAtTime(2.0, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxMasterGain);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch {}
  }

  playButtonClick() {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.sfxMasterGain);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }

  playCountdownBeep(isFinal = false) {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isFinal ? 880 : 440, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isFinal ? 0.45 : 0.2));

      osc.connect(gain);
      gain.connect(this.sfxMasterGain);
      osc.start(now);
      osc.stop(now + (isFinal ? 0.45 : 0.2));
    } catch {}
  }

  playGameOverStinger() {
    if (!this.ensureContext()) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [329.63, 293.66, 261.63, 220.0]; // E4, D4, C4, A3
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + idx * 0.16;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, t);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxMasterGain);

        osc.start(t);
        osc.stop(t + 0.3);
      });
    } catch {}
  }

  // --- Procedural Synthwave Music Generator ---
  startMusic() {
    if (!this.ensureContext() || this.isMusicPlaying) return;

    this.isMusicPlaying = true;
    this.musicBeat = 0;

    const tempo = 128; // BPM
    const stepDuration = 60 / tempo / 4; // 16th notes (~0.117s)

    // Bassline chord root progression: A2, F2, C3, G2 (4 bars, 16 steps each = 64 steps)
    const chordRoots = [110.0, 87.31, 130.81, 98.0]; // A, F, C, G

    const playStep = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const stepInMeasure = this.musicBeat % 16;
      const measure = Math.floor((this.musicBeat / 16) % 4);
      const rootFreq = chordRoots[measure];

      // 1. Kick Drum on beats 0, 4, 8, 12
      if (stepInMeasure % 4 === 0) {
        const kickOsc = this.ctx.createOscillator();
        const kickGain = this.ctx.createGain();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(140, now);
        kickOsc.frequency.exponentialRampToValueAtTime(45, now + 0.08);
        kickGain.gain.setValueAtTime(0.35, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        kickOsc.connect(kickGain);
        kickGain.connect(this.musicGain);
        kickOsc.start(now);
        kickOsc.stop(now + 0.12);
      }

      // 2. Snare Drum on beats 4 and 12
      if (stepInMeasure === 4 || stepInMeasure === 12) {
        const snareNoise = this.ctx.createBufferSource();
        const bufLen = Math.floor(this.ctx.sampleRate * 0.12);
        const noiseBuf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
        const data = noiseBuf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
        snareNoise.buffer = noiseBuf;

        const snareFilter = this.ctx.createBiquadFilter();
        snareFilter.type = 'highpass';
        snareFilter.frequency.setValueAtTime(800, now);

        const snareGain = this.ctx.createGain();
        snareGain.gain.setValueAtTime(0.2, now);
        snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        snareNoise.connect(snareFilter);
        snareFilter.connect(snareGain);
        snareGain.connect(this.musicGain);
        snareNoise.start(now);
        snareNoise.stop(now + 0.12);
      }

      // 3. Hi-Hat on offbeats (2, 6, 10, 14) and 16ths
      if (stepInMeasure % 2 === 1 || stepInMeasure % 4 === 2) {
        const hatOsc = this.ctx.createBufferSource();
        const bufLen = Math.floor(this.ctx.sampleRate * 0.04);
        const noiseBuf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
        const data = noiseBuf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
        hatOsc.buffer = noiseBuf;

        const hatFilter = this.ctx.createBiquadFilter();
        hatFilter.type = 'highpass';
        hatFilter.frequency.setValueAtTime(7000, now);

        const hatGain = this.ctx.createGain();
        hatGain.gain.setValueAtTime(0.08, now);
        hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        hatOsc.connect(hatFilter);
        hatFilter.connect(hatGain);
        hatGain.connect(this.musicGain);
        hatOsc.start(now);
        hatOsc.stop(now + 0.04);
      }

      // 4. Synthwave Arpeggiated Bassline (16th notes)
      const octaveMultiplier = (stepInMeasure % 2 === 0) ? 1.0 : 2.0;
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(rootFreq * 0.5 * octaveMultiplier, now);

      const bassFilter = this.ctx.createBiquadFilter();
      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(450, now);
      bassFilter.frequency.exponentialRampToValueAtTime(150, now + stepDuration * 0.9);

      bassGain.gain.setValueAtTime(0.2, now);
      bassGain.gain.exponentialRampToValueAtTime(0.01, now + stepDuration * 0.9);

      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(this.musicGain);

      bassOsc.start(now);
      bassOsc.stop(now + stepDuration);

      this.musicBeat++;
      this.musicTimer = setTimeout(playStep, stepDuration * 1000);
    };

    playStep();
  }

  stopMusic() {
    this.isMusicPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

