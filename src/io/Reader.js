import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/index.js';
import { throwError } from '../utils/errorHandler.js';

class Reader {
  static async #readAndNormalize(query) {
    const line = await Console.readLineAsync(query);
    const normalizedLine = line.trim();

    if (normalizedLine === '') {
      throwError(ERROR_MESSAGES.emptyInput);
    }

    return normalizedLine;
  }

  static async readLine(query) {
    return this.#readAndNormalize(query);
  }

  static async readNumber(query) {
    const normalizedLine = await this.#readAndNormalize(query);

    if (!Number.isInteger(Number(normalizedLine))) {
      throwError(ERROR_MESSAGES.invalidNumber);
    }

    return Number(normalizedLine);
  }

  static async readCSVString(query) {
    const normalizedLine = await this.#readAndNormalize(query);
    const splittedLine = normalizedLine.split(',');

    if (splittedLine.some((word) => word.trim() === '')) {
      throwError(ERROR_MESSAGES.invalidCSV);
    }

    return splittedLine;
  }

  static async readCSVNumber(query) {
    const normalizedLine = await this.#readAndNormalize(query);
    const splittedLine = normalizedLine.split(',');

    if (splittedLine.some((word) => word.trim() === '')) {
      throwError(ERROR_MESSAGES.invalidCSV);
    }
    if (splittedLine.some((word) => !Number.isInteger(Number(word.trim())))) {
      throwError(ERROR_MESSAGES.invalidNumber);
    }

    return splittedLine;
  }
}

export default Reader;
