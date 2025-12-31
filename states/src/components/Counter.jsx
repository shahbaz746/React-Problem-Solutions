// import React from 'react'

// const Counter = () => {
//   return (
//     <div>
//       i am counter
//     </div>
//   )
// }

// export default Counter
import React, { useState } from 'react';

const Counter = ({ num  }) => {
  // Initialize state with the num prop
  const [count, setCount] = useState(num);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
