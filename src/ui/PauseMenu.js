// VELOCITY RUSH 3D - Pause Screen Component

export class PauseMenu {
  constructor(container, callbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.element = null;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive';
    this.element.id = 'pause-screen';

    this.element.innerHTML = `
      <div class="results-box glass-panel">
        <h2 style="color: var(--primary-glow); text-shadow: 0 0 20px rgba(0,240,255,0.6);">RACE PAUSED</h2>
        <div style="font-size: 0.95rem; color: #94a3b8; margin-top: -10px;">TAKE A BREATHER BEFORE HITTING THE NITRO</div>

        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; margin-top: 15px;">
          <button class="btn btn-primary" id="btn-pause-resume">RESUME RACE</button>
          <button class="btn btn-secondary" id="btn-pause-restart">RESTART</button>
          <button class="btn btn-secondary" id="btn-pause-settings">SETTINGS</button>
          <button class="btn btn-accent" id="btn-pause-menu">MAIN MENU</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    this.element.querySelector('#btn-pause-resume').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onResume) this.callbacks.onResume();
    });

    this.element.querySelector('#btn-pause-restart').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onRestart) this.callbacks.onRestart();
    });

    this.element.querySelector('#btn-pause-settings').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onSettings) this.callbacks.onSettings();
    });

    this.element.querySelector('#btn-pause-menu').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onMainMenu) this.callbacks.onMainMenu();
    });
  }

  show() {
    this.element.classList.add('active');
  }

  hide() {
    this.element.classList.remove('active');
  }
}

