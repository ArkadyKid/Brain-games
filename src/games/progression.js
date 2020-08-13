import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const progressionLength = 10;
const maxMissingPositionNumber = progressionLength - 1;
const minNumber = 0;
const maxNumber = 100;

const getProgression = (startNumber, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(minNumber, maxNumber);
  const missingPositionIndex = getRandomNumber(minNumber, maxMissingPositionNumber);
  const step = getRandomNumber(minNumber, maxNumber);
  const progression = getProgression(startNumber, step);
  const result = progression[missingPositionIndex];
  progression[missingPositionIndex] = '..';
  return {
    question: progression.join(' '),
    result: String(result),
  };
};

const task = 'What number is missing in the progression?';

export default () => startGame(task, generateQuestionAndAnswer);
