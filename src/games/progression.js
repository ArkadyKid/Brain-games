import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const progressionLength = 10;
const minMissingPositionNumber = 1;
const minNumber = 0;
const maxNumber = 100;

const getProgression = (initialNumber, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(initialNumber + step * i);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const initialNumber = getRandomNumber(minNumber, maxNumber);
  const missingPosition = getRandomNumber(minMissingPositionNumber, progressionLength);
  const step = getRandomNumber(minNumber, maxNumber);
  const initialProgression = getProgression(initialNumber, step);
  const result = initialProgression[missingPosition - 1];
  initialProgression[missingPosition - 1] = '..';
  return {
    question: initialProgression.join(' '),
    result: String(result),
  };
};

const task = 'What number is missing in the progression?';

export default () => startGame(task, generateQuestionAndAnswer);
