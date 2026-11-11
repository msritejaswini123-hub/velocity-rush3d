// VELOCITY RUSH 3D - Storage Manager with localStorage persistence

const STORAGE_KEYS = {
  COINS: 'vr3d_coins',
  HIGH_SCORES: 'vr3d_high_scores',
  BEST_DISTANCES: 'vr3d_best_distances',
  UNLOCKED_CARS: 'vr3d_unlocked_cars',
  SELECTED_CAR: 'vr3d_selected_car',
  CAR_COLORS: 'vr3d_car_colors',
  SETTINGS: 'vr3d_settings',
  TUTORIAL_SEEN: 'vr3d_tutorial_seen'
};

const DEFAULT_SETTINGS = {
  soundVolume: 0.8,
  musicVolume: 0.6,
  graphicsQuality: 'HIGH',
  cameraMode: 'chase',
  touchControls: 'auto' // 'auto', 'always', 'never'
};

export class StorageManager {
  constructor() {
    this.isAvailable = this.checkStorageAvailability();
  }

  checkStorageAvailability() {
    try {
      const test = '__vr3d_storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      console.warn('StorageManager: localStorage not available, using in-memory fallback.');
      return false;
    }
  }

  // --- Coins ---
  getCoins() {
    if (!this.isAvailable) return 0;
    try {
      const val = parseInt(localStorage.getItem(STORAGE_KEYS.COINS), 10);
      return isNaN(val) ? 0 : Math.max(0, val);
    } catch {
      return 0;
    }
  }

  addCoins(amount) {
    if (typeof amount !== 'number' || amount <= 0) return this.getCoins();
    const current = this.getCoins();
    const updated = current + Math.floor(amount);
    this.setCoins(updated);
    return updated;
  }

  spendCoins(amount) {
    if (typeof amount !== 'number' || amount <= 0) return false;
    const current = this.getCoins();
    if (current < amount) return false;
    this.setCoins(current - Math.floor(amount));
    return true;
  }

  setCoins(amount) {
    if (!this.isAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEYS.COINS, Math.max(0, Math.floor(amount)).toString());
    } catch (e) {
      console.error('Failed to set coins:', e);
    }
  }

  // --- High Scores ---
  getHighScores() {
    if (!this.isAvailable) return { endless: 0, time_trial: 0, traffic_challenge: 0 };
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HIGH_SCORES);
      if (!raw) return { endless: 0, time_trial: 0, traffic_challenge: 0 };
      const parsed = JSON.parse(raw);
      return {
        endless: parsed.endless || 0,
        time_trial: parsed.time_trial || 0,
        traffic_challenge: parsed.traffic_challenge || 0
      };
    } catch {
      return { endless: 0, time_trial: 0, traffic_challenge: 0 };
    }
  }

  saveHighScore(mode, score) {
    if (!this.isAvailable) return false;
    try {
      const scores = this.getHighScores();
      const currentBest = scores[mode] || 0;
      if (score > currentBest) {
        scores[mode] = Math.floor(score);
        localStorage.setItem(STORAGE_KEYS.HIGH_SCORES, JSON.stringify(scores));
        return true; // New record achieved
      }
    } catch (e) {
      console.error('Failed to save high score:', e);
    }
    return false;
  }

  // --- Best Distance ---
  getBestDistance(mode = 'endless') {
    if (!this.isAvailable) return 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BEST_DISTANCES);
      if (!raw) return 0;
      const parsed = JSON.parse(raw);
      return parsed[mode] || 0;
    } catch {
      return 0;
    }
  }

  saveBestDistance(mode, distance) {
    if (!this.isAvailable) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BEST_DISTANCES);
      const parsed = raw ? JSON.parse(raw) : {};
      const current = parsed[mode] || 0;
      if (distance > current) {
        parsed[mode] = Math.floor(distance);
        localStorage.setItem(STORAGE_KEYS.BEST_DISTANCES, JSON.stringify(parsed));
      }
    } catch (e) {
      console.error('Failed to save best distance:', e);
    }
  }

  // --- Cars Unlocks & Selection ---
  getUnlockedCars() {
    if (!this.isAvailable) return ['phantom_gt'];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.UNLOCKED_CARS);
      if (!raw) return ['phantom_gt'];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.includes('phantom_gt')) {
        return parsed;
      }
      return ['phantom_gt'];
    } catch {
      return ['phantom_gt'];
    }
  }

  unlockCar(carId) {
    if (!this.isAvailable) return;
    try {
      const unlocked = this.getUnlockedCars();
      if (!unlocked.includes(carId)) {
        unlocked.push(carId);
        localStorage.setItem(STORAGE_KEYS.UNLOCKED_CARS, JSON.stringify(unlocked));
      }
    } catch (e) {
      console.error('Failed to save unlocked car:', e);
    }
  }

  getSelectedCar() {
    if (!this.isAvailable) return 'phantom_gt';
    try {
      const carId = localStorage.getItem(STORAGE_KEYS.SELECTED_CAR);
      return carId || 'phantom_gt';
    } catch {
      return 'phantom_gt';
    }
  }

  setSelectedCar(carId) {
    if (!this.isAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEYS.SELECTED_CAR, carId);
    } catch (e) {
      console.error('Failed to set selected car:', e);
    }
  }

  getCustomColor(carId) {
    if (!this.isAvailable) return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CAR_COLORS);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed[carId] || null;
    } catch {
      return null;
    }
  }

  setCustomColor(carId, hexColor) {
    if (!this.isAvailable) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CAR_COLORS);
      const parsed = raw ? JSON.parse(raw) : {};
      parsed[carId] = hexColor;
      localStorage.setItem(STORAGE_KEYS.CAR_COLORS, JSON.stringify(parsed));
    } catch (e) {
      console.error('Failed to set car color:', e);
    }
  }

  // --- Settings ---
  getSettings() {
    if (!this.isAvailable) return { ...DEFAULT_SETTINGS };
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!raw) return { ...DEFAULT_SETTINGS };
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  saveSettings(settings) {
    if (!this.isAvailable) return;
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  // --- Tutorial ---
  hasSeenTutorial() {
    if (!this.isAvailable) return false;
    try {
      return localStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN) === 'true';
    } catch {
      return false;
    }
  }

  setSeenTutorial(seen = true) {
    if (!this.isAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN, seen ? 'true' : 'false');
    } catch (e) {
      console.error('Failed to set tutorial seen:', e);
    }
  }
}

