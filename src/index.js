import readLineSync from 'readline-sync';

const triesCount = 3;

const questionAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readLineSync.question('Your answer:');
};

export default (task, generateQuestionObj) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < triesCount; i += 1) {
    const questionObj = generateQuestionObj();
    const { question } = questionObj;
    const answer = questionAnswer(question);
    const { result } = questionObj;

    if (answer !== result) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
