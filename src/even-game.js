import readLineSync from 'readline-sync';
let counter = 0;

const checkAnswer = (answer, randomNumb, counter) => {
  const isEven = ((randomNumb % 2) === 0);
  const whichAnswerRight = isEven ? 'yes' : 'no';
  const result = () => {
    if ((isEven && (answer === 'yes')) || (!isEven && (answer === 'no'))) {
      counter += 1;
      console.log(counter)
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${whichAnswerRight}".`)
    }
  }
  return result();
};

export default () => {

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter !== 4) {
    const randomNumber = String(Math.floor(Math.random() * 100));
    console.log(`Question: ${randomNumber}`);
    const answer = readLineSync.question('Your answer:');
    checkAnswer(answer, randomNumber, counter);
  }
  console.log(`Congratulations, ${userName}!`);
};
