import MESSAGES from '../constants/Messages.js';
import { PRICES } from '../constants/Menus.js';

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
}

export default Planner;
