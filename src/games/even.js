import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => ((number % 2) === 0);
const generateQuestionObj = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  return {
    question: number,
    result: (isEven(number) ? 'yes' : 'no'),
  };
};
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameWrapper(task, generateQuestionObj);
