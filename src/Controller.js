import { InputView } from './view/index.js';

class Controller {
  async run() {
    const inputView = new InputView();

    const names = await inputView.getNames();
  }
}

export default Controller;
