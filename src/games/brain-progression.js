import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const minProgressionLength = 5;
const maxProgressionLength = 10;
const maxProgressionStep = 9;
const maxProgressionStart = 100;

const rule = 'What number is missing in the progression?';

const generateQuestionSet = () => {
  const progressionStart = generateNumber(0, maxProgressionStart);
  const progressionLength = generateNumber(minProgressionLength, maxProgressionLength);
  const progressionStep = generateNumber(1, maxProgressionStep);
  const progressionMaxElement = progressionStart + (progressionStep * progressionLength);
  const progression = [];
  for (let i = progressionStart; i < progressionMaxElement; i += progressionStep) {
    progression.push(i);
  }
  const indexToReplace = generateNumber(0, progressionLength);
  const answer = progression[indexToReplace];
  progression[indexToReplace] = '..';
  return [progression.join(' '), String(answer)];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
