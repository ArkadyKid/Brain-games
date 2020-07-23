import { getRandomNumber, isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const number = getRandomNumber(100);
  const answer = questionAnswer(number);
  const isEven = ((number % 2) === 0);
  const result = isEven ? 'yes' : 'no';

  return isAnswerCorrect(String(answer), result);
};
