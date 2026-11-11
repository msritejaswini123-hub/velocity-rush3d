// VELOCITY RUSH 3D - How to Play & Controls Modal Component

export class InstructionsModal {
  constructor(container, callbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.element = null;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive';
    this.element.id = 'instructions-screen';

    this.element.innerHTML = `
      <div class="modal-container glass-panel" style="max-width: 650px;">
        <div class="modal-header">
          <h2>HOW TO PLAY & CONTROLS</h2>
          <button class="btn btn-secondary btn-icon" id="btn-help-close">✕</button>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4 style="color: var(--primary-glow); margin-bottom: 10px;">DESKTOP CONTROLS</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
              <li><strong>W / UP ARROW</strong>: Accelerate</li>
              <li><strong>S / DOWN ARROW</strong>: Brake / Reverse</li>
              <li><strong>A / LEFT ARROW</strong>: Steer Left</li>
              <li><strong>D / RIGHT ARROW</strong>: Steer Right</li>
              <li><strong>SHIFT / N</strong>: Nitro Boost ⚡</li>
              <li><strong>SPACE</strong>: Handbrake / Drift</li>
              <li><strong>C</strong>: Change Camera View</li>
              <li><strong>ESC / P</strong>: Pause Game</li>
            </ul>
          </div>

          <div>
            <h4 style="color: var(--gold-color); margin-bottom: 10px;">MOBILE CONTROLS</h4>
            <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
              On touch devices, use the virtual buttons:
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
              <li><strong>◀ / ▶</strong>: Steer Left and Right</li>
              <li><strong>🏎️</strong>: Throttle / Gas</li>
              <li><strong>🛑</strong>: Foot Brake</li>
              <li><strong>⚡</strong>: Nitro Super Boost</li>
            </ul>
          </div>
        </div>

        <div style="background: rgba(0, 240, 255, 0.08); border-left: 4px solid var(--primary-glow); padding: 12px 16px; border-radius: 4px; font-size: 0.85rem; line-height: 1.4;">
          <strong>PRO TIPS:</strong><br>
          • Pass close to traffic vehicles at high speed to score massive <strong>NEAR MISS</strong> bonuses (+500 pts)!<br>
          • Chain consecutive passes and near misses without scraping the guardrails to build up to a <strong>5X COMBO</strong> multiplier!<br>
          • Collect floating <strong>GOLD COINS</strong> to unlock exotic supercars in the Showroom Garage!
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="btn btn-primary" id="btn-help-gotit">GOT IT, LET'S RACE!</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    const close = () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      this.hide();
    };

    this.element.querySelector('#btn-help-close').addEventListener('click', close);
    this.element.querySelector('#btn-help-gotit').addEventListener('click', close);
  }

  show() {
    this.element.classList.add('active');
  }

  hide() {
    this.element.classList.remove('active');
  }
}

