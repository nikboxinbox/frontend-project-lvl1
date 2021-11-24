import readlineSync from 'readline-sync';

const toGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const messageGameRules = () => {
  console.log(
    'Answer "yes" if the number is even, otherwise answer "no".',
  );
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log(
    `Question: ${randomNumber}`,
  );
  return randomNumber;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

// Start the brain-even game!
const getEven = () => {
  const name = toGreet();

  messageGameRules();

  for (let i = 1; i < 4; i += 1) {
    const randomNumber = getRandomNumber();
    const userAnswer = getUserAnswer();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct !');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. \nCorrect answer was '${correctAnswer}'.\nLet's try again, ${name}! `);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default getEven;
