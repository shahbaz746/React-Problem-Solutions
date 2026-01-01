import React from 'react'
import { useState } from 'react'

const Posts = ({like}) => {

      const [likes, setLikes] = useState(like)

      const handleLike = () => {
        setLikes(likes + 1)
      }

  return (
    <div>
     <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStFw7PZLNskDxSDSeaWX-EnkPFtEJfUSHtg&s" alt="" />
     </div>
     <button onClick={handleLike}>Like{likes}</button>
    </div>
  )
}

export default Posts
