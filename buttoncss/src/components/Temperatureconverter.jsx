import React, { useState } from 'react'
import ButtonComp from './ButtonComp';
import InputComp from './InputComp';

 function Temperatureconverter () {
    const [celsius,setcelsius]=useState("")
    const [fahrenheit,setfahrenheit]=useState("")

    const HandleCelsiusToFaren=()=>{
      console.log(celsius)
        var farren=celsius*1.8-32;
        setfahrenheit(farren)
        
    


    }

  return (
    <div>
        <label >Celsius:</label>
    <InputComp setcelsius={setcelsius} />

      <label>Fahrenheit:</label>
      <input type="number" placeholder=' Fahrenheit' value={fahrenheit} />
     <ButtonComp HandleCelsiusToFaren={HandleCelsiusToFaren} />
    </div>
  )
}

export default Temperatureconverter
