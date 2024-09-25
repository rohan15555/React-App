import React, { useState } from 'react'


 function Calcultor() {
    const [inputvalue, setInputValue]=useState("")
    const [result, setResult]=useState("")
    const handleClick =(value) =>{
      setInputValue(inputvalue+value)

    }

    const calculate = () =>{
        const res=eval(inputvalue)

        setResult(res)

    }


  return (
    <div>
        <input type="text" value={inputvalue} /><br />
     
      <button onClick={()=>handleClick("9")}>9</button>
      <button onClick={()=>handleClick("8")}>8</button>
      <button onClick={()=>handleClick("7")}>7</button><br />
      <button onClick={()=>handleClick("6")}>6</button>
      <button onClick={()=>handleClick("5")}>5</button>
      <button onClick={()=>handleClick("4")}>4</button><br />
      <button onClick={()=>handleClick("3")}>3</button>
      <button onClick={()=>handleClick("2")}>2</button>
      <button onClick={()=>handleClick("1")}>1</button><br />
      <button onClick={()=>handleClick("+")}>+</button>
      <button onClick={()=>handleClick("-")}>-</button>
      <button onClick={()=>handleClick("*")}>*</button>
      <button onClick={()=>handleClick("/")}>/</button>
      <button onClick={calculate}>=</button>
    </div>
  )
}
export default Calcultor
