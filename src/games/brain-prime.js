import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const maxNumber = 42;

const isPrime = (num) => {
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionSet = () => {
  const number = generateNumber(maxNumber);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, answer];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
