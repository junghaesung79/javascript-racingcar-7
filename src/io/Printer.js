import { MissionUtils } from '@woowacourse/mission-utils';

class Printer {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static newline() {
    MissionUtils.Console.print('');
  }
}

export default Printer;
