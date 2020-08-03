import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const generateQuestionObj = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return {
    question: `${a} ${b}`,
    result: String(getGcd(a, b)),
  };
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => gameWrapper(task, generateQuestionObj);
