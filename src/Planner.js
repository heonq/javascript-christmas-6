import MESSAGES from '../constants/Messages.js';
import { PRICES } from '../constants/Menus.js';
import VALUES from '../constants/Values.js';

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
    return this.#menus.reduce((acc, [menuName, count]) => acc + PRICES[menuName] * count, 0);
  }

  checkGiveawayMenu() {
    return this.printTotalAmountBeforeDiscount() > VALUES.giveAwayAmountNeeded;
  }
}

export default Planner;
