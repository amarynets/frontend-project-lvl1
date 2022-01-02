import readlineSync from 'readline-sync';

import { showMsg, askUserName, welcomeUser } from '../cli.js';

const game = (config) => {
  showMsg('Welkome to the Brain Games!');
  const userName = askUserName();
  welcomeUser(userName);

  showMsg('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * config.maxNumber);
    showMsg(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      showMsg('Correct!');
    } else {
      const msg = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      showMsg(msg);
      return;
    }
  }
  showMsg(`Congratulations, ${userName}!`);
};

export default game;
