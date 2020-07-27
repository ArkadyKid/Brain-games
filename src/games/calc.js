import { getRandomNumber, isAnswerCorrect, questionAnswer } from '../index.js';

export default () => {
  const minNumber = 0;
  const maxNumber = 100;
  const signs = {
    1: '-',
    2: '+',
    3: '*',
  };
  const signsCount = Object.entries(signs).length;
  const signNumber = getRandomNumber(minNumber, signsCount);
  const getSign = () => signs[signNumber];
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  const sign = getSign();
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
