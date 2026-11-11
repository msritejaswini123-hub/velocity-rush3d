// VELOCITY RUSH 3D - Racing HUD Component
import { GAME_MODES } from '../game/Constants.js';

export class GameHUD {
  constructor(container, inputManager, callbacks) {
    this.container = container;
    this.input = inputManager;
    this.callbacks = callbacks;
    this.element = null;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.id = 'hud-screen';
    this.element.style.display = 'none';

    this.element.innerHTML = `
      <!-- Top HUD Bar -->
      <div class="hud-top-bar">
        <div class="hud-stats-left">
          <div class="hud-score-box">
            <span class="hud-score-label">SCORE</span>
            <span class="hud-score-value" id="hud-score">0</span>
          </div>
          <div class="hud-sub-stats">
            <div class="hud-pill distance">
              <span>🛣️</span> <span id="hud-distance">0</span> m
            </div>
            <div class="hud-pill coins">
              <span>🪙</span> <span id="hud-coins">0</span>
            </div>
          </div>
        </div>

        <div class="hud-center-status">
          <div class="combo-badge" id="hud-combo">COMBO 2X</div>
          <div class="time-trial-clock" id="hud-timer">60.0</div>
        </div>

        <div class="hud-top-right">
          <div class="health-meter-box">
            <span class="health-label">ARMOR INTEGRITY</span>
            <div class="health-bar-track">
              <div class="health-bar-fill" id="hud-health-fill" style="width: 100%;"></div>
            </div>
          </div>
          <button class="btn-hud" id="btn-hud-camera" title="Change Camera (C)">🎥</button>
          <button class="btn-hud" id="btn-hud-pause" title="Pause (ESC)">⏸️</button>
        </div>
      </div>

      <!-- Floating Notification Container -->
      <div class="stinger-container" id="hud-stingers"></div>

      <!-- Bottom Speedometer & Controls -->
      <div class="hud-bottom-bar">
        <!-- Touch Controls (Mobile / Tablets) -->
        <div class="touch-controls" id="touch-controls-box">
          <div class="touch-group">
            <button class="touch-btn" id="touch-left">◀</button>
            <button class="touch-btn" id="touch-right">▶</button>
          </div>
          <div class="touch-group">
            <button class="touch-btn nitro" id="touch-nitro">⚡</button>
            <button class="touch-btn" id="touch-brake">🛑</button>
            <button class="touch-btn" id="touch-gas">🏎️</button>
          </div>
        </div>

        <!-- Speedometer Cluster -->
        <div class="speedometer-cluster">
          <div class="nitro-gauge-box">
            <div class="nitro-gauge-track">
              <div class="nitro-gauge-fill" id="hud-nitro-fill" style="height: 100%;"></div>
            </div>
            <span class="nitro-label">NITRO</span>
          </div>

          <div class="speedo-dial-box">
            <div class="speedo-digital-row">
              <span class="speedo-number" id="hud-speed">0</span>
              <span class="speedo-unit">KM/H</span>
            </div>
            <div class="speedo-gear-pill" id="hud-gear">GEAR 1</div>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
    this.bindTouchControls();
  }

  bindEvents() {
    this.element.querySelector('#btn-hud-pause').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onPause) this.callbacks.onPause();
    });

    this.element.querySelector('#btn-hud-camera').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onCamera) this.callbacks.onCamera();
    });
  }

  bindTouchControls() {
    const leftBtn = this.element.querySelector('#touch-left');
    const rightBtn = this.element.querySelector('#touch-right');
    const gasBtn = this.element.querySelector('#touch-gas');
    const brakeBtn = this.element.querySelector('#touch-brake');
    const nitroBtn = this.element.querySelector('#touch-nitro');

    this.input.bindTouchButton(leftBtn, 'left');
    this.input.bindTouchButton(rightBtn, 'right');
    this.input.bindTouchButton(gasBtn, 'gas');
    this.input.bindTouchButton(brakeBtn, 'brake');
    this.input.bindTouchButton(nitroBtn, 'nitro');
  }

  update(playerCar, scoreManager) {
    if (!playerCar) return;

    // Speed & Gear
    const speed = Math.floor(playerCar.speedKmh);
    const speedEl = this.element.querySelector('#hud-speed');
    if (speedEl) speedEl.textContent = speed;

    const gearEl = this.element.querySelector('#hud-gear');
    if (gearEl) {
      let gear = 1;
      if (speed > 190) gear = 6;
      else if (speed > 150) gear = 5;
      else if (speed > 110) gear = 4;
      else if (speed > 70) gear = 3;
      else if (speed > 30) gear = 2;
      gearEl.textContent = `GEAR ${gear}`;
    }

    // Score & Distance
    const scoreEl = this.element.querySelector('#hud-score');
    if (scoreEl) scoreEl.textContent = scoreManager.score.toLocaleString();

    const distEl = this.element.querySelector('#hud-distance');
    if (distEl) distEl.textContent = Math.floor(scoreManager.distance).toLocaleString();

    const coinsEl = this.element.querySelector('#hud-coins');
    if (coinsEl) coinsEl.textContent = scoreManager.coins;

    // Health
    const healthFill = this.element.querySelector('#hud-health-fill');
    if (healthFill) {
      const healthPct = Math.max(0, Math.min(100, (playerCar.health / playerCar.maxHealth) * 100));
      healthFill.style.width = `${healthPct}%`;
      if (healthPct < 30) {
        healthFill.style.background = '#ff0055';
      } else {
        healthFill.style.background = 'linear-gradient(90deg, #ff0055 0%, #ffaa00 50%, #00ff88 100%)';
      }
    }

    // Nitro
    const nitroFill = this.element.querySelector('#hud-nitro-fill');
    if (nitroFill) {
      const nitroPct = Math.max(0, Math.min(100, (playerCar.nitro / playerCar.maxNitro) * 100));
      nitroFill.style.height = `${nitroPct}%`;
    }

    // Combo
    const comboEl = this.element.querySelector('#hud-combo');
    if (comboEl) {
      if (scoreManager.combo > 1) {
        comboEl.classList.add('active');
        comboEl.textContent = `COMBO ${scoreManager.combo}X 🔥`;
      } else {
        comboEl.classList.remove('active');
      }
    }

    // Timer (Time Trial)
    const timerEl = this.element.querySelector('#hud-timer');
    if (timerEl) {
      if (scoreManager.mode === GAME_MODES.TIME_TRIAL) {
        timerEl.classList.add('active');
        const remaining = Math.max(0, scoreManager.timeRemaining);
        timerEl.textContent = remaining.toFixed(1);
        if (remaining <= 10.0) {
          timerEl.classList.add('urgent');
        } else {
          timerEl.classList.remove('urgent');
        }
      } else {
        timerEl.classList.remove('active');
      }
    }
  }

  showPopup(data) {
    const stingerBox = this.element.querySelector('#hud-stingers');
    if (!stingerBox) return;

    const popup = document.createElement('div');
    popup.className = `stinger-popup ${data.type}`;
    popup.textContent = data.text;
    stingerBox.appendChild(popup);

    setTimeout(() => {
      if (popup.parentNode) popup.parentNode.removeChild(popup);
    }, 1200);
  }

  show() {
    this.element.style.display = 'flex';
  }

  hide() {
    this.element.style.display = 'none';
  }
}

