import React from 'react'
import { useState } from 'react'

const Student = (prop) => {
    const [text, setText] = useState("Hello")
    const handelChange = (e)=>{
        console.log(e.target.value)
    }

    const handleClick = () => {
        setText("Welcome to React")
    }
  return (
    <div>
      Student {prop.name}
      Coures {prop.course}

        <p>{text}</p>
        <button onClick={handleClick}> Change Text</button>

        <form action="submit">
            <input type="text" value={text} onChange={handelChange}/>
            <button type="submit">Submit</button>
        </form>


    </div>
  )
}

export default Student
