import { Console } from '@woowacourse/mission-utils';
import { throwError } from '../utils/errorHandler.js';

class Reader {
  static async readLine(query) {
    const line = await Console.readLineAsync(query);
    if (line.trim() === '') throwError('잘못된 입력입니다.');
    return line;
  }

  static async readNumber(query) {
    const line = await Console.readLineAsync(query);
    if (!Number.isInteger(line)) throwError('잘못된 입력입니다.');
    return Number(line);
  }
}

export default Reader;
