import readLineSync from 'readline-sync';

export const getRandomNumber = () => String(Math.ceil(Math.random() * 100));

export const questionAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readLineSync.question('Your answer:');
};

export const gameWrapper = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let counter = 0;
  while (counter !== 3) {
    if (game()) {
      counter += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const answerHandler = (answer, result) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
  return false;
};
