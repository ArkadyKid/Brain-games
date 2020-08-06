import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => ((number % 2) === 0);
const generateQuestionResult = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  return {
    question: number,
    result: (isEven(number) ? 'yes' : 'no'),
  };
};
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(task, generateQuestionResult);
