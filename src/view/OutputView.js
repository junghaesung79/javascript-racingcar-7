import { CONFIG, SCRIPT_MESSAGES } from '../constants/index.js';
import { Printer } from '../io/index.js';

class OutputView {
  static printMiddleScore(logs) {
    const tryResult = this.#toResult(logs);

    Printer.print(SCRIPT_MESSAGES.tryResult);
    Printer.print(tryResult);
  }

  static #toResult(logs) {
    return logs.reduce((acc, log) => {
      return acc + this.#toParagraphLog(log) + '\n';
    }, '');
  }

  static #toParagraphLog(carDatas) {
    return carDatas.map(({ name, score }) => {
      return `${name} : ${this.#toStringScore(score)}`;
    });
  }

  static #toStringScore(score) {
    return CONFIG.scoreSymbol.repeat(score);
  }
}

export default OutputView;
