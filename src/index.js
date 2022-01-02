import readlineSync from 'readline-sync';

const engine = (rules, raund) => {
  const numberOfRounds = 3;
  console.log('Welkome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(rules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = raund();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      const msg = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
      return console.log(msg);
    }
  }
  return console.log(`Congratulation, ${playerName}!`);
};

export default engine;
