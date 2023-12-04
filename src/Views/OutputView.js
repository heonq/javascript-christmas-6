import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const OutputView = {
  printGreeting() {
    Console.print(MESSAGES.greeting);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  // ...
};

export default OutputView;
