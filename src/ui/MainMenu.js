// VELOCITY RUSH 3D - Main Menu Screen Component
import { GAME_MODES } from '../game/Constants.js';

export class MainMenu {
  constructor(container, callbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.element = null;
    this.selectedMode = GAME_MODES.ENDLESS;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive active';
    this.element.id = 'main-menu-screen';

    this.element.innerHTML = `
      <div class="menu-container glass-panel">
        <div class="logo-box">
          <h1 class="game-title">VELOCITY RUSH 3D</h1>
          <div class="game-subtitle">HIGH-OCTANE HIGHWAY RACING</div>
        </div>

        <div class="top-status-bar">
          <div class="stat-pill coins">
            <span class="icon">🪙</span>
            <span id="menu-coin-count">0</span> COINS
          </div>
          <div class="stat-pill record">
            <span class="icon">🏆</span>
            BEST: <span id="menu-high-score">0</span> PTS
          </div>
        </div>

        <div class="mode-selector">
          <div class="mode-card selected" data-mode="${GAME_MODES.ENDLESS}">
            <div class="badge">SURVIVAL</div>
            <h3>ENDLESS HIGHWAY</h3>
            <p>Dodge dynamic traffic, chain near-miss combos, and push your machine to the limit.</p>
          </div>
          <div class="mode-card" data-mode="${GAME_MODES.TIME_TRIAL}">
            <div class="badge">AGAINST THE CLOCK</div>
            <h3>TIME TRIAL</h3>
            <p>60 seconds on the clock. Overtake traffic and make near misses to earn extra time!</p>
          </div>
          <div class="mode-card" data-mode="${GAME_MODES.TRAFFIC_CHALLENGE}">
            <div class="badge">PRECISION</div>
            <h3>TRAFFIC CHALLENGE</h3>
            <p>Execute 20 precision overtakes and score 20,000 points without totaling your car.</p>
          </div>
        </div>

        <div class="menu-actions">
          <button class="btn btn-secondary btn-icon" id="btn-menu-settings" title="Settings">⚙️</button>
          <button class="btn btn-secondary btn-icon" id="btn-menu-help" title="Controls">❓</button>
          <button class="btn btn-primary btn-play" id="btn-menu-play">START RACE</button>
          <button class="btn btn-secondary" id="btn-menu-garage">GARAGE 🚗</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    // Mode selection cards
    const modeCards = this.element.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
        modeCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedMode = card.getAttribute('data-mode');
        if (this.callbacks.onModeSelect) {
          this.callbacks.onModeSelect(this.selectedMode);
        }
      });
    });

    // Buttons
    this.element.querySelector('#btn-menu-play').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onPlay) this.callbacks.onPlay(this.selectedMode);
    });

    this.element.querySelector('#btn-menu-garage').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onGarage) this.callbacks.onGarage();
    });

    this.element.querySelector('#btn-menu-settings').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onSettings) this.callbacks.onSettings();
    });

    this.element.querySelector('#btn-menu-help').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onHelp) this.callbacks.onHelp();
    });
  }

  updateStats(coins, highScores) {
    const coinEl = this.element.querySelector('#menu-coin-count');
    const scoreEl = this.element.querySelector('#menu-high-score');
    if (coinEl) coinEl.textContent = coins.toLocaleString();
    if (scoreEl) {
      const best = highScores[this.selectedMode] || 0;
      scoreEl.textContent = best.toLocaleString();
    }
  }

  show() {
    this.element.classList.add('active');
  }

  hide() {
    this.element.classList.remove('active');
  }
}

