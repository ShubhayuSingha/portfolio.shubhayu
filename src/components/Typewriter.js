import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = '', speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index)); // Use charAt to avoid missing letters
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="inline-block">{displayedText}</span>
  );
};

export default Typewriter;
