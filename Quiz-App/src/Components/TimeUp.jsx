import React, { useState, useEffect } from 'react';

const TimeUp = ({ message }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Set showMessage to true when the component mounts
    //setShowMessage(true);

    // Set showMessage to false after 2000 milliseconds (2 seconds)
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default TimeUp;
