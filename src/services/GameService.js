import { Cars } from '../models/index.js';

class GameService {
  #cars;

  constructor(tryCount) {
    this.#cars = new Cars(tryCount);
  }

  play(tryCount) {
    [...Array(tryCount)].forEach(() => {
      this.#cars.try;
    });
  }

  getResult() {
    return 0;
  }
}

export default GameService;
