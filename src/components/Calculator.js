/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */

import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0 });
  function btnClick(e) {
    setState((state) => calculate(state, e.target.innerText));
  }

  const { total, next, operation } = state;
  return (
    <div className="App">
      <div className="container">
        <div className="display">
          <span></span>
          {' '}
          { total }
          { operation }
          { next }
        </div>

        <div className="digits">
          <button className="btns" onClick={btnClick}>AC</button>
          <button className="btns" onClick={btnClick}>+/-</button>
          <button className="btns" onClick={btnClick}>%</button>
          <button className="btns go" onClick={btnClick}>÷</button>
          <button className="btns-1" onClick={btnClick}>7</button>
          <button className="btns-1" onClick={btnClick}>8</button>
          <button className="btns-1" onClick={btnClick}>9</button>
          <button className="btns go" onClick={btnClick}>x</button>
          <button className="btns" onClick={btnClick}>4</button>
          <button className="btns" onClick={btnClick}>5</button>
          <button className="btns" onClick={btnClick}>6</button>
          <button className="btns go" onClick={btnClick}>-</button>
          <button className="btns" onClick={btnClick}>1</button>
          <button className="btns" onClick={btnClick}>2</button>
          <button className="btns" onClick={btnClick}>3</button>
          <button className="btns go" onClick={btnClick}>+</button>
          <button className="btns-2" onClick={btnClick}>0</button>
          <button className="btns" onClick={btnClick}>.</button>
          <button className="btns go" onClick={btnClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
