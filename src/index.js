import readLineSync from 'readline-sync';

const questionAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readLineSync.question('Your answer:');
};

const isAnswerCorrect = (answer, result) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
  return false;
};

export default (task, getQuestion, getResult) => {
  const triesCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 0; i < triesCount; i += 1) {
    const question = getQuestion();
    const answer = questionAnswer(question);
    const result = getResult(question);
    if (!isAnswerCorrect(answer, result)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
