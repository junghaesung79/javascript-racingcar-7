import { Console } from '@woowacourse/mission-utils';
import { MyUtils } from './index.js';

class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  canMoveForward(number) {
    return number >= 4;
  }

  moveForward() {
    this.score += 1;
  }

  printScore() {
    Console.print(`${this.name} : ${'-'.repeat(this.score)}`);
  }

  attemptMove() {
    const randomNumber = MyUtils.getRandomSingleDigit();
    if (this.canMoveForward(randomNumber)) {
      this.moveForward();
    }

    this.printScore();
  }
}

export default Car;