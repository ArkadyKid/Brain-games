import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const countOfNumber = 10;
  const initialNumber = getRandomNumber();
  const missingPosition = Math.ceil(Math.random() * countOfNumber);
  const step = getRandomNumber();
  const createProgression = () => {
    const arr = [];
    arr.push(initialNumber);
    for (let i = 1; i < countOfNumber; i += 1) {
      arr.push(arr[i - 1] + step);
    }
    return arr;
  };
  const initialArr = createProgression();
  const result = initialArr[missingPosition];
  const createProgressionResult = () => {
    initialArr[missingPosition] = '..';
    return initialArr.join(' ');
  };
  const answer = questionAnswer(createProgressionResult());
  return answerHandler(answer, String(result));
};
