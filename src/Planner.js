import MESSAGES from '../constants/Messages.js';
import { PRICES } from '../constants/Menus.js';
import Formatter from '../utils/Formatter.js';

class Planner {
  #date;

  #menus;

  constructor(menus, date) {
    this.#date = date;
    this.#menus = menus;
  }

  printMenus() {
    return this.#menus.map(
      ([menuName, menuCount]) => `${menuName} ${menuCount}${MESSAGES.printCount}`,
    );
  }

  printTotalAmountBeforeDiscount() {
    const totalAmount = this.#menus.reduce(
      (acc, [menuName, count]) => acc + PRICES[menuName] * count,
      0,
    );
    return Formatter.printCommaEachThreeDigits(totalAmount);
  }
}

export default Planner;
