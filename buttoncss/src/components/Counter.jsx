import React from 'react'
import { useEffect, useState } from 'react'


function Counter() {
    const [count,setCount]=useState(0)
  
   const increment=()=>{
    setCount(count+1);
    
    

  }

  useEffect(()=>{

    console.log(count)

  },[count])

  return (
    <div className='app'>
      <div className='number'>{count}</div>
     <button onClick={increment}>Increment</button>

     
    </div>
  )
}

export default Counter
