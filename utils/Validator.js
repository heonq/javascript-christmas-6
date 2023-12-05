import VALUES from '../constants/Values.js';
import MESSAGES from '../constants/Messages.js';
import handleError from './handleError.js';
import { PRICES } from '../constants/Menus.js';

const Validator = {
  validateDate(date) {
    if (date < VALUES.minimumDate || date > VALUES.maximumDate || !Number.isSafeInteger(date)) {
      return handleError(MESSAGES.invalidDate);
    }
    return true;
  },
};

export default Validator;
