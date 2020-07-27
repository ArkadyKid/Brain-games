import { getRandomNumber, isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number = getRandomNumber(minNumber, maxNumber);
  const answer = questionAnswer(number);
  const isEven = ((number % 2) === 0);
  const result = isEven ? 'yes' : 'no';

  return isAnswerCorrect(String(answer), result);
};
