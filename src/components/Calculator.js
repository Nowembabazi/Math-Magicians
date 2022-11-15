/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display">
            <span></span>
            {' '}
            0
          </div>

          <div className="digits">
            <button className="btns">AC</button>
            <button className="btns">+/-</button>
            <button className="btns">%</button>
            <button className="btns amber">÷</button>

            <button className="btns-1">7</button>
            <button className="btns-1">8</button>
            <button className="btns-1">9</button>
            <button className="btns amber">X</button>

            <button className="btns">4</button>
            <button className="btns">5</button>
            <button className="btns">6</button>
            <button className="btns amber">-</button>

            <button className="btns">1</button>
            <button className="btns">2</button>
            <button className="btns">3</button>
            <button className="btn2 amber">+</button>

            <button className="btns-2">0</button>
            <button className="btns">.</button>
            <button className="btns amber">=</button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
