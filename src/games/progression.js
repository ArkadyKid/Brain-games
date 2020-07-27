import { getRandomNumber, isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const numbersCount = 10;
  const minNumber = 0;
  const maxNumber = 100;
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = Math.ceil(Math.random() * numbersCount);
  const step = getRandomNumber(minNumber, maxNumber);
  const getProgression = () => {
    const arr = [];
    arr.push(initialNumber);
    for (let i = 1; i < numbersCount; i += 1) {
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
  return isAnswerCorrect(answer, String(result));
};
