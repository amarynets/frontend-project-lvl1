import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const minProgressionLength = 5;
const maxProgressionLength = 10;
const maxProgressionStep = 9;
const maxProgressionStart = 100;
const rule = 'What number is missing in the progression?';

const generateQuestionSet = () => {
  const progressionStart = generateRandomNumber(0, maxProgressionStart);
  const progressionLength = generateRandomNumber(minProgressionLength, maxProgressionLength);
  const progressionStep = generateRandomNumber(1, maxProgressionStep);
  const progressionMaxElement = progressionStart + (progressionStep * progressionLength);
  const progression = [];
  for (let i = progressionStart; i < progressionMaxElement; i += progressionStep) {
    progression.push(i);
  }
  const indexToReplace = generateRandomNumber(0, progressionLength - 1);
  const answer = progression[indexToReplace];
  progression[indexToReplace] = '..';
  return [progression.join(' '), String(answer)];
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
