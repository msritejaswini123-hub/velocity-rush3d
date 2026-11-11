// VELOCITY RUSH 3D - Master UI Manager
import { MainMenu } from './MainMenu.js';
import { GameHUD } from './GameHUD.js';
import { GarageScreen } from './GarageScreen.js';
import { PauseMenu } from './PauseMenu.js';
import { ResultsScreen } from './ResultsScreen.js';
import { SettingsScreen } from './SettingsScreen.js';
import { InstructionsModal } from './InstructionsModal.js';
import { GAME_STATES } from '../game/Constants.js';

export class UIManager {
  constructor(game, container) {
    this.game = game;
    this.container = container;

    this.initScreens();
  }

  initScreens() {
    const audioClick = () => this.game.audio.playButtonClick();

    // 1. Main Menu
    this.mainMenu = new MainMenu(this.container, {
      onAudioClick: audioClick,
      onPlay: (mode) => {
        this.game.startRace(mode);
      },
      onGarage: () => {
        this.game.enterGarage();
      },
      onSettings: () => {
        this.settingsScreen.show();
      },
      onHelp: () => {
        this.instructionsModal.show();
      },
      onModeSelect: (mode) => {
        this.game.state.setMode(mode);
        this.updateMenuStats();
      }
    });

    // 2. HUD
    this.hud = new GameHUD(this.container, this.game.input, {
      onAudioClick: audioClick,
      onPause: () => {
        this.game.pauseGame();
      },
      onCamera: () => {
        this.game.cameraController.cycleMode();
      }
    });

    // 3. Garage
    this.garageScreen = new GarageScreen(this.container, this.game.garage, {
      onAudioClick: audioClick,
      onAudioBuy: () => this.game.audio.playCoinSound(),
      onCarSelect: (car) => {
        this.game.applySelectedCar(car);
        this.updateMenuStats();
      },
      onPreviewCar: (car) => {
        this.game.previewGarageCar(car);
      },
      onColorChange: (carId, color) => {
        this.game.updateGarageCarColor(carId, color);
      },
      onBack: () => {
        this.game.exitGarage();
      }
    });

    // 4. Pause Menu
    this.pauseMenu = new PauseMenu(this.container, {
      onAudioClick: audioClick,
      onResume: () => {
        this.game.resumeGame();
      },
      onRestart: () => {
        this.game.restartRace();
      },
      onSettings: () => {
        this.settingsScreen.show();
      },
      onMainMenu: () => {
        this.game.returnToMainMenu();
      }
    });

    // 5. Results Screen
    this.resultsScreen = new ResultsScreen(this.container, {
      onAudioClick: audioClick,
      onRetry: () => {
        this.game.restartRace();
      },
      onGarage: () => {
        this.game.enterGarage();
      },
      onMainMenu: () => {
        this.game.returnToMainMenu();
      }
    });

    // 6. Settings Screen
    this.settingsScreen = new SettingsScreen(this.container, this.game.storage, this.game.audio, {
      onAudioClick: audioClick,
      onSettingsChanged: (newSettings) => {
        this.game.applyGraphicsSettings(newSettings.graphicsQuality);
        if (newSettings.cameraMode) {
          this.game.cameraController.setMode(newSettings.cameraMode);
        }
      }
    });

    // 7. Instructions Modal
    this.instructionsModal = new InstructionsModal(this.container, {
      onAudioClick: audioClick
    });
  }

  updateMenuStats() {
    const coins = this.game.storage.getCoins();
    const scores = this.game.storage.getHighScores();
    this.mainMenu.updateStats(coins, scores);
  }

  showScreen(state, payload = {}) {
    // Hide all primary screens first
    this.mainMenu.hide();
    this.hud.hide();
    this.garageScreen.hide();
    this.pauseMenu.hide();
    this.resultsScreen.hide();

    switch (state) {
      case GAME_STATES.MENU:
        this.updateMenuStats();
        this.mainMenu.show();
        break;
      case GAME_STATES.GARAGE:
        this.garageScreen.show();
        break;
      case GAME_STATES.PLAYING:
        this.hud.show();
        break;
      case GAME_STATES.PAUSED:
        this.hud.show(); // Keep HUD visible in background of pause
        this.pauseMenu.show();
        break;
      case GAME_STATES.GAME_OVER:
        this.resultsScreen.show(payload);
        break;
    }
  }

  updateHUD(playerCar, scoreManager) {
    this.hud.update(playerCar, scoreManager);
  }

  showHUDPopup(data) {
    this.hud.showPopup(data);
  }
}

