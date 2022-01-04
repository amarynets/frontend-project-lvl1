import { engine, numberOfLevels } from '../index.js';
import { generateNumber, generateLevels } from '../utils.js';

const maxNumber = 42;
const operators = '+-*';

const rule = 'What is the result of the expression?';

const generateQuestionSet = () => {
  const firstNumber = generateNumber(0, maxNumber);
  const secondNumber = generateNumber(0, maxNumber);
  const operator = operators[generateNumber(0, operators.length - 1)];
  let correctAnswer = NaN;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log(`Unexpected error. Operator ${operator} does not match with none of '+-*'`);
  }
  return [`${firstNumber} ${operator} ${secondNumber}`, String(correctAnswer)];
};

const play = () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};

export default play;
