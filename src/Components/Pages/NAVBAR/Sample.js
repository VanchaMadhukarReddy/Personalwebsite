// StateFile.js
import React, { useState } from "react";

// Define your component
const Sample = () => {
  const [count, setCount] = useState(0);

  // Your component logic
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Exporting count state variable
export { count };

// Exporting the component (optional, if you need it in another file)
export default CounterComponent;
