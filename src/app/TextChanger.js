import React, { useState, useEffect } from 'react';
import './TextChanger.css';

const TextChanger = () => {
  const strings = [" glock fishing", "being sexy", "giggling", "on aurora boatealis", "being so brave", "finding boy wallet", "scissoring", "spilling tea", "guts deep in nat's bidet"];
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * strings.length);
      setCurrentText(strings[randomIndex]);
    }, 700);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="text-container">
       <div className='static-text'>currently: </div>
      <div className='dynamic-text'>{currentText}</div>
    </div>
  );
};

export default TextChanger;