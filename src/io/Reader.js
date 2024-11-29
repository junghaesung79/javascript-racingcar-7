import { Console } from '@woowacourse/mission-utils';
import { throwError } from '../utils/errorHandler.js';

class Reader {
  static async readLine(query) {
    const line = await Console.readLineAsync(query);
    if (line.trim() === '') throwError('잘못된 입력입니다. 다시 입력해 주세요.');
    return line;
  }
}

export default Reader;
