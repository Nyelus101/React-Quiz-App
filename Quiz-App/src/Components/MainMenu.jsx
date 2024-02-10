import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainMenu() {
  const { gameState, setGameState, useTimer, setUseTimer, timer, setTimer } = useContext(QuizContext);
  return (
    <div className='Menu'>
      <button onClick={() => {setGameState("quiz");}}>Start Quiz</button>
      <label>
        Use Quiz Timer:
        <input type="checkbox" checked={useTimer} onChange={() => setUseTimer(!useTimer)} />
      </label>
    </div>
  )
}
