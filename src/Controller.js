import { GameService } from './services/index.js';
import { InputView, OutputView } from './view/index.js';

class Controller {
  async run() {
    const names = await InputView.getNames();
    const tryCount = await InputView.getTryCount();

    const gameService = new GameService(names);
    const logs = gameService.play(tryCount);
    OutputView.printMiddleScore(logs);

    const winners = gameService.getWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
