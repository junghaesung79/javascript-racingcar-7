import { GameService } from './services/index.js';
import { InputView } from './view/index.js';

class Controller {
  async run() {
    const inputView = new InputView();

    const names = await inputView.getNames();
    const tryCount = await inputView.getTryCount();

    const gameService = new GameService(names);
    gameService.play(tryCount);
    gameService.getResult();
  }
}

export default Controller;
