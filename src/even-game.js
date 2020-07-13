import readLineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count !== 3) {
    const randomNumber = String(Math.floor(Math.random() * 100));
    console.log(`Question: ${randomNumber}`);
    const answer = readLineSync.question('Your answer:');
    const isEven = ((randomNumber % 2) === 0);
    const whichAnswerRight = isEven ? 'yes' : 'no';
    if (answer === whichAnswerRight) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${whichAnswerRight}".`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
