import readLineSync from 'readline-sync';

const triesCount = 3;

export default (task, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < triesCount; i += 1) {
    const questionResult = generateQuestionAndAnswer();
    const { question, result } = questionResult;
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer:');

    if (answer !== result) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
