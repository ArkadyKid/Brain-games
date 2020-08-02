import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;
const getExpression = (a, b) => (
  {
    '-': () => a - b,
    '+': () => Number(a) + Number(b),
    '*': () => a * b,
  });
const signs = Object.keys(getExpression());
const signsCount = signs.length - 1;

const generateQuestionObj = () => {
  const signIndex = getRandomNumber(minNumber, signsCount);
  const sign = signs[signIndex];
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return {
    question: `${a} ${sign} ${b}`,
    result: String(getExpression(a, b)[sign]()),
  };
};

const task = 'What is the result of the expression?';

export default () => gameWrapper(task, generateQuestionObj);
