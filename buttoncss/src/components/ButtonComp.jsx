import React from 'react'

function ButtonComp({HandleCelsiusToFaren}) {
  return (
    <div>
       <button onClick={HandleCelsiusToFaren}>convert to fah</button>
      
    </div>
  )
}

export default ButtonComp
