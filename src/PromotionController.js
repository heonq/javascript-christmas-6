import OutputView from './Views/OutputView.js';
import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';

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
    this.handleDate(date);
  }

  handleDate(date) {
    if (!Validator.validateDate(date)) return this.readDate();
    return this.readMenus();
  }

  async readMenus() {
    const menus = await InputView.readMenus();
    this.handleMenus(menus);
  }

  handleMenus(menus) {
    if (!Validator.validateMenus(menus)) return this.readMenus();
  }
}

export default PromotionController;
