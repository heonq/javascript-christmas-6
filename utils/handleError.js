import OutputView from '../src/Views/OutputView.js';

const handleError = (error) => {
  try {
    throw new Error(error);
  } catch {
    OutputView.printMessage(error);
    return false;
  }
};

export default handleError;
