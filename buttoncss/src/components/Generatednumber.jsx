import React, { useRef, useState } from 'react'

function Generatednumber() {
    const [randomNumber,setRandomNumber]=useState(null);
    const inputone=useRef(null)

    const generateRandomNumber=()=>{
      console.log("buttonclcked")
      const rns=Math.floor(Math.random()*100)+1
      setRandomNumber(rns)
        
    }
    const shows=()=>{
      alert(inputone.current.value)
    }
  return (

    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber ?   <p>Generate Number:{randomNumber}</p>: <p>click button</p>}
      <input type="text" ref={inputone}/>
      <button onClick={shows}>clickon</button>
    
    </div>
  )
}

export default Generatednumber
