import React, { useState } from 'react'


function Movies({task,handleClick,onchange}) {
    const handleTask=(e)=>{
      console.log(e.target.value)
      onchange(e.target.value)
    }
    const buttonClick=()=>{
      handleClick()
    }
  
    return (
      <div>
         
          <div>
          <input type="text" placeholder='Enter Movies' onChange={handleTask} />
            <button onClick={buttonClick}>Add Movies</button>
         
          </div>
  
      </div>
    )
  }
  
  export default Movies
  