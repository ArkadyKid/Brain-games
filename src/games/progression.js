import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const numbersCount = 10;
const minNumber = 0;
const maxNumber = 100;

const getProgression = (initialNumber, step) => {
  const arr = [];
  arr.push(initialNumber);
  for (let i = 1; i < numbersCount; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  return arr;
};

const generateQuestionObj = () => {
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = Math.ceil(Math.random() * numbersCount);
  const step = getRandomNumber(minNumber, maxNumber);
  const initialArr = getProgression(initialNumber, step);
  const result = initialArr[missingPosition - 1];
  initialArr[missingPosition - 1] = '..';
  return {
    question: initialArr.join(' '),
    result: String(result),
  };
};

const task = 'What number is missing in the progression?';

export default () => gameWrapper(task, generateQuestionObj);
