import React from 'react'
import { useState } from 'react'

const Button = (prop) => {
 const hello = () => {
    console.log("Hello React")
  }

  const handelChange = (e)=>{
    setText(e.target.value)
  }

  const [count, setCount] = useState(1)


  const [text, setText] = useState("Shahbaz")
  return (
    <div>
      i am button
      <button onClick={hello}>
        Click Me
      </button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count * 2)}>Increment</button>
         <p>{text}</p>
        <input type="text" value={text} onChange={handelChange}/>
        <button onClick={prop.Click}>Click Me</button>
    </div>

  )
}

export default Button
