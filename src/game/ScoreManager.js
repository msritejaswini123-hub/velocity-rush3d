// VELOCITY RUSH 3D - Score, Distance, Combo & Challenge Rules Manager
import { GAME_MODES } from './Constants.js';

export class ScoreManager {
  constructor(storageManager) {
    this.storage = storageManager;

    this.mode = GAME_MODES.ENDLESS;
    this.score = 0;
    this.distance = 0; // In meters
    this.coins = 0;
    this.nearMissCount = 0;
    this.carsPassedCount = 0;

    // Combo System
    this.combo = 1;
    this.comboTimer = 0;
    this.maxCombo = 5;

    // Time Trial
    this.timeRemaining = 60.0;
    this.timeLimit = 60.0;

    // Traffic Challenge Target
    this.targetScore = 20000;
    this.targetOvertakes = 20;

    // Callbacks
    this.onComboChange = null;
    this.onScorePopup = null;
    this.onChallengeComplete = null;
    this.onTimeExpired = null;
  }

  setMode(mode) {
    this.mode = mode;
    this.reset();
  }

  update(delta, playerCar, onTimeUp) {
    if (delta <= 0) return;

    // 1. Distance & Distance-based Score
    const speedMs = playerCar.speedMs;
    const distanceDelta = speedMs * delta;
    this.distance += distanceDelta;

    // Score increases with speed and distance: faster = exponentially higher score rate
    const speedMultiplier = 1.0 + (playerCar.speedKmh / 100);
    this.score += Math.floor(distanceDelta * 0.8 * speedMultiplier * this.combo);

    // 2. Combo Decay Timer
    if (this.combo > 1) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.combo = 1;
        if (this.onComboChange) this.onComboChange(this.combo);
      }
    }

    // 3. Mode Specific Rules
    if (this.mode === GAME_MODES.TIME_TRIAL) {
      this.timeRemaining -= delta;
      if (this.timeRemaining <= 0) {
        this.timeRemaining = 0;
        if (onTimeUp) onTimeUp();
      }
    } else if (this.mode === GAME_MODES.TRAFFIC_CHALLENGE) {
      if (this.score >= this.targetScore || this.carsPassedCount >= this.targetOvertakes) {
        if (this.onChallengeComplete) this.onChallengeComplete();
      }
    }
  }

  handleScoreEvent(type, data = {}) {
    if (type === 'PASS') {
      this.carsPassedCount++;
      const pts = 100 * this.combo;
      this.score += pts;
      this.increaseCombo();

      if (this.mode === GAME_MODES.TIME_TRIAL) {
        this.timeRemaining = Math.min(60, this.timeRemaining + 1.5);
      }

      if (this.onScorePopup) {
        this.onScorePopup({ text: `+${pts} OVERTAKE!`, type: 'pass', combo: this.combo });
      }
    } else if (type === 'NEAR_MISS') {
      this.nearMissCount++;
      const pts = 500 * this.combo;
      this.score += pts;
      this.increaseCombo();

      if (this.mode === GAME_MODES.TIME_TRIAL) {
        this.timeRemaining = Math.min(60, this.timeRemaining + 3.0);
      }

      if (this.onScorePopup) {
        this.onScorePopup({ text: `+${pts} NEAR MISS!`, type: 'near_miss', combo: this.combo });
      }
    }
  }

  handleCollectEvent(type, data = {}) {
    if (type === 'coin') {
      const addedCoins = data.amount || 10;
      this.coins += addedCoins;
      this.storage.addCoins(addedCoins);
      this.score += (data.score || 250) * this.combo;

      if (this.onScorePopup) {
        this.onScorePopup({ text: `+${data.score || 250} COIN`, type: 'coin' });
      }
    } else if (type === 'nitro') {
      this.score += (data.score || 150) * this.combo;
      if (this.onScorePopup) {
        this.onScorePopup({ text: 'NITRO RECHARGED!', type: 'nitro' });
      }
    }
  }

  handleCrash() {
    // Reset combo upon collision
    this.combo = 1;
    this.comboTimer = 0;
    if (this.onComboChange) this.onComboChange(this.combo);
  }

  increaseCombo() {
    this.combo = Math.min(this.maxCombo, this.combo + 1);
    this.comboTimer = 3.5; // 3.5 seconds to sustain combo
    if (this.onComboChange) this.onComboChange(this.combo);
  }

  finalizeRun() {
    const isNewHighScore = this.storage.saveHighScore(this.mode, this.score);
    this.storage.saveBestDistance(this.mode, this.distance);

    return {
      score: this.score,
      distance: Math.floor(this.distance),
      coins: this.coins,
      nearMisses: this.nearMissCount,
      carsPassed: this.carsPassedCount,
      isNewRecord: isNewHighScore,
      mode: this.mode
    };
  }

  reset() {
    this.score = 0;
    this.distance = 0;
    this.coins = 0;
    this.nearMissCount = 0;
    this.carsPassedCount = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.timeRemaining = this.timeLimit;
  }
}

