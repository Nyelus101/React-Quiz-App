import React, { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts';
//import { Questions } from '../Helpers/QuestionBank';
//import TimeUp from './TimeUp';

function Quiz() {

const { score, setScore, setGameState, questions, setQuestions } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [timer, setTimer] = useState(10);
  //const [questions, setQuestions] = useState([]);

  const handleTimeUp = () => {
    alert("Time is up")
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://659c7766633f9aee7907a8f6.mockapi.io/api/Questions"); // Replace with your actual API endpoint
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  

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
    if (questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };


  return (
    <div className='Quiz'>
      {/*{timer === 0 && <TimeUp message="Time's up!" />}*/}
      
      {questions.length > 0 && (
        <>
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
        
        </>
      )}
      
    </div>
  );
}

export default Quiz