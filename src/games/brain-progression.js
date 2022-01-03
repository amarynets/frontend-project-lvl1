import { engine, generateNumber, generateNumberInRange } from '../index.js';

const rule = 'What number is missing in the progression?';

const generateQuestionSet = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const maxProgressionStep = 9;
  const maxProgressionStart = 100;

  const progressionStart = generateNumber(maxProgressionStart);
  const progressionLength = generateNumberInRange(minProgressionLength, maxProgressionLength);
  const progressionStep = generateNumber(maxProgressionStep);
  const progressionMaxElement = progressionStart + (progressionStep * progressionLength);
  const progression = [];
  
  for (let i = progressionStart; i < progressionMaxElement; i += progressionStep) {
    progression.push(i);
  }
  //console.log(progressionStart, progressionMaxElement, progressionStep);
  //console.log(progressionLength, progression);
  const indexToReplace = generateNumber(progressionLength);
  const answer = progression[indexToReplace];
  progression[indexToReplace] = '..';
  return [progression.join(' '), String(answer)];
};

const play = () => {
  engine(rule, generateQuestionSet);
};

export default play;
