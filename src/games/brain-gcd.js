import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const maxNumber = 20;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const rule = 'Find the greatest common divisor of given numbers.';

const generateQuestionSet = () => {
  const num1 = generateNumber(0, maxNumber);
  const num2 = generateNumber(0, maxNumber);
  const answer = gcd(num1, num2);
  return [`${num1} ${num2}`, String(answer)];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
