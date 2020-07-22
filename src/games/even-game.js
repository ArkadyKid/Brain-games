import readLineSync from 'readline-sync';

export default () => {
  const randomNumber = String(Math.floor(Math.random() * 100));
  console.log(`Question: ${randomNumber}`);
  const answer = readLineSync.question('Your answer:');
  const isEven = ((randomNumber % 2) === 0);
  const whichAnswerRight = isEven ? 'yes' : 'no';
  if (answer === whichAnswerRight) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${whichAnswerRight}".`);
    return false;
  }
};
