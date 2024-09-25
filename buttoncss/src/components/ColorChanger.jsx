
import React, { useState } from 'react';

function ColorChanger() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];
  const [colorIndex, setColorIndex] = useState(0);


  const changeColor=()=>{
    console.log(colorIndex)
    console.log(colors.length)
  if (colorIndex == colors.length){
     setColorIndex(0)

  }
  else{ setColorIndex((colorIndex + 1))}
 


     
  };
  

 return (
   <div className="colorChange" style={{backgroundColor:colors[colorIndex],hight:"100px",}}>
      <div> 
        color Box
      </div>
     <button onClick={changeColor}>change color</button>  
   </div>


 );
}

export default ColorChanger
