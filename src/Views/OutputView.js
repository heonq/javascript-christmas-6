import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const OutputView = {
  printGreeting() {
    Console.print(MESSAGES.greeting);
  },
  printMessage(message) {
    Console.print(message);
  },
  printNoticeMessage(date) {
    Console.print(MESSAGES.dateInformation(date));
    Console.print(MESSAGES.lineBreak);
  },
  printMenus(menus) {
    Console.print(MESSAGES.HEADERS.menu);
    menus.forEach((menu) => Console.print(menu));
    Console.print(MESSAGES.lineBreak);
  },
  printTotalAmountBeforeDiscount(amount) {
    Console.print(MESSAGES.HEADERS.totalAmountBeforeDiscount);
    Console.print(amount);
    Console.print(MESSAGES.lineBreak);
  },
};

export default OutputView;
