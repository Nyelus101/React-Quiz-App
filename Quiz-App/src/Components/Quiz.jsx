import React, { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts';
//import QuizTimer from './QuizTimer';
//import { Questions } from '../Helpers/QuestionBank';
//import TimeUp from './TimeUp';
//import AnswerTimer from './AnswerTimer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function Quiz() {

const { score, setScore, setGameState, questions, setQuestions, useTimer, setUseTimer, timer, setTimer, counter, setCounter } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  //const [timer, setTimer] = useState(20);
  //const [useTimer, setUseTimer] = useState(true);

  const handleTimeUp = () => {
    alert("Time is up");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://659c7766633f9aee7907a8f6.mockapi.io/api/Questions"); // Replace with your actual API endpoint
        const data = await response.json();
        setQuestions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  

  useEffect(() => {

    if (useTimer) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer -1 : 0));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [useTimer]);

 useEffect(() => {
    //Check if the timer has reached zero
    if (useTimer && timer === 0) {
      finishQuiz();
      handleTimeUp();
    }
  }, [useTimer, timer]);


  /*const prevQuestion = () => {
    if (currQuestion === 0) {
      currQuestion;
    } else (
      setCurrQuestion(currQuestion - 1)
    )
  };*/

  const prevQuestion = () => {
      setCurrQuestion(currQuestion - 1)
      //setCounter(0);//from answertimer
  };

  const nextQuestion = () => {
    if (questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    //setOptionChosen to empty string else the previous option will be passed down if nothing is selected
    setOptionChosen("");
    //console.log(optionChosen);
    //setCounter(0);//from answertimer
  };

  const finishQuiz = () => {
    if (questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    // Save the score and timestamp in localStorage
    const timestamp = new Date().toLocaleString();
    const newScore = { score: score, timestamp: timestamp };
    const existingScores = JSON.parse(localStorage.getItem('quizScores')) || [];
    const updatedScores = [...existingScores, newScore];
    localStorage.setItem('quizScores', JSON.stringify(updatedScores));


    //console.log(optionChosen);
    setGameState("endScreen");
  };

  /*const handleTimeUp2 = () => {
    nextQuestion();
    setCounter(0);
  }*/

  return (
    <div className='Quiz'>
      {/*{timer === 0 && <TimeUp message="Time's up!" />}*/}

      {questions.length > 0 && (
        <>
        {/*{currQuestion < questions.length - 1 ? <AnswerTimer duration={5} onTimeUp={handleTimeUp2} /> : finishQuiz()}*/}
        <h3>Questions answered {currQuestion + 1} / {questions.length} | Time Remaining: {timer} seconds </h3>
        <h1>{questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}> { questions[currQuestion].optionA } </button>
        <button onClick={() => setOptionChosen("B")}> { questions[currQuestion].optionB } </button>
        <button onClick={() => setOptionChosen("C")}> { questions[currQuestion].optionC } </button>
        <button onClick={() => setOptionChosen("D")}> { questions[currQuestion].optionD } </button>
      </div>

      {currQuestion > 0 && <button onClick={prevQuestion}>Previous Question</button>}
      {currQuestion == questions.length - 1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : (<button onClick={nextQuestion}> Next Question </button>)}

      {/*<label>
        Use Quiz Timer:
        <input type="checkbox" checked={useTimer} onChange={() => setUseTimer(!useTimer)} />
      </label>*/}
        </>
      )}
      
    </div>
  );
}

export default Quiz;