// VELOCITY RUSH 3D - Results & Game Over Screen Component

export class ResultsScreen {
  constructor(container, callbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.element = null;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive';
    this.element.id = 'results-screen';

    this.element.innerHTML = `
      <div class="results-box glass-panel">
        <div id="results-record-badge" class="record-badge" style="display: none;">NEW HIGH SCORE RECORD!</div>
        <h2 id="results-title">RACE FINISHED</h2>

        <div class="results-stats-grid">
          <div class="result-card">
            <span class="label">FINAL SCORE</span>
            <span class="value" id="res-score" style="color: var(--primary-glow);">0</span>
          </div>

          <div class="result-card">
            <span class="label">DISTANCE</span>
            <span class="value" id="res-distance">0 m</span>
          </div>

          <div class="result-card">
            <span class="label">COINS EARNED</span>
            <span class="value" id="res-coins" style="color: var(--gold-color);">0</span>
          </div>

          <div class="result-card">
            <span class="label">NEAR MISSES</span>
            <span class="value" id="res-nearmiss">0</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px; width: 100%; margin-top: 10px;">
          <button class="btn btn-primary" style="flex: 1.5;" id="btn-results-retry">RACE AGAIN</button>
          <button class="btn btn-secondary" style="flex: 1;" id="btn-results-garage">GARAGE</button>
          <button class="btn btn-secondary" style="flex: 1;" id="btn-results-menu">MENU</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    this.element.querySelector('#btn-results-retry').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onRetry) this.callbacks.onRetry();
    });

    this.element.querySelector('#btn-results-garage').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onGarage) this.callbacks.onGarage();
    });

    this.element.querySelector('#btn-results-menu').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onMainMenu) this.callbacks.onMainMenu();
    });
  }

  show(data) {
    this.element.classList.add('active');

    // Title customization
    const titleEl = this.element.querySelector('#results-title');
    if (data.reason === 'crash') {
      titleEl.textContent = 'CAR TOTALED!';
      titleEl.style.color = 'var(--danger-color)';
    } else if (data.reason === 'time_up') {
      titleEl.textContent = 'TIME EXPIRED!';
      titleEl.style.color = 'var(--warning-color)';
    } else if (data.reason === 'challenge_won') {
      titleEl.textContent = 'CHALLENGE COMPLETE!';
      titleEl.style.color = 'var(--success-color)';
    } else {
      titleEl.textContent = 'RACE OVER';
      titleEl.style.color = 'var(--primary-glow)';
    }

    // New record badge
    const badge = this.element.querySelector('#results-record-badge');
    badge.style.display = data.isNewRecord ? 'block' : 'none';

    // Numbers
    this.element.querySelector('#res-score').textContent = data.score.toLocaleString();
    this.element.querySelector('#res-distance').textContent = `${data.distance.toLocaleString()} m`;
    this.element.querySelector('#res-coins').textContent = data.coins;
    this.element.querySelector('#res-nearmiss').textContent = data.nearMisses;
  }

  hide() {
    this.element.classList.remove('active');
  }
}

