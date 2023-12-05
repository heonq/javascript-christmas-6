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
};

export default OutputView;
