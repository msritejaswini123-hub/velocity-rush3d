// VELOCITY RUSH 3D - Vehicle Garage & Progression System
import { VEHICLE_CONFIGS } from './Constants.js';

export class VehicleGarage {
  constructor(storageManager) {
    this.storage = storageManager;
    this.cars = JSON.parse(JSON.stringify(VEHICLE_CONFIGS));
    this.refreshUnlockStates();
  }

  refreshUnlockStates() {
    const unlockedIds = this.storage.getUnlockedCars();
    for (const car of this.cars) {
      car.unlocked = unlockedIds.includes(car.id);
      const customColor = this.storage.getCustomColor(car.id);
      if (customColor) {
        car.color = customColor;
      }
    }
  }

  getAllCars() {
    this.refreshUnlockStates();
    return this.cars;
  }

  getCarById(carId) {
    return this.cars.find(c => c.id === carId) || this.cars[0];
  }

  getSelectedCar() {
    const selectedId = this.storage.getSelectedCar();
    return this.getCarById(selectedId);
  }

  selectCar(carId) {
    const car = this.getCarById(carId);
    if (!car.unlocked) return false;
    this.storage.setSelectedCar(carId);
    return true;
  }

  canAfford(carId) {
    const car = this.getCarById(carId);
    if (!car || car.unlocked) return false;
    return this.storage.getCoins() >= car.price;
  }

  buyCar(carId) {
    const car = this.getCarById(carId);
    if (!car || car.unlocked) return false;

    const success = this.storage.spendCoins(car.price);
    if (success) {
      this.storage.unlockCar(carId);
      this.refreshUnlockStates();
      this.selectCar(carId);
      return true;
    }
    return false;
  }

  setCarColor(carId, hexColor) {
    const car = this.getCarById(carId);
    if (car) {
      car.color = hexColor;
      this.storage.setCustomColor(carId, hexColor);
    }
  }
}

