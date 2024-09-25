import React from 'react'

function Box({person}) {
  return (
    <div className='box'>
      {person.map((item) =>{
        return(
          <>
          <h3>name : {item.name}</h3>
          <h3>age: {item.age}</h3>
          <h3>place:{item.place}</h3>
          
          </>
        )
      })}
  </div>
  )
}

export default Box
