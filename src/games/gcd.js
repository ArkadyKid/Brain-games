import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const getQuestion = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return `${a} ${b}`;
};
const getResult = (question) => {
  const [a, b] = question.split(' ');
  if (a === b) {
    return a;
  }
  const lowerNumber = ((a < b) ? a : b);
  const greaterNumber = ((a > b) ? a : b);
  if (greaterNumber % lowerNumber === 0) {
    return String(lowerNumber);
  }
  let result = 1;
  for (let i = 2; i < (lowerNumber / 2); i += 1) {
    if ((lowerNumber % i === 0) && (greaterNumber % i === 0)) {
      result = i;
    }
  }
  return String(result);
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => gameWrapper(task, getQuestion, getResult);
