import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionSet = () => {
  const number = generateRandomNumber(0, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, answer];
};

export default () => {
  const levels = [];
  for (let i = 0; i < numberOfLevels; i += 1) {
    levels.push(generateQuestionSet());
  }
  engine(rule, levels);
};
