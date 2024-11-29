import { Car } from '../models/index.js';

class GameService {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => {
      return new Car(name);
    });
  }

  play(tryCount) {
    return [...Array(tryCount)].map(() => {
      this.#tryAllCars();
      return this.#getDatas();
    });
  }

  #tryAllCars() {
    this.#cars.forEach((car) => {
      car.tryOnce();
    });
  }

  #getDatas() {
    return this.#cars.map((car) => {
      return car.getData();
    });
  }

  getWinners() {
    return 0;
  }
}

export default GameService;
