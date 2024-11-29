import { CONFIG, SCRIPT_MESSAGES } from '../constants/index.js';
import { Printer } from '../io/index.js';

class OutputView {
  static printMiddleScore(logs) {
    const tryResult = this.#getResult(logs);

    Printer.print(SCRIPT_MESSAGES.tryResult);
    Printer.print(tryResult);
  }

  static #getResult(logs) {
    return logs
      .map((carDatas) => {
        return this.#getParagraph(carDatas);
      })
      .join('\n\n');
  }

  static #getParagraph(carDatas) {
    return carDatas
      .map(({ name, score }) => {
        return `${name} : ${this.#toStringScore(score)}`;
      })
      .join('\n');
  }

  static #toStringScore(score) {
    return CONFIG.scoreSymbol.repeat(score);
  }

  static printWinners(winners) {
    const names = winners.map((car) => car.getName());

    Printer.print(`${SCRIPT_MESSAGES.finalWinner} ${names.join(', ')}`);
  }
}

export default OutputView;
