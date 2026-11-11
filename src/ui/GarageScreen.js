// VELOCITY RUSH 3D - Garage & Car Customization Component

export class GarageScreen {
  constructor(container, garageManager, callbacks) {
    this.container = container;
    this.garage = garageManager;
    this.callbacks = callbacks;
    this.element = null;

    this.cars = this.garage.getAllCars();
    this.currentIndex = 0;

    // Default color palette
    this.palette = ['#00f0ff', '#ff5500', '#e60050', '#ffd700', '#9900ff', '#1a1e24', '#00ff88'];

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive';
    this.element.id = 'garage-screen';

    this.element.innerHTML = `
      <div class="garage-container glass-panel">
        <div class="garage-header">
          <div>
            <h2>SHOWROOM GARAGE</h2>
            <div style="font-size: 0.9rem; color: #94a3b8;">SELECT OR UNLOCK HIGH-PERFORMANCE MACHINES</div>
          </div>
          <div class="stat-pill coins">
            <span class="icon">🪙</span>
            <span id="garage-coins-val">0</span> COINS
          </div>
        </div>

        <div class="garage-content">
          <div class="garage-viewer-hint">
            <div class="carousel-nav">
              <button class="btn btn-secondary btn-icon" id="btn-car-prev">◀</button>
              <span style="font-weight: 800; font-size: 1.1rem; letter-spacing: 2px;" id="garage-car-index">1 / 5</span>
              <button class="btn btn-secondary btn-icon" id="btn-car-next">▶</button>
            </div>
          </div>

          <div class="car-specs-panel">
            <div class="car-title-box">
              <div class="tier-tag" id="garage-car-tier">CLASS C</div>
              <h3 id="garage-car-name">Phantom GT</h3>
              <p style="font-size: 0.85rem; color: #94a3b8; margin-top: 4px;" id="garage-car-desc"></p>
            </div>

            <div class="stat-bar-group">
              <div class="stat-row">
                <div class="stat-label-box">
                  <span>TOP SPEED</span>
                  <span id="stat-val-speed">180 KM/H</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-speed" style="width: 50%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>ACCELERATION</span>
                  <span id="stat-val-accel">65%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-accel" style="width: 65%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>HANDLING</span>
                  <span id="stat-val-handling">70%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-handling" style="width: 70%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>BRAKING</span>
                  <span id="stat-val-braking">60%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-braking" style="width: 60%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>ARMOR INTEGRITY</span>
                  <span id="stat-val-armor">75%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-armor" style="width: 75%;"></div></div>
              </div>
            </div>

            <div>
              <div style="font-size: 0.8rem; font-weight: 800; color: #cbd5e1; margin-bottom: 8px;">CUSTOM PAINT FINISH</div>
              <div class="color-picker-box" id="garage-color-palette"></div>
            </div>

            <div style="display: flex; gap: 12px; margin-top: 10px;">
              <button class="btn btn-primary" style="flex: 1;" id="btn-car-action">SELECT VEHICLE</button>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <button class="btn btn-secondary" id="btn-garage-back">BACK TO MENU</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.renderColorPalette();
    this.bindEvents();
  }

  renderColorPalette() {
    const paletteBox = this.element.querySelector('#garage-color-palette');
    paletteBox.innerHTML = '';
    for (const color of this.palette) {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.style.backgroundColor = color;
      swatch.addEventListener('click', () => {
        if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
        this.selectColor(color);
      });
      paletteBox.appendChild(swatch);
    }
  }

  selectColor(color) {
    const car = this.cars[this.currentIndex];
    this.garage.setCarColor(car.id, color);
    if (this.callbacks.onColorChange) {
      this.callbacks.onColorChange(car.id, color);
    }
  }

  bindEvents() {
    this.element.querySelector('#btn-car-prev').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      this.currentIndex = (this.currentIndex - 1 + this.cars.length) % this.cars.length;
      this.updateView();
    });

    this.element.querySelector('#btn-car-next').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      this.currentIndex = (this.currentIndex + 1) % this.cars.length;
      this.updateView();
    });

    this.element.querySelector('#btn-car-action').addEventListener('click', () => {
      const car = this.cars[this.currentIndex];
      if (car.unlocked) {
        if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
        this.garage.selectCar(car.id);
        this.updateView();
        if (this.callbacks.onCarSelect) this.callbacks.onCarSelect(car);
      } else {
        // Buy attempt
        if (this.garage.canAfford(car.id)) {
          if (this.callbacks.onAudioBuy) this.callbacks.onAudioBuy();
          this.garage.buyCar(car.id);
          this.cars = this.garage.getAllCars();
          this.updateView();
          if (this.callbacks.onCarSelect) this.callbacks.onCarSelect(car);
        } else {
          alert('Not enough coins! Race on the highway to earn more coins.');
        }
      }
    });

    this.element.querySelector('#btn-garage-back').addEventListener('click', () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      if (this.callbacks.onBack) this.callbacks.onBack();
    });
  }

  updateView() {
    this.cars = this.garage.getAllCars();
    const car = this.cars[this.currentIndex];
    const selectedCar = this.garage.getSelectedCar();

    this.element.querySelector('#garage-car-index').textContent = `${this.currentIndex + 1} / ${this.cars.length}`;
    this.element.querySelector('#garage-car-tier').textContent = car.tier;
    this.element.querySelector('#garage-car-name').textContent = car.name;
    this.element.querySelector('#garage-car-desc').textContent = car.description;

    // Coins
    this.element.querySelector('#garage-coins-val').textContent = this.garage.storage.getCoins().toLocaleString();

    // Stats
    const stats = car.stats;
    this.element.querySelector('#stat-val-speed').textContent = `${stats.topSpeed} KM/H`;
    this.element.querySelector('#stat-fill-speed').style.width = `${(stats.topSpeed / 300) * 100}%`;

    this.element.querySelector('#stat-val-accel').textContent = `${stats.acceleration}%`;
    this.element.querySelector('#stat-fill-accel').style.width = `${stats.acceleration}%`;

    this.element.querySelector('#stat-val-handling').textContent = `${stats.handling}%`;
    this.element.querySelector('#stat-fill-handling').style.width = `${stats.handling}%`;

    this.element.querySelector('#stat-val-braking').textContent = `${stats.braking}%`;
    this.element.querySelector('#stat-fill-braking').style.width = `${stats.braking}%`;

    this.element.querySelector('#stat-val-armor').textContent = `${stats.armor}%`;
    this.element.querySelector('#stat-fill-armor').style.width = `${stats.armor}%`;

    // Action button state
    const actionBtn = this.element.querySelector('#btn-car-action');
    if (car.unlocked) {
      if (selectedCar.id === car.id) {
        actionBtn.textContent = 'SELECTED ✓';
        actionBtn.className = 'btn btn-secondary';
        actionBtn.style.pointerEvents = 'none';
      } else {
        actionBtn.textContent = 'SELECT VEHICLE';
        actionBtn.className = 'btn btn-primary';
        actionBtn.style.pointerEvents = 'auto';
      }
    } else {
      const canAfford = this.garage.canAfford(car.id);
      actionBtn.textContent = `UNLOCK FOR ${car.price.toLocaleString()} COINS`;
      actionBtn.className = canAfford ? 'btn btn-accent' : 'btn btn-secondary';
      actionBtn.style.pointerEvents = 'auto';
    }

    if (this.callbacks.onPreviewCar) {
      this.callbacks.onPreviewCar(car);
    }
  }

  show() {
    this.element.classList.add('active');
    // Find index of selected car
    const selected = this.garage.getSelectedCar();
    this.currentIndex = Math.max(0, this.cars.findIndex(c => c.id === selected.id));
    this.updateView();
  }

  hide() {
    this.element.classList.remove('active');
  }
}

