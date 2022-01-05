import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const maxNumber = 42;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionSet = () => {
  const number = generateRandomNumber(0, maxNumber);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

export const generateLevels = (numOfLevels, generator) => {
  const levels = [];
  for (let i = 0; i < numOfLevels; i += 1) {
    levels.push(generator());
  }
  return levels;
};

export default () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};
