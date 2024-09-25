import React from 'react'
import './Home.css'
import Box from './Box'

export default function Home(prop) {
    let name="raj"
    let age="20"
    console.log(prop.a);
    let person=[
        {
            name:"ram",
            age:5,
            place:"kkd"
    
        },
        {
          name:"acx",
            age:95,
            place:"hjhj"
        }
      ]
  return (
    <div>
      <h1 className='head' >home page</h1>
      <h3>my name is {name}</h3>
      <h3>my age is {age}</h3>

     




     <Box person={person} />
      
      <button style={{"backgroundColor":"yellow","color":"red"}}>hhh</button>
    </div>
  )
}


