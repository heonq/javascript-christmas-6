import OutputView from './Views/OutputView.js';

class PromotionController {
  async play() {
    this.printGreeting();
  }

  printGreeting() {
    OutputView.printGreeting();
  }
}

export default PromotionController;
