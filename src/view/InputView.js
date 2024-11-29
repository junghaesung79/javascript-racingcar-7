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
    if (names.find((a) => a.length > 5)) throwError(ERROR_MESSAGES.exceedMaxNameLength);
    if (names.length > CONFIG.maxCarCount) throwError(ERROR_MESSAGES.exceedMaxNamesCount);
  }
}

export default InputView;
