import startGame from '../src/index.js';

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
const gamePrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getResultQuestion = () => {
    const resultQuestion = Math.floor(Math.random() * 101);
    return resultQuestion;
  };
  const getCorrectAnswer = (resultQuestion) => {
    // TODO
    const res = isPrime(resultQuestion);

    const correctAnswer = res ? 'yes' : 'no';

    return correctAnswer;
  };

  startGame(gameRules, getResultQuestion, getCorrectAnswer);
};

export default gamePrime;
