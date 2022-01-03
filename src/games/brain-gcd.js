import { engine, generateNumber } from '../index.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const rule = 'Find the greatest common divisor of given numbers.';

const generateQuestionSet = () => {
  const maxNumber = 20;
  const num1 = generateNumber(maxNumber);
  const num2 = generateNumber(maxNumber);
  const answer = gcd(num1, num2);
  return [`${num1} ${num2}`, String(answer)];
};

const play = () => {
  engine(rule, generateQuestionSet);
};

export default play;
