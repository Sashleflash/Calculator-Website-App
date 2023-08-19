import {useState, useRef} from 'react';

import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function multiply(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((preVal) => preVal * 0)
  }


  return (
    <html>
      <head>
        <title>My Web calculator</title>
      </head>
      <body>
        <header>
          <h1>My Web Calculator</h1>
        </header>
        <main>
          <form>
            <p id="result" ref={resultRef}>
              Result: {result}
            </p>
            <div id="calcinput">
              <input
              pattern="[0-9]"
              ref={inputRef}
              type="number"
              placeholder="Type a number"
              />
            </div>

            <button onClick={plus}>Add</button>
            <button onClick={minus}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Result</button>
          </form>
        </main>
        <footer>
          <div id="footer">
            <h4>By Sasha Sutton</h4>
            <h4>2023</h4>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
