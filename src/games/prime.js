import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const number = getRandomNumber(1000);
  const answer = questionAnswer(number);
  const isPrime = () => {
    for (let i = 2; i < (number / 2); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const result = isPrime() ? 'yes' : 'no';

  return answerHandler(answer, result);
};
