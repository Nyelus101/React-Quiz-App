import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../Helpers/Contexts'
//import { Questions } from '../Helpers/QuestionBank';
import "../App.css";
import Scoreboard from './Scoreboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function EndScreen() {
  const { score, setScore, setGameState, questions, setQuestions, setTimer } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setTimer(20);
  };


  return (
    <div className='EndScreen'>
      <h2>Quiz finished</h2>
      <h3> Result: {score} / {questions.length} </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <Scoreboard />
    </div>
  )
}

export default EndScreen