import React, { useState } from 'react'
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button> { Questions[currQuestion].optionA } </button>
        <button> { Questions[currQuestion].optionB } </button>
        <button> { Questions[currQuestion].optionC } </button>
        <button> { Questions[currQuestion].optionD } </button>
      </div>

      <button> Next Question </button>
    </div>
  );
}

export default Quiz