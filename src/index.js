import readLineSync from 'readline-sync';

export const getRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);

export const questionAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readLineSync.question('Your answer:');
};

export const isAnswerCorrect = (answer, result) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
  return false;
};

export const gameWrapper = (game, task) => {
  const triesCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let counter = 0;
  while (counter !== triesCount) {
    if (game()) {
      counter += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
