import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return getGcd(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  return {
    question: `${firstNumber} ${secondNumber}`,
    result: String(getGcd(firstNumber, secondNumber)),
  };
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => startGame(task, generateQuestionAndAnswer);
