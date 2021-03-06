import React, { useState } from "react";

function Count() {
  const [number, setNumber] = useState(0);

  const onInc = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const onDec = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onInc}>+1</button>
      <button onClick={onDec}>-1</button>
    </div>
  );
}

export default Count;
