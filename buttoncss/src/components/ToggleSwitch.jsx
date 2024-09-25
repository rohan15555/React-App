import React, { useState } from 'react';


function ToggleSwitch() {
  
    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
    
  return (
    <div>
       <h1>Toggle Switch Example</h1>
      <button onClick={toggleSwitch}>toggle</button>
      {isOn? <p>toggle is on</p>:<p>toggle is off</p>}
    </div>
  )
}

export default ToggleSwitch


