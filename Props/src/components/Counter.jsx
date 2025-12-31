import React, { useState } from 'react'

const Counter = ({num}) => {
    const [count, setCount] = useState({num})
  return (
    <div>
      <p>Counter: {setCount(num++)}</p>
    </div>
  )
}

export default Counter
