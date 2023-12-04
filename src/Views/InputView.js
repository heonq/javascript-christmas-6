import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGES.dateQuery);
    return input;
  },
};

export default InputView;
