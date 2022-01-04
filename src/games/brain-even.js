import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const maxNumber = 42;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionSet = () => {
  const number = generateNumber(0, maxNumber);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
