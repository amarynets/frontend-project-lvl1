import { engine, generateNumber } from '../index.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
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
  const maxNumber = 42;
  const number = generateNumber(maxNumber);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, answer];
};

const play = () => {
  engine(rule, generateQuestionSet);
};

export default play;
