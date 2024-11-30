import { GameService } from './services/index.js';
import { EventEmitter } from './core/index.js';
import { InputView, OutputView } from './view/index.js';

class Controller {
  constructor() {
    EventEmitter.on('tryOnce', (data) => {
      OutputView.printGameProgress(data);
    });
  }

  async run() {
    const names = await InputView.getNames();
    const tryCount = await InputView.getTryCount();

    const gameService = new GameService(names);
    gameService.play(tryCount);

    const winners = gameService.getWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
