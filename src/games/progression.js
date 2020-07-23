import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const amountOfNumber = 10;
  const initialNumber = getRandomNumber(100);
  const missingPosition = Math.ceil(Math.random() * amountOfNumber);
  const step = getRandomNumber(100);
  const getProgression = () => {
    const arr = [];
    arr.push(initialNumber);
    for (let i = 1; i < amountOfNumber; i += 1) {
      arr.push(arr[i - 1] + step);
    }
    return arr;
  };
  const initialArr = getProgression();
  const result = initialArr[missingPosition];
  const getCreateProgressionResult = () => {
    initialArr[missingPosition] = '..';
    return initialArr.join(' ');
  };
  const answer = questionAnswer(getCreateProgressionResult());
  return answerHandler(answer, String(result));
};
