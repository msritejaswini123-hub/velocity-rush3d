// VELOCITY RUSH 3D - Master Game Controller
import * as THREE from 'three';
import { GAME_STATES, GAME_MODES, GRAPHIC_SETTINGS } from './Constants.js';
import { GameState } from './GameState.js';
import { GameLoop } from './GameLoop.js';
import { StorageManager } from './StorageManager.js';
import { AudioManager } from './AudioManager.js';
import { InputManager } from './InputManager.js';
import { TextureGenerator } from './TextureGenerator.js';
import { ModelFactory } from './ModelFactory.js';
import { ParticleSystem } from './ParticleSystem.js';
import { RoadManager } from './RoadManager.js';
import { EnvironmentManager } from './EnvironmentManager.js';
import { VehicleGarage } from './VehicleGarage.js';
import { PlayerCar } from './PlayerCar.js';
import { TrafficManager } from './TrafficManager.js';
import { CoinManager } from './CoinManager.js';
import { CollisionManager } from './CollisionManager.js';
import { CameraController } from './CameraController.js';
import { ScoreManager } from './ScoreManager.js';
import { UIManager } from '../ui/UIManager.js';

export class Game {
  constructor(canvas, uiContainer) {
    this.canvas = canvas;
    this.uiContainer = uiContainer;

    // Core Managers
    this.storage = new StorageManager();
    this.audio = new AudioManager(this.storage);
    this.input = new InputManager();
    this.state = new GameState();
    this.score = new ScoreManager(this.storage);
    this.garage = new VehicleGarage(this.storage);

    // Three.js Rendering Context
    this.initThree();

    // Procedural Graphics & World Systems
    this.textures = new TextureGenerator();
    this.models = new ModelFactory(this.textures);
    this.particles = new ParticleSystem(this.scene, this.textures);
    this.road = new RoadManager(this.scene, this.textures, this.models);
    this.environment = new EnvironmentManager(this.scene, this.textures, this.models);
    this.traffic = new TrafficManager(this.scene, this.models);
    this.coins = new CoinManager(this.scene, this.models);
    this.collisions = new CollisionManager();
    this.cameraController = new CameraController(this.camera);

    // Active Player Car
    this.playerCar = null;
    this.initPlayerCar();

    // Garage Showroom Pedestal
    this.initGarageShowroom();

    // UI Orchestration
    this.ui = new UIManager(this, this.uiContainer);

    // Game Loop
    this.loop = new GameLoop(this.update.bind(this), this.render.bind(this));

    // Input Actions Binding
    this.bindInputActions();

    // Window Resize Handling
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // Apply Saved Settings
    const settings = this.storage.getSettings();
    this.applyGraphicsSettings(settings.graphicsQuality);
    this.cameraController.setMode(settings.cameraMode || 'chase');

    // Setup Score Callbacks
    this.score.onScorePopup = (data) => this.ui.showHUDPopup(data);
    this.score.onChallengeComplete = () => this.endRace('challenge_won');

    // First Run Tutorial Check
    if (!this.storage.hasSeenTutorial()) {
      setTimeout(() => {
        this.ui.instructionsModal.show();
        this.storage.setSeenTutorial(true);
      }, 500);
    }

    // Launch into Main Menu state
    this.state.setState(GAME_STATES.MENU);
    this.ui.showScreen(GAME_STATES.MENU);
    this.loop.start();
  }

  initThree() {
    this.scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
  }

  initPlayerCar() {
    const selectedConfig = this.garage.getSelectedCar();
    const customColor = this.garage.storage.getCustomColor(selectedConfig.id);

    if (this.playerCar) {
      this.scene.remove(this.playerCar.group);
    }

    this.playerCar = new PlayerCar(this.models, selectedConfig, customColor);
    this.scene.add(this.playerCar.group);
  }

  initGarageShowroom() {
    this.garagePedestal = new THREE.Group();
    this.garagePedestal.position.set(0, 0, 0);

    // Glowing circular turntable
    const diskGeo = new THREE.CylinderGeometry(3.5, 3.8, 0.3, 32);
    const diskMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      metalness: 0.85,
      roughness: 0.2
    });
    const disk = new THREE.Mesh(diskGeo, diskMat);
    disk.position.y = -0.15;
    this.garagePedestal.add(disk);

    // Glowing neon ring around pedestal
    const ringGeo = new THREE.TorusGeometry(3.6, 0.06, 8, 32);
    ringGeo.rotateX(Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    this.garagePedestal.add(ring);

    // Showroom Spotlight
    this.garageSpot = new THREE.SpotLight(0xffffff, 2.5, 20, Math.PI / 4, 0.3);
    this.garageSpot.position.set(0, 8, 0);
    this.garageSpot.target = this.garagePedestal;
    this.garagePedestal.add(this.garageSpot);

    this.garagePedestal.visible = false;
    this.scene.add(this.garagePedestal);

    this.garageCarGroup = new THREE.Group();
    this.garagePedestal.add(this.garageCarGroup);
  }

  bindInputActions() {
    this.input.onPauseCallback = () => {
      const curState = this.state.getState();
      if (curState === GAME_STATES.PLAYING) {
        this.pauseGame();
      } else if (curState === GAME_STATES.PAUSED) {
        this.resumeGame();
      }
    };

    this.input.onCameraCallback = () => {
      if (this.state.getState() === GAME_STATES.PLAYING) {
        this.cameraController.cycleMode();
      }
    };
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  applyGraphicsSettings(qualityName) {
    const preset = GRAPHIC_SETTINGS[qualityName] || GRAPHIC_SETTINGS.HIGH;

    this.renderer.shadowMap.enabled = preset.shadows;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, preset.pixelRatio));
  }

  // --- Game State Flow ---
  startRace(mode = GAME_MODES.ENDLESS) {
    this.audio.ensureContext();
    this.audio.startEngine();
    this.audio.startMusic();

    this.state.setMode(mode);
    this.score.setMode(mode);

    // Reset systems
    this.initPlayerCar();
    this.playerCar.reset(1);
    this.road.reset();
    this.environment.reset();
    this.traffic.reset();
    this.coins.reset();
    this.particles.clear();
    this.cameraController.reset(this.playerCar);

    this.garagePedestal.visible = false;
    this.playerCar.group.visible = true;

    this.state.setState(GAME_STATES.PLAYING);
    this.ui.showScreen(GAME_STATES.PLAYING);
  }

  pauseGame() {
    if (this.state.getState() !== GAME_STATES.PLAYING) return;
    this.audio.stopEngine();
    this.state.setState(GAME_STATES.PAUSED);
    this.ui.showScreen(GAME_STATES.PAUSED);
  }

  resumeGame() {
    if (this.state.getState() !== GAME_STATES.PAUSED) return;
    this.audio.startEngine();
    this.state.setState(GAME_STATES.PLAYING);
    this.ui.showScreen(GAME_STATES.PLAYING);
  }

  restartRace() {
    this.startRace(this.state.getMode());
  }

  returnToMainMenu() {
    this.audio.stopEngine();
    this.traffic.reset();
    this.coins.reset();
    this.particles.clear();
    this.garagePedestal.visible = false;
    if (this.playerCar) {
      this.playerCar.group.visible = true;
      this.playerCar.reset(1);
    }

    this.state.setState(GAME_STATES.MENU);
    this.ui.showScreen(GAME_STATES.MENU);
  }

  endRace(reason) {
    this.audio.stopEngine();
    this.audio.playGameOverStinger();

    const summary = this.score.finalizeRun();
    summary.reason = reason;

    this.state.setState(GAME_STATES.GAME_OVER);
    this.ui.showScreen(GAME_STATES.GAME_OVER, summary);
  }

  // --- Garage Integration ---
  enterGarage() {
    this.state.setState(GAME_STATES.GARAGE);
    this.ui.showScreen(GAME_STATES.GARAGE);

    // Hide road and traffic while in showroom
    this.playerCar.group.visible = false;
    this.traffic.reset();
    this.coins.reset();

    this.garagePedestal.visible = true;
    this.previewGarageCar(this.garage.getSelectedCar());

    // Position camera for showroom
    this.camera.position.set(0, 3.2, 8.5);
    this.camera.lookAt(0, 1.0, 0);
  }

  exitGarage() {
    this.garagePedestal.visible = false;
    this.initPlayerCar();
    this.playerCar.group.visible = true;
    this.state.setState(GAME_STATES.MENU);
    this.ui.showScreen(GAME_STATES.MENU);
  }

  previewGarageCar(carConfig) {
    // Clear previous preview
    while (this.garageCarGroup.children.length > 0) {
      this.garageCarGroup.remove(this.garageCarGroup.children[0]);
    }

    const customColor = this.garage.storage.getCustomColor(carConfig.id);
    const previewData = this.models.createPlayerVehicle(carConfig, customColor);
    this.garageCarGroup.add(previewData.group);
    this.currentGaragePreviewData = previewData;
  }

  updateGarageCarColor(carId, hexColor) {
    if (this.currentGaragePreviewData) {
      this.currentGaragePreviewData.bodyMaterial.color.set(hexColor);
    }
  }

  applySelectedCar(car) {
    this.initPlayerCar();
  }

  // --- Main Update Loop ---
  update(delta) {
    const currentState = this.state.getState();

    if (currentState === GAME_STATES.PLAYING) {
      // 1. Player Physics & Controls
      this.playerCar.update(delta, this.input, this.road, this.particles, this.audio);

      // Check if player health depleted
      if (this.playerCar.health <= 0) {
        this.endRace('crash');
        return;
      }

      // 2. Road Recycling & Curvature
      this.road.update(this.playerCar.position.z);

      // 3. Environment Cityscape & Lighting
      this.environment.update(this.playerCar.position.z, this.road);

      // 4. Dynamic Traffic
      // Difficulty scales smoothly with distance traveled
      const difficulty = 1.0 + Math.min(2.0, this.score.distance / 2500);
      this.traffic.setDifficulty(difficulty);

      this.traffic.update(
        delta,
        this.playerCar,
        this.road,
        this.particles,
        this.audio,
        (type, data) => this.score.handleScoreEvent(type, data)
      );

      // 5. Collectibles & Coins
      this.coins.update(
        delta,
        this.playerCar,
        this.road,
        this.particles,
        this.audio,
        (type, data) => {
          this.score.handleCollectEvent(type, data);
          if (type === 'nitro') {
            this.playerCar.addNitro(data.amount);
          }
        }
      );

      // 6. Collision Checking
      this.collisions.checkPlayerTrafficCollisions(
        this.playerCar,
        this.traffic,
        this.particles,
        this.audio,
        (crashData) => {
          this.score.handleCrash();
          this.cameraController.addShake(0.8, 0.45);
          if (crashData.isDead) {
            this.endRace('crash');
          }
        }
      );

      // 7. Score & Rules Update
      this.score.update(delta, this.playerCar, () => {
        this.endRace('time_up');
      });

      // 8. Dynamic Camera Tracking & FOV
      this.cameraController.update(delta, this.playerCar, this.road);

      // 9. Particle Simulation
      this.particles.update(delta);

      // 10. HUD Refresh
      this.ui.updateHUD(this.playerCar, this.score);
    } else if (currentState === GAME_STATES.GARAGE) {
      // Spin showroom turntable smoothly
      this.garagePedestal.rotation.y += delta * 0.75;
      this.particles.update(delta);
    } else if (currentState === GAME_STATES.MENU) {
      // Slow idle camera drift over the road
      const t = performance.now() * 0.0004;
      this.camera.position.set(Math.sin(t) * 8, 4.5, 12);
      this.camera.lookAt(0, 1.2, -15);
      this.particles.update(delta);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
