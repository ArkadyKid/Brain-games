import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const numbersCount = 10;
const minMissingPositionNumber = 1;
const minNumber = 0;
const maxNumber = 100;

const getProgression = (initialNumber, step) => {
  const arr = [];
  for (let i = 0; i < numbersCount; i += 1) {
    arr.push(initialNumber + step * i);
  }
  return arr;
};

const generateQuestionResult = () => {
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = getRandomNumber(minMissingPositionNumber, numbersCount);
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

export default () => startGame(task, generateQuestionResult);
