import startGame from '../src/index.js';

const gameCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const getResultQuestion = () => {
    const operands = ['+', '-', '*'];
    const operand = operands[(Math.floor(Math.random() * 3))];
    const num1 = (Math.floor(Math.random() * 11));
    const num2 = (Math.floor(Math.random() * 11));
    const resultQuestion = `${num1} ${operand} ${num2}`;
    return resultQuestion;
  };
  const getCorrectAnswer = (resultQuestion) => {
    const correctAnswer = String(eval(resultQuestion));
    return correctAnswer;
  };
  startGame(gameRules, getResultQuestion, getCorrectAnswer);
};

export default gameCalc;
