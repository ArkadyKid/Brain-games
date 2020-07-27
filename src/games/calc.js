import getRandomNumber from '../utils.js';
import { isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const minNumber = 0;
  const maxNumber = 100;
  const signs = ['-', '+', '*'];
  const signsCount = signs.length;

  const signNumber = getRandomNumber(minNumber, signsCount);
  const sign = signs[signNumber];
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  const expression = `${a} ${sign} ${b}`;
  const answer = questionAnswer(expression);
  const expressions = {
    '-': () => a - b,
    '+': () => a + b,
    '*': () => a * b,
  };
  const result = expressions[sign]();

  return isAnswerCorrect(answer, String(result));
};
