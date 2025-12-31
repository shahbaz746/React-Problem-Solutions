import React from 'react'

const HobbyList = ({ hobbies }) => {
    return (
        <div>
            <h1>My Hobies</h1>
            <ul>
                {hobbies.map((hobbie, index) => {
                  return  <li key={index}>{hobbie}</li>

                })}
            </ul>
        </div>
    )
}

export default HobbyList
