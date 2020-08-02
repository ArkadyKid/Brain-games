import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 1000;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionObj = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  return {
    question: number,
    result: (isPrime(number) ? 'yes' : 'no'),
  };
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameWrapper(task, generateQuestionObj);
