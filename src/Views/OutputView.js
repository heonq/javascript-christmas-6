import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';
import Formatter from '../../utils/Formatter.js';

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
  printWithLineBreak(title, content) {
    Console.print(MESSAGES.HEADERS[title]);
    Console.print(content);
    Console.print(MESSAGES.lineBreak);
  },
  printMenus(menus) {
    Console.print(MESSAGES.HEADERS.menu);
    menus.forEach((menu) => Console.print(menu));
    Console.print(MESSAGES.lineBreak);
  },
  printTotalAmountBeforeDiscount(amount) {
    this.printWithLineBreak(
      'totalAmountBeforeDiscount',
      Formatter.printCommaEachThreeDigits(amount) + MESSAGES.amount,
    );
  },
  printGiveaway(giveawayBoolean) {
    return giveawayBoolean
      ? this.printWithLineBreak('giveawayMenu', MESSAGES.giveawayChampagne)
      : this.printWithLineBreak('giveawayMenu', MESSAGES.none);
  },
};

export default OutputView;
