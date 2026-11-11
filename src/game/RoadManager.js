// VELOCITY RUSH 3D - Road Manager with Seamless Segment Recycling & Dynamic Curves
import * as THREE from 'three';
import {
  ROAD_WIDTH,
  SHOULDER_WIDTH,
  TOTAL_ROAD_WIDTH,
  ROAD_SEGMENT_LENGTH,
  TOTAL_ROAD_SEGMENTS,
  DESPAWN_DISTANCE_BEHIND,
  LANES
} from './Constants.js';

export class RoadManager {
  constructor(scene, textureGenerator, modelFactory) {
    this.scene = scene;
    this.textures = textureGenerator;
    this.models = modelFactory;

    this.segments = [];
    this.segmentPool = [];
    this.furthestZ = 0;

    // Materials
    this.initMaterials();
    this.initRoadSegments();
  }

  initMaterials() {
    this.matAsphalt = new THREE.MeshStandardMaterial({
      color: 0x33373d,
      roughness: 0.85,
      metalness: 0.1,
      map: this.textures.getAsphaltTexture()
    });

    this.matLaneDash = new THREE.MeshBasicMaterial({
      map: this.textures.getLaneDashTexture(),
      transparent: true,
      depthWrite: false
    });

    this.matRoadEdge = new THREE.MeshBasicMaterial({
      map: this.textures.getRoadEdgeTexture(),
      transparent: true,
      depthWrite: false
    });

    this.matCurb = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      map: this.textures.getCurbTexture()
    });

    this.matShoulder = new THREE.MeshStandardMaterial({
      color: 0x22262a,
      roughness: 0.95
    });

    this.matGuardrail = new THREE.MeshStandardMaterial({
      metalness: 0.8,
      roughness: 0.3,
      map: this.textures.getGuardrailTexture()
    });
  }

  /**
   * Road curvature calculation.
   * Smooth, gentle S-curves that keep gameplay fair while providing visual depth.
   */
  getCurveOffset(z) {
    // Large, gentle sinusoidal highway curvature
    return Math.sin(z * 0.0035) * 14.0 + Math.sin(z * 0.008) * 4.0;
  }

  getCurveTangent(z) {
    const delta = 1.0;
    const x1 = this.getCurveOffset(z - delta);
    const x2 = this.getCurveOffset(z + delta);
    return (x1 - x2) / (2 * delta); // approx dx/dz
  }

  createSingleSegmentMesh() {
    const group = new THREE.Group();
    group.name = 'road_segment';

    const segLen = ROAD_SEGMENT_LENGTH;

    // 1. Main Asphalt Highway Bed
    const asphaltGeo = new THREE.PlaneGeometry(ROAD_WIDTH, segLen);
    asphaltGeo.rotateX(-Math.PI / 2);
    const asphaltMesh = new THREE.Mesh(asphaltGeo, this.matAsphalt);
    asphaltMesh.receiveShadow = true;
    group.add(asphaltMesh);

    // 2. Road Shoulders (Left & Right)
    const shoulderGeo = new THREE.PlaneGeometry(SHOULDER_WIDTH, segLen);
    shoulderGeo.rotateX(-Math.PI / 2);

    const leftShoulder = new THREE.Mesh(shoulderGeo, this.matShoulder);
    leftShoulder.position.set(-ROAD_WIDTH * 0.5 - SHOULDER_WIDTH * 0.5, -0.01, 0);
    group.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, this.matShoulder);
    rightShoulder.position.set(ROAD_WIDTH * 0.5 + SHOULDER_WIDTH * 0.5, -0.01, 0);
    group.add(rightShoulder);

    // 3. Dash Lane Markings (Between the 4 lanes: at x = -4, 0, +4)
    const laneDivPositions = [-4, 0, 4];
    for (const laneX of laneDivPositions) {
      const dashGeo = new THREE.PlaneGeometry(0.25, segLen);
      dashGeo.rotateX(-Math.PI / 2);
      const dashMesh = new THREE.Mesh(dashGeo, this.matLaneDash);
      dashMesh.position.set(laneX, 0.015, 0);
      group.add(dashMesh);
    }

    // 4. Solid Yellow Edge Lines (At road limits: x = -ROAD_WIDTH/2 and +ROAD_WIDTH/2)
    const edgeGeo = new THREE.PlaneGeometry(0.3, segLen);
    edgeGeo.rotateX(-Math.PI / 2);

    const leftEdge = new THREE.Mesh(edgeGeo, this.matRoadEdge);
    leftEdge.position.set(-ROAD_WIDTH * 0.5 + 0.25, 0.015, 0);
    group.add(leftEdge);

    const rightEdge = new THREE.Mesh(edgeGeo, this.matRoadEdge);
    rightEdge.position.set(ROAD_WIDTH * 0.5 - 0.25, 0.015, 0);
    group.add(rightEdge);

    // 5. Red/White Curbs
    const curbGeo = new THREE.BoxGeometry(0.4, 0.18, segLen);
    const leftCurb = new THREE.Mesh(curbGeo, this.matCurb);
    leftCurb.position.set(-ROAD_WIDTH * 0.5, 0.08, 0);
    group.add(leftCurb);

    const rightCurb = new THREE.Mesh(curbGeo, this.matCurb);
    rightCurb.position.set(ROAD_WIDTH * 0.5, 0.08, 0);
    group.add(rightCurb);

    // 6. Metallic Guardrails
    const railGeo = new THREE.BoxGeometry(0.12, 0.75, segLen);

    const leftRail = new THREE.Mesh(railGeo, this.matGuardrail);
    leftRail.position.set(-TOTAL_ROAD_WIDTH * 0.5, 0.55, 0);
    leftRail.castShadow = true;
    group.add(leftRail);

    const rightRail = new THREE.Mesh(railGeo, this.matGuardrail);
    rightRail.position.set(TOTAL_ROAD_WIDTH * 0.5, 0.55, 0);
    rightRail.castShadow = true;
    group.add(rightRail);

    // Guardrail posts (every 10m)
    const postGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 6);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x555c63, metalness: 0.8, roughness: 0.3 });
    for (let pz = -segLen * 0.45; pz <= segLen * 0.45; pz += 10) {
      const pL = new THREE.Mesh(postGeo, postMat);
      pL.position.set(-TOTAL_ROAD_WIDTH * 0.5, 0.4, pz);
      group.add(pL);

      const pR = new THREE.Mesh(postGeo, postMat);
      pR.position.set(TOTAL_ROAD_WIDTH * 0.5, 0.4, pz);
      group.add(pR);
    }

    // 7. Street Light on one side
    const streetLight = this.models.createStreetLight();
    streetLight.position.set(TOTAL_ROAD_WIDTH * 0.5 + 0.8, 0, 0);
    streetLight.rotation.y = Math.PI;
    group.add(streetLight);

    return group;
  }

  initRoadSegments() {
    this.segments = [];
    let currentZ = 60; // Start slightly behind origin

    for (let i = 0; i < TOTAL_ROAD_SEGMENTS; i++) {
      const segMesh = this.createSingleSegmentMesh();
      const zPos = currentZ - i * ROAD_SEGMENT_LENGTH;
      const xOffset = this.getCurveOffset(zPos);
      const angleY = Math.atan(this.getCurveTangent(zPos));

      segMesh.position.set(xOffset, 0, zPos);
      segMesh.rotation.y = angleY;

      // Add occasional overhead highway gantry (every 4th segment)
      if (i % 4 === 2) {
        const gantry = this.models.createHighwayGantry(TOTAL_ROAD_WIDTH);
        gantry.position.set(0, 0, 0);
        segMesh.add(gantry);
      }

      this.scene.add(segMesh);
      this.segments.push({
        mesh: segMesh,
        z: zPos
      });
      this.furthestZ = zPos;
    }
  }

  update(playerZ) {
    // Sort segments from closest to player (greatest Z) to furthest (smallest negative Z)
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];

      // If segment is far behind the player, recycle it to the very front
      if (seg.z > playerZ + DESPAWN_DISTANCE_BEHIND) {
        const newZ = this.furthestZ - ROAD_SEGMENT_LENGTH;
        const newX = this.getCurveOffset(newZ);
        const newAngle = Math.atan(this.getCurveTangent(newZ));

        seg.z = newZ;
        seg.mesh.position.set(newX, 0, newZ);
        seg.mesh.rotation.y = newAngle;

        this.furthestZ = newZ;
      }
    }
  }

  reset() {
    let currentZ = 60;
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      const zPos = currentZ - i * ROAD_SEGMENT_LENGTH;
      const xOffset = this.getCurveOffset(zPos);
      const angleY = Math.atan(this.getCurveTangent(zPos));

      seg.z = zPos;
      seg.mesh.position.set(xOffset, 0, zPos);
      seg.mesh.rotation.y = angleY;
      this.furthestZ = zPos;
    }
  }
}
