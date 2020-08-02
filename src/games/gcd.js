import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const getNode = (a, b) => {
  const lowerNumber = Math.min(a, b);
  const greaterNumber = Math.max(a, b);

  if (!Number(a) || !Number(b)) {
    return 'error';
  }
  if (greaterNumber % lowerNumber === 0) {
    return lowerNumber;
  }
  for (let i = lowerNumber - 1; i > 1; i -= 1) {
    if ((greaterNumber % i === 0) && (lowerNumber % i === 0)) {
      return i;
    }
  }
  return 1;
};
const getQuestion = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return `${a} ${b}`;
};
const getResult = (question) => {
  const [a, b] = question.split(' ');
  return String(getNode(a, b));
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => gameWrapper(task, getQuestion, getResult);
