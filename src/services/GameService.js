import { EventEmitter } from '../core/index.js';
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
      this.#tryAllCars();
    });
  }

  #tryAllCars() {
    this.#cars.forEach((car) => {
      car.tryOnce();
    });

    EventEmitter.emit('tryOnce', this.#getProgresses());
  }

  #getProgresses() {
    return this.#cars.map((car) => {
      return car.getData();
    });
  }

  getWinners() {
    const highestScore = this.#getHighestScore();
    return this.#cars.filter(this.#sameScoreWith(highestScore));
  }

  #getHighestScore() {
    return this.#cars.reduce((acc, car) => {
      return Math.max(acc, car.getScore());
    }, 0);
  }

  #sameScoreWith(score) {
    return (car) => car.getScore() === score;
  }
}

export default GameService;
