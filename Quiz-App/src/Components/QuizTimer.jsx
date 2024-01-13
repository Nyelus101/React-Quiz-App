/*import React, { useEffect, useContext } from 'react';
//import { QuizContext } from '../Helpers/Contexts'

export default function QuizTime () {
  const {useTimer, setUseTimer, timer, setTimer} = useContext(QuizContext);

  const handleTimeUp = () => {
    alert("Time is up")
  };

  useEffect(() => {
    if (useTimer) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer -1 : 0));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [useTimer]);

 useEffect(() => {*/
    //Check if the timer has reached zero
    /*if (useTimer && timer === 0) {
      finishQuiz();
      handleTimeUp();
    }
  }, [useTimer, timer]);


  return (
    <div>
      {useTimer && <div>Time Remaining: {timer} seconds </div>}
    </div>
  );
}*/
