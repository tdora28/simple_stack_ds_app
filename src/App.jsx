import { useState } from 'react';
import Box from './Components/Box.jsx';

function App() {
  const [stack, setStack] = useState([0, 1, 2]);

  const displayBoxes = (arr) => {
    let newArr = [...arr];
    return newArr.sort((box1, box2) => box2 - box1).map((box) => <Box key={box} id={box} />);
  };

  const stackHandler = (operation) => {
    let newArr = [...stack];
    if (operation === 'add') {
      if (newArr.length === 0) {
        newArr = [0];
      } else {
        newArr.push(newArr.length);
      }
    } else if (operation === 'remove') {
      if (newArr.length === 0) {
        newArr = [];
      } else {
        newArr.pop();
      }
    }
    setStack(newArr);
  };

  return (
    <>
      <h1>Simple Stack DS App</h1>
      <div className="operations">
        <button className="button" onClick={() => stackHandler('add')}>
          Add
        </button>
        <button className="button" onClick={() => stackHandler('remove')}>
          Remove
        </button>
      </div>
      <div className="stack">{displayBoxes(stack)}</div>
      <div className="table">
        <div className="table-top"></div>
        <div className="table-leg left"></div>
        <div className="table-leg right"></div>
      </div>
    </>
  );
}

export default App;
