import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

import sound from "./assets/clicksound.mp3"

  
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
    new Audio(sound).play()
  };
  const handleClear = () => {
    setInput('');
    setResult('');
    new Audio(sound).play()
  };


  const handleCalculate = () => {
    new Audio(sound).play()
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
   
  };
  
    
  return (
    <div className="calculator">
      <div className='cal-body'>
        <span className='calName'>CALCUALTOR 💻</span> 

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
        <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="button-container">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="button-container">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="button-container">
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="button-container">
        <button className="b1" onClick={handleCalculate}>Result</button>
        <button className="b1"  onClick={handleClear}>clear</button>
        
      </div>
      </div>
      <div className="result-container">
        <p>Result: </p>
        <p className='result'>{result}</p>
      </div>

      </div>
    </div>
  );
};

export default Calculator;