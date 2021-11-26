import readlineSync from 'readline-sync';

const toGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const startGame = (gameRules, getResultQuestion, getCorrectAnswer) => {
  const round = 3;
  const name = toGreet();
  console.log(gameRules);
  for (let i = 0; i < round; i += 1) {
    const resultQuestion = getResultQuestion();
    console.log(
      `Question: ${resultQuestion}`,
    );
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(resultQuestion);
    if (userAnswer === correctAnswer) {
      console.log('Correct !');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. \nCorrect answer was '${correctAnswer}'.\nLet's try again, ${name}! `);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
