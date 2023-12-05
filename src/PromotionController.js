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
    return this.readMenus(date);
  }

  async readMenus(date) {
    const menus = await InputView.readMenus();
    this.handleMenus(menus, date);
  }

  handleMenus(menus, date) {
    if (!Validator.validateMenus(menus)) return this.readMenus(date);
    this.printNoticeMessage(date);
  }

  printNoticeMessage(date) {
    OutputView.printNoticeMessage(date);
  }
}

export default PromotionController;
