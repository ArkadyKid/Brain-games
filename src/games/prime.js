import getRandomNumber from '../utils.js';
import { isAnswerCorrect, questionAnswer } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const minNumber = 0;
  const maxNumber = 1000;

  const number = getRandomNumber(minNumber, maxNumber);
  const answer = questionAnswer(number);
  const result = isPrime(number) ? 'yes' : 'no';

  return isAnswerCorrect(answer, result);
};
