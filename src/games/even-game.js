import { getRandomNumber, answerHandler, questionAnswer } from '../index.js';

export default () => {
  const randomNumber = getRandomNumber();
  const answer = questionAnswer(randomNumber);
  const isEven = ((randomNumber % 2) === 0);
  const whichAnswerRight = isEven ? 'yes' : 'no';
  return answerHandler(answer, whichAnswerRight);
};
