import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;
const getExpression = (a, b) => {
  return {
    '-': () => a - b,
    '+': () => Number(a) + Number(b),
    '*': () => a * b,
  };
};
const signs = Object.keys(getExpression());
const signsCount = signs.length - 1;

const getQuestion = () => {
  const signIndex = getRandomNumber(minNumber, signsCount);
  const sign = signs[signIndex];
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return `${a} ${sign} ${b}`;
};
const getResult = (question) => {
  const [a, sign, b] = question.split(' ');
  return String(getExpression(a, b)[sign]());
};

const task = 'What is the result of the expression?';

export default () => gameWrapper(task, getQuestion, getResult);
