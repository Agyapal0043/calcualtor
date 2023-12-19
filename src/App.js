import React, { useState } from 'react';
import './App.css';

import sound from "./assets/clicksound.mp3";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'DEL') {
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
    } else {
      setInput((prevInput) => prevInput + value);
    }
    new Audio(sound).play();
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    new Audio(sound).play();
  };

  const handleCalculate = () => {
    new Audio(sound).play();
    try {
      const calculatedResult = eval(input).toString();
      setInput(calculatedResult);
      setResult(calculatedResult);
    } catch (error) {
      setInput('Error');
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className='cal-body'>
        <span className='calName'>CALCULATOR 💻</span>

        <div className='disBody'>
          <div className="input-container">
            <input type="text" value={input} readOnly />
          </div>
        </div>

        <div className='mainbtcontainer'>
          <div className="button-container">
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button className='b3' onClick={() => handleButtonClick('DEL')}>DEL</button>
          </div>
          <div className="button-container">
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div className="button-container">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="button-container">
            <button onClick={() => handleButtonClick('.')}>.</button>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
            <button onClick={() => handleButtonClick('*')}>x</button>
          </div>
          <div className="button-container">
            <button className="b1" onClick={handleClear}>RESET</button>
            <button className="b2" onClick={handleCalculate}>=</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Calculator;
