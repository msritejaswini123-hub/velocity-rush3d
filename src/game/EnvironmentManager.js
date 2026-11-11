// VELOCITY RUSH 3D - Environment, Cityscape & Lighting Manager
import * as THREE from 'three';
import { TOTAL_ROAD_WIDTH, ROAD_SEGMENT_LENGTH } from './Constants.js';

export class EnvironmentManager {
  constructor(scene, textureGenerator, modelFactory) {
    this.scene = scene;
    this.textures = textureGenerator;
    this.models = modelFactory;

    this.buildings = [];
    this.buildingPoolSize = 24;
    this.furthestBuildingZ = 0;

    this.initLighting();
    this.initSkyAndFog();
    this.initCityscape();
  }

  initLighting() {
    // Atmospheric deep blue ambient
    this.ambientLight = new THREE.AmbientLight(0xdde8f5, 0.85);
    this.scene.add(this.ambientLight);

    // Warm dramatic highway directional light (Sun / Moon)
    this.dirLight = new THREE.DirectionalLight(0xffeedd, 1.4);
    this.dirLight.position.set(45, 75, -50);
    this.dirLight.castShadow = true;

    // Shadow camera optimization
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 250;
    this.dirLight.shadow.camera.left = -30;
    this.dirLight.shadow.camera.right = 30;
    this.dirLight.shadow.camera.top = 30;
    this.dirLight.shadow.camera.bottom = -30;
    this.dirLight.shadow.bias = -0.0005;

    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    // Hemisphere light for realistic ground bounce and sky gradient
    this.hemiLight = new THREE.HemisphereLight(0x406085, 0x1a202c, 0.6);
    this.scene.add(this.hemiLight);
  }

  initSkyAndFog() {
    // Midnight blue to indigo atmospheric fog
    const fogColor = new THREE.Color(0x0e1420);
    this.scene.background = fogColor;
    this.scene.fog = new THREE.FogExp2(0x0e1420, 0.0028);

    // Distant mountain horizon backdrop
    const mountainGeo = new THREE.ConeGeometry(80, 70, 4);
    const mountainMat = new THREE.MeshBasicMaterial({ color: 0x080c14 });

    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(mountainGeo, mountainMat);
      const angle = (i / 8) * Math.PI * 2;
      m.position.set(Math.cos(angle) * 450, 20, Math.sin(angle) * 450);
      m.scale.set(1.5 + Math.random(), 1.0 + Math.random(), 1.5 + Math.random());
      this.scene.add(m);
    }
  }

  initCityscape() {
    this.buildings = [];
    const flankDistMin = TOTAL_ROAD_WIDTH * 0.5 + 16;
    const flankDistMax = TOTAL_ROAD_WIDTH * 0.5 + 45;

    let zPos = 40;
    const spacing = 50;

    for (let i = 0; i < this.buildingPoolSize; i++) {
      // Pick random side (left or right)
      const side = (i % 2 === 0) ? -1 : 1;
      const xOffset = side * (flankDistMin + Math.random() * (flankDistMax - flankDistMin));
      const bWidth = 20 + Math.random() * 25;
      const bHeight = 45 + Math.random() * 75;
      const bDepth = 20 + Math.random() * 25;
      const theme = Math.random() > 0.5 ? 'cyber' : 'modern';

      const building = this.models.createBuilding(bWidth, bHeight, bDepth, theme);
      building.position.set(xOffset, 0, zPos);
      this.scene.add(building);

      this.buildings.push({
        group: building,
        side: side,
        baseDist: Math.abs(xOffset),
        z: zPos
      });

      this.furthestBuildingZ = zPos;
      if (i % 2 === 1) {
        zPos -= spacing;
      }
    }
  }

  update(playerZ, roadManager) {
    // Keep directional light tracking player
    this.dirLight.position.set(playerZ + 45, 75, playerZ - 50);
    this.dirLight.target.position.set(0, 0, playerZ - 30);
    this.dirLight.target.updateMatrixWorld();

    // Recycle buildings behind player
    const despawnDist = playerZ + 80;
    for (const b of this.buildings) {
      if (b.z > despawnDist) {
        const newZ = this.furthestBuildingZ - 50 - Math.random() * 20;
        const roadCurveX = roadManager.getCurveOffset(newZ);
        const newX = roadCurveX + b.side * b.baseDist;

        b.z = newZ;
        b.group.position.set(newX, 0, newZ);
        this.furthestBuildingZ = newZ;
      }
    }
  }

  reset() {
    this.furthestBuildingZ = 0;
    let zPos = 40;
    const spacing = 50;
    for (let i = 0; i < this.buildings.length; i++) {
      const b = this.buildings[i];
      b.z = zPos;
      b.group.position.set(b.side * b.baseDist, 0, zPos);
      this.furthestBuildingZ = zPos;
      if (i % 2 === 1) {
        zPos -= spacing;
      }
    }
  }
}

