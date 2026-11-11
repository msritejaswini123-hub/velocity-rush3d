// VELOCITY RUSH 3D - State Management
import { GAME_STATES, GAME_MODES } from './Constants.js';

export class GameState {
  constructor() {
    this.currentState = GAME_STATES.MENU;
    this.currentMode = GAME_MODES.ENDLESS;
    this.listeners = [];
  }

  getState() {
    return this.currentState;
  }

  getMode() {
    return this.currentMode;
  }

  setState(newState, payload = {}) {
    if (this.currentState === newState) return;
    const oldState = this.currentState;
    this.currentState = newState;

    for (const listener of this.listeners) {
      listener(this.currentState, oldState, payload);
    }
  }

  setMode(newMode) {
    this.currentMode = newMode;
  }

  onStateChange(callback) {
    this.listeners.push(callback);
  }
}

