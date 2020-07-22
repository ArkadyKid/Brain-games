import readLineSync from "readline-sync";

export default (game, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let count = 0;
  while (count !== 3) {
    if (game()) {
      count += 1;
    } else {
      count = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
