import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const numbersCount = 10;
const minNumber = 0;
const maxNumber = 100;

let number = 0;

const getProgression = (initialNumber, step) => {
  const arr = [];
  arr.push(initialNumber);
  for (let i = 1; i < numbersCount; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  return arr;
};

const getQuestion = () => {
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = Math.ceil(Math.random() * numbersCount);

  const step = getRandomNumber(minNumber, maxNumber);
  const initialArr = getProgression(initialNumber, step);
  const getProgressionResult = () => {
    number = initialArr[missingPosition - 1];
    initialArr[missingPosition - 1] = '..';
    return initialArr.join(' ');
  };
  return getProgressionResult();
};
const getResult = () => number;

const task = 'What number is missing in the progression?';

export default () => gameWrapper(task, getQuestion, getResult);
