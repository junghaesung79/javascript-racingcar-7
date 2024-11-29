import { CONFIG } from '../constants/index.js';
import { getTryNumber } from '../utils/random.js';

class Car {
  #name;
  #score = 0;

  constructor(name) {
    this.#name = name;
  }

  tryOnce() {
    const tryNumber = getTryNumber();
    if (tryNumber >= CONFIG.minSuccessNumber) this.#plusScore();
  }

  #plusScore() {
    this.#score += 1;
  }

  getData() {
    return { name: this.#name, score: this.#score };
  }

  getName() {
    return this.#name;
  }

  getScore() {
    return this.#score;
  }
}

export default Car;
