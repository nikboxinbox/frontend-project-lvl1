import startGame from '../src/index.js';

const gameEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getResultQuestion = () => {
    const resultQuestion = Math.floor(Math.random() * 101);
    return resultQuestion;
  };
  const getCorrectAnswer = (resultQuestion) => {
    const correctAnswer = resultQuestion % 2 === 0 ? 'yes' : 'no';
    return correctAnswer;
  };

  startGame(gameRules, getResultQuestion, getCorrectAnswer);
};

export default gameEven;
