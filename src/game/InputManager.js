// VELOCITY RUSH 3D - Input Manager (Keyboard, Touch & Gamepad)

export class InputManager {
  constructor() {
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      handbrake: false,
      boost: false
    };

    // Normalized axes (-1 to +1)
    this.steerAxis = 0;
    this.throttleAxis = 0;

    // Single-frame action triggers
    this.actionPause = false;
    this.actionCamera = false;
    this.actionRestart = false;

    this.onPauseCallback = null;
    this.onCameraCallback = null;

    this.initKeyboard();
    this.initWindowListeners();
  }

  initKeyboard() {
    window.addEventListener('keydown', (e) => {
      // Prevent browser default scrolling for racing game controls
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true;
          break;
        case 'Space':
          this.keys.handbrake = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'KeyN':
          this.keys.boost = true;
          break;
        case 'Escape':
        case 'KeyP':
          if (this.onPauseCallback) this.onPauseCallback();
          break;
        case 'KeyC':
          if (this.onCameraCallback) this.onCameraCallback();
          break;
      }
      this.updateAxes();
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false;
          break;
        case 'Space':
          this.keys.handbrake = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'KeyN':
          this.keys.boost = false;
          break;
      }
      this.updateAxes();
    });
  }

  initWindowListeners() {
    // Reset all inputs when window loses focus
    window.addEventListener('blur', () => {
      this.resetInputs();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.resetInputs();
      }
    });
  }

  updateAxes() {
    // Steering: -1 (left) to +1 (right)
    let s = 0;
    if (this.keys.left) s -= 1;
    if (this.keys.right) s += 1;
    this.steerAxis = s;

    // Throttle / Brake: -1 (brake) to +1 (accelerate)
    let t = 0;
    if (this.keys.forward) t += 1;
    if (this.keys.backward) t -= 1;
    this.throttleAxis = t;
  }

  resetInputs() {
    this.keys.forward = false;
    this.keys.backward = false;
    this.keys.left = false;
    this.keys.right = false;
    this.keys.handbrake = false;
    this.keys.boost = false;
    this.steerAxis = 0;
    this.throttleAxis = 0;
  }

  // Mobile / Touch controls binding
  bindTouchButton(element, action) {
    if (!element) return;

    const startHandler = (e) => {
      e.preventDefault();
      if (action === 'left') this.keys.left = true;
      if (action === 'right') this.keys.right = true;
      if (action === 'gas') this.keys.forward = true;
      if (action === 'brake') this.keys.backward = true;
      if (action === 'nitro') this.keys.boost = true;
      this.updateAxes();
    };

    const endHandler = (e) => {
      e.preventDefault();
      if (action === 'left') this.keys.left = false;
      if (action === 'right') this.keys.right = false;
      if (action === 'gas') this.keys.forward = false;
      if (action === 'brake') this.keys.backward = false;
      if (action === 'nitro') this.keys.boost = false;
      this.updateAxes();
    };

    element.addEventListener('touchstart', startHandler, { passive: false });
    element.addEventListener('touchend', endHandler, { passive: false });
    element.addEventListener('touchcancel', endHandler, { passive: false });
    element.addEventListener('mousedown', startHandler);
    element.addEventListener('mouseup', endHandler);
    element.addEventListener('mouseleave', endHandler);
  }
}

