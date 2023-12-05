import VALUES from '../constants/Values.js';
import MESSAGES from '../constants/Messages.js';
import handleError from './handleError.js';
import { PRICES, CATEGORIES } from '../constants/Menus.js';

const Validator = {
  validateDate(date) {
    if (date < VALUES.minimumDate || date > VALUES.maximumDate || !Number.isSafeInteger(date)) {
      return handleError(MESSAGES.invalidDate);
    }
    return true;
  },
  validateMenus(menus) {
    const menuNames = menus.map(([menuName]) => menuName);
    const menuCounts = menus.map(([_, menuCount]) => menuCount);
    return this.checkMenuIncluded(menuNames) ||
      this.checkDuplicatedMenu(menuNames) ||
      this.checkTotalCount(menuCounts) ||
      this.checkEachCount(menuCounts) ||
      this.checkOnlyDrink(menuNames)
      ? handleError(MESSAGES.invalidMenu)
      : true;
  },

  checkMenuIncluded(menuNames) {
    return !menuNames.every((menuName) => Object.keys(PRICES).includes(menuName));
  },

  checkDuplicatedMenu(menuNames) {
    return menuNames.length !== new Set(menuNames).size;
  },

  checkTotalCount(menuCounts) {
    const totalMenuCount = menuCounts.reduce((acc, count) => acc + count);
    return totalMenuCount > VALUES.maximumMenuCount || totalMenuCount < VALUES.minimumMenuCount;
  },
  checkEachCount(menuCounts) {
    return !menuCounts.every(
      (menuCount) => menuCount >= VALUES.minimumMenuCount && menuCount <= VALUES.maximumMenuCount,
    );
  },
  checkOnlyDrink(menuNames) {
    return menuNames.every((menuName) => CATEGORIES.drink.includes(menuName));
  },
};

export default Validator;
