import getRandomNumber from '../utils.js';
import { isAnswerCorrect, questionAnswer } from '../index.js';

const isEven = (number) => ((number % 2) === 0);

export default () => {
  const minNumber = 0;
  const maxNumber = 100;

  const number = getRandomNumber(minNumber, maxNumber);
  const answer = questionAnswer(number);
  const result = isEven(number) ? 'yes' : 'no';

  return isAnswerCorrect(String(answer), result);
};
