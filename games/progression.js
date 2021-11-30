import startGame from '../src/index.js';

const gameProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const getResultQuestion = () => {
    // Math.floor(Math.random() * (max - min + 1) + min)
    const progArr = [];
    const lengthProg = (Math.floor(Math.random() * (10 - 5 + 1) + 5));
    const step = (Math.floor(Math.random() * (5 - 1 + 1) + 1));
    const positionX = (Math.floor(Math.random() * ((lengthProg + 1) - 5 + 1) + 5));
    progArr.push((Math.floor(Math.random() * 25)));

    for (let i = 0; i < lengthProg; i += 1) {
      // eslint-disable-next-line prefer-const
      let sum = progArr[i] + step;
      progArr.push(sum);
    }
    progArr[positionX] = '..';
    const resultQuestion = progArr.join(' ');
    return resultQuestion;
  };
  const getCorrectAnswer = (resultQuestion) => {
    const resArr = resultQuestion.split(' ');
    const numArr = resArr.map(Number);

    let step = 0;
    let positionX = 0;
    let res = 0;
    for (let i = 0; i < numArr.length; i += 1) {
      if (!numArr[i]) {
        positionX = i;
        if (i <= 2) {
          step = numArr[4] - numArr[3];
          res = numArr[positionX + 1] - step;
        }
        if (i >= 3) {
          step = numArr[2] - numArr[1];
          res = numArr[positionX - 1] + step;
        }
      }
    } const correctAnswer = String(res);

    return correctAnswer;
  };
  startGame(gameRules, getResultQuestion, getCorrectAnswer);
};

export default gameProgression;
