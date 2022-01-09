import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateQuestionSet = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const answer = gcd(num1, num2);
  return [`${num1} ${num2}`, String(answer)];
};

export default () => {
  const levels = [];
  for (let i = 0; i < numberOfLevels; i += 1) {
    levels.push(generateQuestionSet());
  }
  engine(rule, levels);
};
