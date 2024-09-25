import React, { useImperativeHandle, useRef } from 'react'

function InputComp({setcelsius}) {
    
    const inputRef=useRef()

    const handleOnChange=()=>{
        setcelsius(inputRef.current.value)
    }
  return (
    <div>
       <input type="number"  placeholder=' Celsius' ref={inputRef} onChange={handleOnChange}  />

    </div>
  )
}

export default InputComp
