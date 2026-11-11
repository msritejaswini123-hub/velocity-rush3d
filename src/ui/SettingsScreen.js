// VELOCITY RUSH 3D - Settings Screen Component

export class SettingsScreen {
  constructor(container, storageManager, audioManager, callbacks) {
    this.container = container;
    this.storage = storageManager;
    this.audio = audioManager;
    this.callbacks = callbacks;
    this.element = null;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'screen interactive';
    this.element.id = 'settings-screen';

    const settings = this.storage.getSettings();

    this.element.innerHTML = `
      <div class="modal-container glass-panel">
        <div class="modal-header">
          <h2>SETTINGS</h2>
          <button class="btn btn-secondary btn-icon" id="btn-settings-close">✕</button>
        </div>

        <div class="setting-row">
          <label>SOUND EFFECTS</label>
          <div class="setting-control">
            <input type="range" id="setting-sfx" min="0" max="1" step="0.05" value="${settings.soundVolume}">
            <span id="setting-sfx-val">${Math.round(settings.soundVolume * 100)}%</span>
          </div>
        </div>

        <div class="setting-row">
          <label>SYNTHWAVE MUSIC</label>
          <div class="setting-control">
            <input type="range" id="setting-music" min="0" max="1" step="0.05" value="${settings.musicVolume}">
            <span id="setting-music-val">${Math.round(settings.musicVolume * 100)}%</span>
          </div>
        </div>

        <div class="setting-row">
          <label>GRAPHICS QUALITY</label>
          <div class="setting-control">
            <select id="setting-graphics" style="padding: 8px 12px; background: rgba(15,23,42,0.9); border: 1px solid var(--border-light); color: #fff; border-radius: 6px; font-weight: 700;">
              <option value="LOW" ${settings.graphicsQuality === 'LOW' ? 'selected' : ''}>LOW (Max FPS)</option>
              <option value="MEDIUM" ${settings.graphicsQuality === 'MEDIUM' ? 'selected' : ''}>MEDIUM (Balanced)</option>
              <option value="HIGH" ${settings.graphicsQuality === 'HIGH' ? 'selected' : ''}>HIGH (Ultra Glow)</option>
            </select>
          </div>
        </div>

        <div class="setting-row">
          <label>CAMERA PERSPECTIVE</label>
          <div class="setting-control">
            <select id="setting-camera" style="padding: 8px 12px; background: rgba(15,23,42,0.9); border: 1px solid var(--border-light); color: #fff; border-radius: 6px; font-weight: 700;">
              <option value="chase" ${settings.cameraMode === 'chase' ? 'selected' : ''}>CHASE (Standard)</option>
              <option value="close" ${settings.cameraMode === 'close' ? 'selected' : ''}>CLOSE (Action)</option>
              <option value="hood" ${settings.cameraMode === 'hood' ? 'selected' : ''}>HOOD (First-Person)</option>
            </select>
          </div>
        </div>

        <div style="margin-top: 15px; display: flex; justify-content: flex-end;">
          <button class="btn btn-primary" id="btn-settings-save">SAVE & CLOSE</button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    const sfxSlider = this.element.querySelector('#setting-sfx');
    const sfxVal = this.element.querySelector('#setting-sfx-val');
    sfxSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      sfxVal.textContent = `${Math.round(val * 100)}%`;
      this.audio.setSfxVolume(val);
    });

    const musicSlider = this.element.querySelector('#setting-music');
    const musicVal = this.element.querySelector('#setting-music-val');
    musicSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      musicVal.textContent = `${Math.round(val * 100)}%`;
      this.audio.setMusicVolume(val);
    });

    const closeBtn = this.element.querySelector('#btn-settings-close');
    const saveBtn = this.element.querySelector('#btn-settings-save');

    const handleSaveAndClose = () => {
      if (this.callbacks.onAudioClick) this.callbacks.onAudioClick();
      const sfx = parseFloat(sfxSlider.value);
      const music = parseFloat(musicSlider.value);
      const graphics = this.element.querySelector('#setting-graphics').value;
      const camera = this.element.querySelector('#setting-camera').value;

      this.storage.saveSettings({
        soundVolume: sfx,
        musicVolume: music,
        graphicsQuality: graphics,
        cameraMode: camera
      });

      if (this.callbacks.onSettingsChanged) {
        this.callbacks.onSettingsChanged({
          graphicsQuality: graphics,
          cameraMode: camera
        });
      }

      this.hide();
    };

    closeBtn.addEventListener('click', handleSaveAndClose);
    saveBtn.addEventListener('click', handleSaveAndClose);
  }

  show() {
    this.element.classList.add('active');
  }

  hide() {
    this.element.classList.remove('active');
  }
}

