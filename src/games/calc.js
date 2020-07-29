import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;
const signs = ['-', '+', '*'];
const signsCount = signs.length;

const getQuestion = () => {
  const signNumber = getRandomNumber(minNumber, signsCount);
  const sign = signs[signNumber];
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return `${a} ${sign} ${b}`;
};
const getResult = (question) => {
  const [a, sign, b] = question.split(' ');
  const expressions = {
    '-': () => a - b,
    '+': () => Number(a) + Number(b),
    '*': () => a * b,
  };
  return String(expressions[sign]());
};

const task = 'What is the result of the expression?';

export default () => gameWrapper(task, getQuestion, getResult);
