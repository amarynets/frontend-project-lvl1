import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionSet = () => {
  const number = generateRandomNumber(1, 42);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  const levels = [];
  for (let i = 0; i < numberOfLevels; i += 1) {
    levels.push(generateQuestionSet());
  }
  engine(rule, levels);
};
