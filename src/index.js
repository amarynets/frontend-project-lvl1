import readlineSync from 'readline-sync';

export const numberOfLevels = 3;

export const engine = (rules, levels) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(rules);
  for (let i = 0; i < levels.length; i += 1) {
    const [question, correctAnswer] = levels[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      const msg = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
      return console.log(msg);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};
