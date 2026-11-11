// VELOCITY RUSH 3D - High Precision Game Loop
export class GameLoop {
  constructor(updateFn, renderFn) {
    this.update = updateFn;
    this.render = renderFn;

    this.isRunning = false;
    this.lastTime = 0;
    this.rafId = null;

    this.boundTick = this.tick.bind(this);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame(this.boundTick);
  }

  stop() {
    this.isRunning = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  tick(currentTime) {
    if (!this.isRunning) return;

    // Delta time in seconds, clamped to 0.1s to avoid physics explosions on lag spikes
    const rawDelta = (currentTime - this.lastTime) / 1000;
    const delta = Math.min(0.08, Math.max(0.001, rawDelta));
    this.lastTime = currentTime;

    // Execute update and render
    this.update(delta);
    this.render();

    this.rafId = requestAnimationFrame(this.boundTick);
  }
}

