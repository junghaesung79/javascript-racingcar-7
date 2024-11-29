import { CONFIG, SCRIPT_MESSAGES } from '../constants/index.js';
import { Printer } from '../io/index.js';

class OutputView {
  static printMiddleScore(logs) {
    this.#printNewline();
    Printer.print(SCRIPT_MESSAGES.tryResult);

    logs.forEach((log) => {
      this.#printOneTry(log);
    });
  }

  static #printOneTry(carDatas) {
    const scoreLines = carDatas.map(({ name, score }) => {
      return `${name} : ${this.#visualizeScore(score)}`;
    });

    Printer.print(scoreLines.join('\n'));
  }

  static #visualizeScore(score) {
    return CONFIG.scoreSymbol.repeat(score);
  }

  static #printNewline() {
    Printer.print('');
  }
}

export default OutputView;
