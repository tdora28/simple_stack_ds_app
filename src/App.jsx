import { useState } from 'react';
import Box from './Components/Box.jsx';

function App() {
  const [stack, setStack] = useState([0, 1, 2]);

  const displayBoxes = (arr) => {
    let newArr = [...arr];
    return newArr.sort((el1, el2) => el2 - el1).map((el) => <Box key={el} id={el} />);
  };

  const addBox = () => {
    let newArr = [...stack];
    newArr.push(newArr[newArr.length - 1] + 1);
    setStack(newArr);
  };

  const removeBox = () => {
    let newArr = [...stack];
    newArr.pop();
    setStack(newArr);
  };

  const stackHandler = (operation) => {
    let newArr = [...stack];
    if (operation === 'add') {
      if (newArr.length === 0) {
        newArr = [0];
      } else {
        newArr.push(newArr[newArr.length - 1] + 1);
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
    </>
  );
}

export default App;
