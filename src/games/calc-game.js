import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const countOfSign = 3;
  const getRandomNumberOfSign = () => Math.ceil(Math.random() * countOfSign);
  const signs = {
    1: '-',
    2: '+',
    3: '*',
  };
  const getSign = () => signs[getRandomNumberOfSign()];
  const a = getRandomNumber();
  const b = getRandomNumber();
  const sign = getSign();
  const expression = `${a} ${sign} ${b}`;
  const answer = questionAnswer(expression);
  const result = eval(Number(a) + sign + Number(b));

  return answerHandler(Number(answer), result);
};
