import startGame from '../src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const gameGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const getResultQuestion = () => {
    const a = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);
    const resultQuestion = `${a} ${b}`;

    return resultQuestion;
  };
  const getCorrectAnswer = (resultQuestion) => {
    const numArr = resultQuestion.split(' ').map((x) => +x);
    const correctAnswer = String(gcd(numArr[0], numArr[1]));
    return correctAnswer;
  };
  startGame(gameRules, getResultQuestion, getCorrectAnswer);
};

export default gameGcd;
