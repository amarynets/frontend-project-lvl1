import { engine } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionSet = () => {
  const maxNumber = 42;
  const number = Math.floor(Math.random() * maxNumber);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const play = () => {
  engine(rule, generateQuestionSet);
};

export default play;
