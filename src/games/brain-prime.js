import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const maxNumber = 5;

const isPrime = (num) => {
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < Math.floor(num / 2) + 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(isPrime(4), Math.floor(4 / 2) + 1, Math.ceil(4 / 2) + 1);
const generateQuestionSet = () => {
  const number = generateNumber(0, maxNumber);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, answer];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
