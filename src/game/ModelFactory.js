// VELOCITY RUSH 3D - Procedural 3D Model Factory
import * as THREE from 'three';

export class ModelFactory {
  constructor(textureGenerator) {
    this.textures = textureGenerator;
    this.initSharedMaterials();
  }

  initSharedMaterials() {
    this.matTire = new THREE.MeshStandardMaterial({
      color: 0x181818,
      roughness: 0.9,
      metalness: 0.1
    });

    this.matRim = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.2,
      metalness: 0.9
    });

    this.matGlass = new THREE.MeshPhysicalMaterial({
      color: 0x111625,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85
    });

    this.matHeadlightOff = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xddf0ff,
      emissiveIntensity: 0.9,
      roughness: 0.2
    });

    this.matTaillightOff = new THREE.MeshStandardMaterial({
      color: 0x880000,
      emissive: 0xff0000,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });

    this.matCarbon = new THREE.MeshStandardMaterial({
      color: 0x222225,
      roughness: 0.4,
      metalness: 0.7
    });

    this.matChrome = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      roughness: 0.15,
      metalness: 0.95
    });
  }

  /**
   * Builds a complete player vehicle with turning front wheels, spinning wheels,
   * glowing head/taillights, and customizable paint.
   */
  createPlayerVehicle(config, customColor = null) {
    const carGroup = new THREE.Group();
    carGroup.name = `player_car_${config.id}`;

    const primaryColor = new THREE.Color(customColor || config.color);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      roughness: 0.25,
      metalness: 0.75,
      envMapIntensity: 1.2
    });

    const dim = config.dimensions;
    const bodyLength = dim.length;
    const bodyWidth = dim.width;
    const bodyHeight = dim.height;

    // --- 1. Lower Chassis & Underbody ---
    const underbodyGeo = new THREE.BoxGeometry(bodyWidth * 0.95, 0.25, bodyLength * 0.96);
    const underbody = new THREE.Mesh(underbodyGeo, this.matCarbon);
    underbody.position.y = 0.25;
    underbody.castShadow = true;
    underbody.receiveShadow = true;
    carGroup.add(underbody);

    // --- 2. Main Car Body ---
    const mainBodyGroup = new THREE.Group();

    // Lower main shell
    const lowerBodyGeo = new THREE.BoxGeometry(bodyWidth, bodyHeight * 0.45, bodyLength);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyMat);
    lowerBody.position.y = 0.45;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    mainBodyGroup.add(lowerBody);

    // Hood / Bonnet (sloped forward)
    const hoodGeo = new THREE.BoxGeometry(bodyWidth * 0.92, bodyHeight * 0.25, bodyLength * 0.35);
    const hood = new THREE.Mesh(hoodGeo, bodyMat);
    hood.position.set(0, 0.58, -bodyLength * 0.26);
    hood.rotation.x = 0.08;
    hood.castShadow = true;
    mainBodyGroup.add(hood);

    // Front Grille & Splitter
    const grilleGeo = new THREE.BoxGeometry(bodyWidth * 0.85, 0.2, 0.2);
    const grille = new THREE.Mesh(grilleGeo, this.matCarbon);
    grille.position.set(0, 0.35, -bodyLength * 0.51);
    mainBodyGroup.add(grille);

    // Cabin Cockpit & Roof
    let cabinLength = bodyLength * 0.42;
    let cabinWidth = bodyWidth * 0.82;
    let cabinHeight = bodyHeight * 0.5;

    if (config.bodyStyle === 'truck') {
      cabinLength = bodyLength * 0.45;
      cabinWidth = bodyWidth * 0.88;
      cabinHeight = bodyHeight * 0.65;
    }

    const cabinGeo = new THREE.BoxGeometry(cabinWidth, cabinHeight, cabinLength);
    const cabin = new THREE.Mesh(cabinGeo, bodyMat);
    cabin.position.set(0, 0.5 + cabinHeight * 0.5, bodyLength * 0.02);
    cabin.castShadow = true;
    mainBodyGroup.add(cabin);

    // Windshield (front)
    const windshieldGeo = new THREE.PlaneGeometry(cabinWidth * 0.85, cabinHeight * 0.8);
    const windshield = new THREE.Mesh(windshieldGeo, this.matGlass);
    windshield.position.set(0, 0.5 + cabinHeight * 0.52, bodyLength * 0.02 - cabinLength * 0.51);
    windshield.rotation.x = -0.42;
    mainBodyGroup.add(windshield);

    // Rear Window
    const rearGlassGeo = new THREE.PlaneGeometry(cabinWidth * 0.82, cabinHeight * 0.75);
    const rearGlass = new THREE.Mesh(rearGlassGeo, this.matGlass);
    rearGlass.position.set(0, 0.5 + cabinHeight * 0.52, bodyLength * 0.02 + cabinLength * 0.51);
    rearGlass.rotation.x = 0.42;
    rearGlass.rotation.y = Math.PI;
    mainBodyGroup.add(rearGlass);

    // Side Windows
    const sideGlassGeo = new THREE.PlaneGeometry(cabinLength * 0.8, cabinHeight * 0.65);
    const leftGlass = new THREE.Mesh(sideGlassGeo, this.matGlass);
    leftGlass.position.set(-cabinWidth * 0.505, 0.5 + cabinHeight * 0.48, bodyLength * 0.02);
    leftGlass.rotation.y = -Math.PI / 2;
    mainBodyGroup.add(leftGlass);

    const rightGlass = new THREE.Mesh(sideGlassGeo, this.matGlass);
    rightGlass.position.set(cabinWidth * 0.505, 0.5 + cabinHeight * 0.48, bodyLength * 0.02);
    rightGlass.rotation.y = Math.PI / 2;
    mainBodyGroup.add(rightGlass);

    // --- 3. Body Style Specific Customizations ---
    if (config.bodyStyle === 'supercar' || config.bodyStyle === 'hypercar') {
      // Rear High Performance Spoiler / Wing
      const wingStandsGeo = new THREE.BoxGeometry(0.08, 0.35, 0.15);
      const standL = new THREE.Mesh(wingStandsGeo, this.matCarbon);
      standL.position.set(-bodyWidth * 0.35, 0.8, bodyLength * 0.44);
      const standR = new THREE.Mesh(wingStandsGeo, this.matCarbon);
      standR.position.set(bodyWidth * 0.35, 0.8, bodyLength * 0.44);
      mainBodyGroup.add(standL);
      mainBodyGroup.add(standR);

      const wingBladeGeo = new THREE.BoxGeometry(bodyWidth * 1.05, 0.06, 0.35);
      const wingBlade = new THREE.Mesh(wingBladeGeo, this.matCarbon);
      wingBlade.position.set(0, 0.98, bodyLength * 0.44);
      wingBlade.rotation.x = -0.1;
      mainBodyGroup.add(wingBlade);

      // Side Air Intakes
      const scoopGeo = new THREE.BoxGeometry(0.12, 0.25, 0.6);
      const scoopL = new THREE.Mesh(scoopGeo, this.matCarbon);
      scoopL.position.set(-bodyWidth * 0.49, 0.55, bodyLength * 0.1);
      const scoopR = new THREE.Mesh(scoopGeo, this.matCarbon);
      scoopR.position.set(bodyWidth * 0.49, 0.55, bodyLength * 0.1);
      mainBodyGroup.add(scoopL);
      mainBodyGroup.add(scoopR);
    } else if (config.bodyStyle === 'sports' || config.bodyStyle === 'coupe') {
      // Sleek Ducktail or Lip Spoiler
      const lipGeo = new THREE.BoxGeometry(bodyWidth * 0.85, 0.08, 0.18);
      const lip = new THREE.Mesh(lipGeo, this.matCarbon);
      lip.position.set(0, 0.72, bodyLength * 0.48);
      mainBodyGroup.add(lip);
    } else if (config.bodyStyle === 'truck') {
      // Heavy Bullbar at Front
      const bullbarGeo = new THREE.BoxGeometry(bodyWidth * 0.9, 0.4, 0.15);
      const bullbar = new THREE.Mesh(bullbarGeo, this.matChrome);
      bullbar.position.set(0, 0.45, -bodyLength * 0.52);
      mainBodyGroup.add(bullbar);

      // Open Pickup Bed in Rear
      const bedWallL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, bodyLength * 0.35), bodyMat);
      bedWallL.position.set(-bodyWidth * 0.44, 0.7, bodyLength * 0.3);
      const bedWallR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, bodyLength * 0.35), bodyMat);
      bedWallR.position.set(bodyWidth * 0.44, 0.7, bodyLength * 0.3);
      const tailgate = new THREE.Mesh(new THREE.BoxGeometry(bodyWidth * 0.9, 0.4, 0.1), bodyMat);
      tailgate.position.set(0, 0.7, bodyLength * 0.48);
      mainBodyGroup.add(bedWallL);
      mainBodyGroup.add(bedWallR);
      mainBodyGroup.add(tailgate);
    }

    // --- 4. Headlights and Taillights ---
    const hlGeo = new THREE.BoxGeometry(bodyWidth * 0.22, 0.14, 0.12);
    const hlLeft = new THREE.Mesh(hlGeo, this.matHeadlightOff);
    hlLeft.position.set(-bodyWidth * 0.35, 0.5, -bodyLength * 0.49);
    const hlRight = new THREE.Mesh(hlGeo, this.matHeadlightOff);
    hlRight.position.set(bodyWidth * 0.35, 0.5, -bodyLength * 0.49);
    mainBodyGroup.add(hlLeft);
    mainBodyGroup.add(hlRight);

    // Taillights
    const tlMat = this.matTaillightOff.clone();
    const tlGeo = new THREE.BoxGeometry(bodyWidth * 0.25, 0.14, 0.12);
    const tlLeft = new THREE.Mesh(tlGeo, tlMat);
    tlLeft.position.set(-bodyWidth * 0.34, 0.55, bodyLength * 0.49);
    const tlRight = new THREE.Mesh(tlGeo, tlMat);
    tlRight.position.set(bodyWidth * 0.34, 0.55, bodyLength * 0.49);
    mainBodyGroup.add(tlLeft);
    mainBodyGroup.add(tlRight);

    // Exhaust Pipes
    const exhaustGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.2, 12);
    exhaustGeo.rotateX(Math.PI / 2);
    const exL = new THREE.Mesh(exhaustGeo, this.matChrome);
    exL.position.set(-bodyWidth * 0.25, 0.28, bodyLength * 0.5);
    const exR = new THREE.Mesh(exhaustGeo, this.matChrome);
    exR.position.set(bodyWidth * 0.25, 0.28, bodyLength * 0.5);
    mainBodyGroup.add(exL);
    mainBodyGroup.add(exR);

    carGroup.add(mainBodyGroup);

    // --- 5. Wheels (with steering pivots for front) ---
    const wheelRadius = config.bodyStyle === 'truck' ? 0.42 : 0.34;
    const wheelWidth = config.bodyStyle === 'truck' ? 0.32 : 0.26;
    const wheelOffsetZ = bodyLength * 0.32;
    const wheelOffsetX = bodyWidth * 0.5 + wheelWidth * 0.35;
    const wheelPosY = wheelRadius;

    const wheels = [];

    // Front Left (steering pivot)
    const flPivot = new THREE.Group();
    flPivot.position.set(-wheelOffsetX, wheelPosY, -wheelOffsetZ);
    const flWheel = this.createWheelMesh(wheelRadius, wheelWidth);
    flPivot.add(flWheel);
    carGroup.add(flPivot);

    // Front Right (steering pivot)
    const frPivot = new THREE.Group();
    frPivot.position.set(wheelOffsetX, wheelPosY, -wheelOffsetZ);
    const frWheel = this.createWheelMesh(wheelRadius, wheelWidth);
    frPivot.add(frWheel);
    carGroup.add(frPivot);

    // Rear Left
    const rlWheel = this.createWheelMesh(wheelRadius, wheelWidth);
    rlWheel.position.set(-wheelOffsetX, wheelPosY, wheelOffsetZ);
    carGroup.add(rlWheel);

    // Rear Right
    const rrWheel = this.createWheelMesh(wheelRadius, wheelWidth);
    rrWheel.position.set(wheelOffsetX, wheelPosY, wheelOffsetZ);
    carGroup.add(rrWheel);

    wheels.push(flWheel, frWheel, rlWheel, rrWheel);

    // Return structured car object references
    return {
      group: carGroup,
      mainBody: mainBodyGroup,
      bodyMaterial: bodyMat,
      taillightMaterial: tlMat,
      steeringPivots: [flPivot, frPivot],
      wheels: wheels,
      exhaustPositions: [
        new THREE.Vector3(-bodyWidth * 0.25, 0.28, bodyLength * 0.52),
        new THREE.Vector3(bodyWidth * 0.25, 0.28, bodyLength * 0.52)
      ],
      config: config
    };
  }

  createWheelMesh(radius, width) {
    const wheelGroup = new THREE.Group();

    // Tire rubber
    const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, this.matTire);
    tire.castShadow = true;
    wheelGroup.add(tire);

    // Rim hub
    const rimRadius = radius * 0.65;
    const rimGeo = new THREE.CylinderGeometry(rimRadius, rimRadius, width * 1.02, 12);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, this.matRim);
    wheelGroup.add(rim);

    // Wheel spokes
    const spokeGeo = new THREE.BoxGeometry(width * 1.04, rimRadius * 1.8, 0.05);
    const spoke1 = new THREE.Mesh(spokeGeo, this.matRim);
    const spoke2 = new THREE.Mesh(spokeGeo, this.matRim);
    spoke2.rotation.x = Math.PI / 3;
    const spoke3 = new THREE.Mesh(spokeGeo, this.matRim);
    spoke3.rotation.x = (Math.PI / 3) * 2;
    wheelGroup.add(spoke1);
    wheelGroup.add(spoke2);
    wheelGroup.add(spoke3);

    return wheelGroup;
  }

  /**
   * Builds an AI traffic vehicle
   */
  createTrafficVehicle(trafficType) {
    const trafficGroup = new THREE.Group();
    trafficGroup.name = `traffic_${trafficType.type}`;

    const colorHex = trafficType.colorList[Math.floor(Math.random() * trafficType.colorList.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorHex),
      roughness: 0.35,
      metalness: 0.55
    });

    const dim = trafficType.dimensions;
    const w = dim.width;
    const h = dim.height;
    const l = dim.length;

    const wheels = [];

    if (trafficType.type === 'truck') {
      // Semi-truck cab + cargo trailer
      const cabLen = l * 0.35;
      const cabGeo = new THREE.BoxGeometry(w, h * 0.85, cabLen);
      const cab = new THREE.Mesh(cabGeo, bodyMat);
      cab.position.set(0, h * 0.5, -l * 0.3);
      cab.castShadow = true;
      trafficGroup.add(cab);

      // Cab Windshield
      const cabGlass = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.88, h * 0.4), this.matGlass);
      cabGlass.position.set(0, h * 0.65, -l * 0.3 - cabLen * 0.51);
      cabGlass.rotation.x = -0.15;
      trafficGroup.add(cabGlass);

      // Trailer
      const trailerLen = l * 0.6;
      const trailerMat = new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.5, metalness: 0.4 });
      const trailerGeo = new THREE.BoxGeometry(w * 1.05, h * 0.95, trailerLen);
      const trailer = new THREE.Mesh(trailerGeo, trailerMat);
      trailer.position.set(0, h * 0.55, l * 0.18);
      trailer.castShadow = true;
      trafficGroup.add(trailer);

      // Truck Wheels (6 wheels)
      const wheelR = 0.45;
      const wheelW = 0.35;
      const wheelPositions = [
        [-w * 0.55, wheelR, -l * 0.38],
        [w * 0.55, wheelR, -l * 0.38],
        [-w * 0.55, wheelR, l * 0.25],
        [w * 0.55, wheelR, l * 0.25],
        [-w * 0.55, wheelR, l * 0.42],
        [w * 0.55, wheelR, l * 0.42]
      ];
      for (const pos of wheelPositions) {
        const wh = this.createWheelMesh(wheelR, wheelW);
        wh.position.set(...pos);
        trafficGroup.add(wh);
        wheels.push(wh);
      }
    } else {
      // Standard Passenger / SUV / Sports
      const lowerGeo = new THREE.BoxGeometry(w, h * 0.5, l);
      const lower = new THREE.Mesh(lowerGeo, bodyMat);
      lower.position.y = h * 0.35;
      lower.castShadow = true;
      trafficGroup.add(lower);

      const cabinGeo = new THREE.BoxGeometry(w * 0.85, h * 0.55, l * 0.48);
      const cabin = new THREE.Mesh(cabinGeo, bodyMat);
      cabin.position.set(0, h * 0.75, l * 0.05);
      cabin.castShadow = true;
      trafficGroup.add(cabin);

      // Windshield
      const windshield = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8, h * 0.4), this.matGlass);
      windshield.position.set(0, h * 0.75, l * 0.05 - (l * 0.48) * 0.51);
      windshield.rotation.x = -0.35;
      trafficGroup.add(windshield);

      // 4 Wheels
      const wheelR = 0.32;
      const wheelW = 0.24;
      const wheelPositions = [
        [-w * 0.52, wheelR, -l * 0.3],
        [w * 0.52, wheelR, -l * 0.3],
        [-w * 0.52, wheelR, l * 0.3],
        [w * 0.52, wheelR, l * 0.3]
      ];
      for (const pos of wheelPositions) {
        const wh = this.createWheelMesh(wheelR, wheelW);
        wh.position.set(...pos);
        trafficGroup.add(wh);
        wheels.push(wh);
      }
    }

    // Taillights for all traffic cars
    const tlMat = this.matTaillightOff.clone();
    const tlGeo = new THREE.BoxGeometry(w * 0.25, 0.12, 0.1);
    const tlL = new THREE.Mesh(tlGeo, tlMat);
    tlL.position.set(-w * 0.32, h * 0.42, l * 0.5);
    const tlR = new THREE.Mesh(tlGeo, tlMat);
    tlR.position.set(w * 0.32, h * 0.42, l * 0.5);
    trafficGroup.add(tlL);
    trafficGroup.add(tlR);

    // Headlights
    const hlGeo = new THREE.BoxGeometry(w * 0.22, 0.12, 0.1);
    const hlL = new THREE.Mesh(hlGeo, this.matHeadlightOff);
    hlL.position.set(-w * 0.32, h * 0.38, -l * 0.5);
    const hlR = new THREE.Mesh(hlGeo, this.matHeadlightOff);
    hlR.position.set(w * 0.32, h * 0.38, -l * 0.5);
    trafficGroup.add(hlL);
    trafficGroup.add(hlR);

    return {
      group: trafficGroup,
      wheels: wheels,
      taillightMaterial: tlMat,
      dimensions: dim,
      trafficType: trafficType
    };
  }

  /**
   * Collectible Gold Coin Mesh
   */
  createCoinMesh() {
    const coinGroup = new THREE.Group();
    coinGroup.name = 'collectible_coin';

    const coinGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.15, 24);
    coinGeo.rotateZ(Math.PI / 2);

    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xffa500,
      emissiveIntensity: 0.3
    });

    const coinMesh = new THREE.Mesh(coinGeo, coinMat);
    coinMesh.castShadow = true;
    coinGroup.add(coinMesh);

    // Inner glowing ring
    const ringGeo = new THREE.TorusGeometry(0.5, 0.04, 8, 24);
    ringGeo.rotateY(Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    coinGroup.add(ring);

    return coinGroup;
  }

  /**
   * Collectible Nitro Canister Mesh
   */
  createNitroMesh() {
    const nitroGroup = new THREE.Group();
    nitroGroup.name = 'collectible_nitro';

    const canGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.1, 16);
    const canMat = new THREE.MeshStandardMaterial({
      color: 0x00d0ff,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x0099ff,
      emissiveIntensity: 0.6
    });

    const can = new THREE.Mesh(canGeo, canMat);
    nitroGroup.add(can);

    // Glowing top valve
    const valveGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.25, 12);
    const valve = new THREE.Mesh(valveGeo, this.matChrome);
    valve.position.y = 0.65;
    nitroGroup.add(valve);

    return nitroGroup;
  }

  /**
   * Roadside Street Light
   */
  createStreetLight() {
    const lightGroup = new THREE.Group();

    // Vertical pole
    const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 7.5, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a4048, metalness: 0.8, roughness: 0.3 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 3.75;
    lightGroup.add(pole);

    // Curved horizontal arm over the road
    const armGeo = new THREE.BoxGeometry(2.5, 0.1, 0.1);
    const arm = new THREE.Mesh(armGeo, poleMat);
    arm.position.set(1.2, 7.4, 0);
    lightGroup.add(arm);

    // Lamp fixture
    const lampGeo = new THREE.BoxGeometry(0.8, 0.12, 0.35);
    const lamp = new THREE.Mesh(lampGeo, poleMat);
    lamp.position.set(2.4, 7.35, 0);
    lightGroup.add(lamp);

    // Glowing emitter
    const bulbGeo = new THREE.PlaneGeometry(0.7, 0.3);
    bulbGeo.rotateX(Math.PI / 2);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfff0c0 });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(2.4, 7.28, 0);
    lightGroup.add(bulb);

    return lightGroup;
  }

  /**
   * Modern High-Rise Skyscraper Building
   */
  createBuilding(width, height, depth, theme = 'modern') {
    const buildingGroup = new THREE.Group();

    const buildingGeo = new THREE.BoxGeometry(width, height, depth);
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x181f2a,
      roughness: 0.5,
      metalness: 0.5,
      map: this.textures.getBuildingTexture(theme)
    });

    const buildingMesh = new THREE.Mesh(buildingGeo, buildingMat);
    buildingMesh.position.y = height * 0.5;
    buildingMesh.castShadow = false; // Disable building shadows for performance
    buildingMesh.receiveShadow = false;
    buildingGroup.add(buildingMesh);

    // Roof rooftop HVAC / antenna
    const roofBoxGeo = new THREE.BoxGeometry(width * 0.4, 3, depth * 0.4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x0c1017, roughness: 0.9 });
    const roofBox = new THREE.Mesh(roofBoxGeo, roofMat);
    roofBox.position.y = height + 1.5;
    buildingGroup.add(roofBox);

    // Red warning beacon at the top
    const beaconGeo = new THREE.SphereGeometry(0.4, 8, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff0022 });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.y = height + 3.4;
    buildingGroup.add(beacon);

    return buildingGroup;
  }

  /**
   * Overhead Highway Directional Gantry
   */
  createHighwayGantry(roadWidth) {
    const gantryGroup = new THREE.Group();

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8, roughness: 0.3 });

    // Left post
    const postGeo = new THREE.CylinderGeometry(0.2, 0.25, 8.5, 8);
    const postL = new THREE.Mesh(postGeo, metalMat);
    postL.position.set(-roadWidth * 0.55, 4.25, 0);
    gantryGroup.add(postL);

    // Right post
    const postR = new THREE.Mesh(postGeo, metalMat);
    postR.position.set(roadWidth * 0.55, 4.25, 0);
    gantryGroup.add(postR);

    // Horizontal truss bridge
    const trussGeo = new THREE.BoxGeometry(roadWidth * 1.15, 0.7, 0.5);
    const truss = new THREE.Mesh(trussGeo, metalMat);
    truss.position.set(0, 8.2, 0);
    gantryGroup.add(truss);

    // Overhead Directional Signboards
    const signGeo = new THREE.PlaneGeometry(6.5, 2.0);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0a5c36'; // Interstate green
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(8, 8, 496, 144);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('VELOCITY HIGHWAY 99', 256, 60);

    ctx.font = 'bold 26px Arial, sans-serif';
    ctx.fillText('SPEED ZONE ▲ NO SPEED LIMIT', 256, 115);

    const signTex = new THREE.CanvasTexture(canvas);
    const signMat = new THREE.MeshBasicMaterial({ map: signTex });

    const signFront = new THREE.Mesh(signGeo, signMat);
    signFront.position.set(0, 8.2, 0.3);
    gantryGroup.add(signFront);

    return gantryGroup;
  }
}

