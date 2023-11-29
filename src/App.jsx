import { useState } from 'react';
import Box from './Components/Box.jsx';

function App() {
  const [stack, setStack] = useState([0, 1, 2]);

  const displayBoxes = (arr) => {
    let newArr = [...arr];
    return newArr.sort((el1, el2) => el2 - el1).map((el) => <Box key={el} id={el} />);
  };

  const addBox = () => {
    console.log(stack);
  };

  return (
    <>
      <h1>Simple Stack DS App</h1>
      <div className="stack">{displayBoxes(stack)}</div>
      <div className="operations">
        <button className="button" onClick={addBox}>
          Add
        </button>
        <button className="button">Remove</button>
      </div>
    </>
  );
}

export default App;
