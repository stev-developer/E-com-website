import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      const delayTimer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);

      return () => clearTimeout(delayTimer);
    }
  }, [index, textIndex, texts, speed, delay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
