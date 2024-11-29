import { CONFIG, ERROR_MESSAGES, INPUT_MESSAGES } from '../constants/index.js';
import { Reader } from '../io/index.js';
import { throwError } from '../utils/errorHandler.js';

class InputView {
  async getNames() {
    const line = await Reader.readLine(INPUT_MESSAGES.names);
    const names = line.split(',');

    this.#validateNames(names);

    return names;
  }

  #validateNames(names) {
    if (names.find((a) => a.length > CONFIG.maxNameLength))
      throwError(ERROR_MESSAGES.exceedMaxNameLength);
    if (names.length > CONFIG.maxNameCount) throwError(ERROR_MESSAGES.exceedMaxNamesCount);
  }

  async getTryCount() {
    const tryCount = await Reader.readNumber(INPUT_MESSAGES.tryCount);

    this.#validateTryCount(tryCount);

    return names;
  }

  #validateTryCount(tryCount) {
    if (String(tryCount).length > CONFIG.maxTryCount) throwError(ERROR_MESSAGES.exceedMaxTryCount);
  }
}

export default InputView;
