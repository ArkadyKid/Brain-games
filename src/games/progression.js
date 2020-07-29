import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const numbersCount = 10;
const minNumber = 0;
const maxNumber = 100;

const getProgression = (number, step) => {
  const arr = [];
  arr.push(number);
  for (let i = 1; i < numbersCount; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  return arr;
};

const getQuestion = () => {
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = 0;
  const step = getRandomNumber(minNumber, maxNumber);
  const initialArr = getProgression(initialNumber, step);
  const getProgressionResult = () => {
    initialArr[missingPosition] = '..';
    return initialArr.join(' ');
  };
  return getProgressionResult();
};
const getResult = (question) => {
  const questionArr = question.split(' ');
  for (let i = 0; i < questionArr.length; i += 1) {
    if (questionArr[i] === '..') {
      const step = Number(questionArr[1] - questionArr[0]);
      const prevNumber = Number(questionArr[i - 1]);
      const nextNumber = Number(questionArr[i + 1]);
      return (i === 0) ? String(nextNumber - step) : String(prevNumber + step);
    }
  }
};

const task = 'What number is missing in the progression?';

export default () => gameWrapper(task, getQuestion, getResult);

