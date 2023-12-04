import OutputView from './Views/OutputView.js';
import InputView from './Views/InputView.js';

class PromotionController {
  async play() {
    this.printGreeting();
  }

  printGreeting() {
    OutputView.printGreeting();
    this.readDate();
  }

  async readDate() {
    const date = await InputView.readDate();
  }
}

export default PromotionController;
