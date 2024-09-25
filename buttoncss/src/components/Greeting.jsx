import React, { useState } from 'react'

function  Greeting() {
    const [name,setname]=useState('')

    const handlechange =(event)=>{
         console.log(event.target.value)
         setname(event.target.value)
    }
  return (
    <div>
        <label htmlFor="name">Name:</label>
      <input type="text" onChange={handlechange} />
      {
        name ?  <h1> Hello {name}</h1>: <p>no name</p>
       
      }
     
      
    </div>
  )
}

export default Greeting
