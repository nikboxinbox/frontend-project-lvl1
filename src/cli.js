import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greet;
// Example work 'toGreet' :
// Welcome to the Brain Games!
// May I have your name? Nick
// Hello, Nick!
