import readLineSync from 'readline-sync';

export default () => {
  const userName = readLineSync.question('May i have your name?');

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};
