import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const SIGNCOUNT = 3;
  const getRandomNumberOfSign = () => Math.ceil(Math.random() * SIGNCOUNT);
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
  const getResult = () => eval(Number(a) + sign + Number(b));
  return answerHandler(Number(answer), getResult())
};
