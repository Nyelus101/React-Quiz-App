import React, { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
//import TimeUp from './TimeUp';

function Quiz() {

const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [timer, setTimer] = useState(10);

  const handleTimeUp = () => {
    alert("Time is up")
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer -1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

 useEffect(() => {
    //Check if the timer has reached zero
    if (timer === 0) {
      finishQuiz();
      handleTimeUp();
    }
  }, [timer]);


  /*const prevQuestion = () => {
    if (currQuestion === 0) {
      currQuestion;
    } else (
      setCurrQuestion(currQuestion - 1)
    )
  };*/

  const prevQuestion = () => {
      setCurrQuestion(currQuestion - 1)
  };

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };


  return (
    <div className='Quiz'>
      {/*{timer === 0 && <TimeUp message="Time's up!" />}*/}
      <h3>Questions answered {currQuestion + 1} / {Questions.length} | Time Remaining: {timer} seconds </h3>

      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}> { Questions[currQuestion].optionA } </button>
        <button onClick={() => setOptionChosen("B")}> { Questions[currQuestion].optionB } </button>
        <button onClick={() => setOptionChosen("C")}> { Questions[currQuestion].optionC } </button>
        <button onClick={() => setOptionChosen("D")}> { Questions[currQuestion].optionD } </button>
      </div>

      {currQuestion > 0 && <button onClick={prevQuestion}>Previous Question</button>}
      {currQuestion == Questions.length - 1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : (<button onClick={nextQuestion}> Next Question </button>)}
      
    </div>
  );
}

export default Quiz