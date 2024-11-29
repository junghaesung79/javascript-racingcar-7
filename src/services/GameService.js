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
