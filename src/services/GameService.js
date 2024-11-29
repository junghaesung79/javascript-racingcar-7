import { Car } from '../models/index.js';

class GameService {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => {
      return new Car(name);
    });
  }

  play(tryCount) {
    [...Array(tryCount)].forEach(() => {
      this.#cars.tryOnce;
    });
  }

  getResult() {
    return 0;
  }
}

export default GameService;
