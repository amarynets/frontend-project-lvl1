import engine from '../index.js';

const generateNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const generateOperation = (operations) => operations[generateNumber(operations.length)];

const rule = 'What is the result of the expression?';

const generateQuestionSet = () => {
  const maxNumber = 42;
  const operators = '+-*';
  const firstNumber = generateNumber(maxNumber);
  const secondNumber = generateNumber(maxNumber);
  const operator = generateOperation(operators);
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
  engine(rule, generateQuestionSet);
};

export default play;
