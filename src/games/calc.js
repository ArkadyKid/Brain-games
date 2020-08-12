import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const operations = {
    '-': () => firstNumber - secondNumber,
    '+': () => firstNumber + secondNumber,
    '*': () => firstNumber * secondNumber,
  };
  const signs = Object.keys(operations);
  const signsMaxIndex = signs.length - 1;
  const signIndex = getRandomNumber(minNumber, signsMaxIndex);
  const sign = signs[signIndex];
  return {
    question: `${firstNumber} ${sign} ${secondNumber}`,
    result: String(operations[sign]()),
  };
};

const task = 'What is the result of the expression?';

export default () => startGame(task, generateQuestionAndAnswer);
