import { engine, numberOfLevels } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const calculateExpression = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Unexpected error. Operator ${operator} does not match with none of ${operators}`;
  }
};

const generateQuestionSet = () => {
  const firstNumber = generateRandomNumber(0, 42);
  const secondNumber = generateRandomNumber(0, 42);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const correctAnswer = calculateExpression(operator, firstNumber, secondNumber);
  return [`${firstNumber} ${operator} ${secondNumber}`, String(correctAnswer)];
};

export const generateLevels = (numOfLevels, generator) => {
  const levels = [];
  for (let i = 0; i < numOfLevels; i += 1) {
    levels.push(generator());
  }
  return levels;
};

export default () => {
  const levels = generateLevels(numberOfLevels, generateQuestionSet);
  engine(rule, levels);
};
