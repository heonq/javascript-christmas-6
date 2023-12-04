import PromotionController from './PromotionController.js';

class App {
  async run() {
    await new PromotionController().play();
  }
}

export default App;
