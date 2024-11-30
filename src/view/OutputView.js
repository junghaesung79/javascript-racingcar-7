import { CONFIG, SCRIPT_MESSAGES } from '../constants/index.js';
import { Printer } from '../io/index.js';

class OutputView {
  static printTryResult(logs) {
    Printer.print(SCRIPT_MESSAGES.tryResult);
  }

  static printGameProgress(progresses) {
    const positions = this.#getPositions(progresses);

    Printer.print(positions.join('\n'));
  }

  static #getPositions(carDatas) {
    return carDatas.map(({ name, score }) => {
      return `${name} : ${this.#toStringScore(score)}`;
    });
  }

  static #toStringScore(score) {
    return CONFIG.scoreSymbol.repeat(score);
  }

  static printWinners(winners) {
    const nameString = winners.map((car) => car.getName()).join(', ');

    Printer.print(`${SCRIPT_MESSAGES.finalWinner} ${nameString}`);
  }
}

export default OutputView;
