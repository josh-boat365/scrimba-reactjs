import React, { useState } from 'react'

function Counter() {
    //useState is a function that takes a state and returns a new state object that contains 
    //the new state information for that 
    //state and the new state information for all states in the state object passed in. 
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1  );
    const decrement = () => setCount(count - 1  );

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={decrement}>(-)</button>
      <button onClick={increment}>(+)</button>
    </div>
  );
}

export default Counter
