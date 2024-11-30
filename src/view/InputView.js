import { CONFIG, ERROR_MESSAGES, INPUT_MESSAGES } from '../constants/index.js';
import { Reader } from '../io/index.js';
import { throwError } from '../utils/errorHandler.js';

class InputView {
  static async getNames() {
    const names = await Reader.readCSVString(INPUT_MESSAGES.names);

    this.#validateNames(names);

    return names;
  }

  static #validateNames(names) {
    if (names.find((a) => a.length > CONFIG.maxNameLength))
      throwError(ERROR_MESSAGES.exceedMaxNameLength);
    if (names.length > CONFIG.maxNameCount) throwError(ERROR_MESSAGES.exceedMaxNamesCount);
  }

  static async getTryCount() {
    const tryCount = await Reader.readNumber(INPUT_MESSAGES.tryCount);

    this.#validateTryCount(tryCount);

    return tryCount;
  }

  static #validateTryCount(tryCount) {
    if (String(tryCount).length > CONFIG.maxTryCount) throwError(ERROR_MESSAGES.exceedMaxTryCount);
  }
}

export default InputView;
