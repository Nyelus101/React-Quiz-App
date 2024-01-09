import { useState, useContext } from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import './App.css'
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  return (
    <>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </>
  )
}

export default App
