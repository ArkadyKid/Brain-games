import { getRandomNumber, isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const minNumber = 0;
  const maxNumber = 100;
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const answer = questionAnswer(`${firstNumber} ${secondNumber}`);
  const getResult = () => {
    if (firstNumber === secondNumber) {
      return firstNumber;
    }
    const lowerNumber = ((firstNumber < secondNumber) ? firstNumber : secondNumber);
    const greaterNumber = ((firstNumber > secondNumber) ? firstNumber : secondNumber);
    if (greaterNumber % lowerNumber === 0) {
      return String(lowerNumber);
    }
    let result = 1;
    for (let i = 2; i < (lowerNumber / 2); i += 1) {
      if ((lowerNumber % i === 0) && (greaterNumber % i === 0)) {
        result = i;
      }
    }
    return result;
  };

  return isAnswerCorrect(answer, String(getResult()));
};
