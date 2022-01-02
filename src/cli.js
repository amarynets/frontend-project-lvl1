import readlineSync from 'readline-sync';

export const showMsg = (msg) => {
  console.log(msg);
};

export const askUserName = () => readlineSync.question('May I have your name? ');

export const welcomeUser = (user) => {
  console.log(`Hello, ${user}!`);
};
