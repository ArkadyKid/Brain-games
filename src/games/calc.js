import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const generateQuestionResult = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const expressions = {
    '-': () => firstNumber - secondNumber,
    '+': () => firstNumber + secondNumber,
    '*': () => firstNumber * secondNumber,
  };
  const signs = Object.keys(expressions);
  const signsMaxIndex = signs.length - 1;
  const signIndex = getRandomNumber(minNumber, signsMaxIndex);
  const sign = signs[signIndex];
  return {
    question: `${firstNumber} ${sign} ${secondNumber}`,
    result: String(expressions[sign]()),
  };
};

const task = 'What is the result of the expression?';

export default () => startGame(task, generateQuestionResult);
