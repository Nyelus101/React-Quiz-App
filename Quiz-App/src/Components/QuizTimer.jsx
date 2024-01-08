import React, {useEffect} from 'react';

export default function QuizTimer () {
    // Initial timer value in seconds.
const [timer, setTimer] = useState(60);
const [isQuizOver, setIsQuizOver] = useState(false);

// Function to decrement the timer
const decrementTimer = () => {
  setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
};

// Effect to run the timer
useEffect(() => {
  // Exit early if the timer reaches 0
  if (timer === 0) {
    setIsQuizOver(true);
  }

  // Set up an interval to decrement the timer every second
  const intervalId = setInterval(decrementTimer, 1000);

  // Clean up the interval when the component is unmounted or the quiz is over
  return () => clearInterval(intervalId);
}, [timer, isQuizOver]);

//End of timer....
}
