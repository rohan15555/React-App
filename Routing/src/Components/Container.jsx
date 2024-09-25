import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

function Container() {
  return (
    <div style={{width:"100%"}}>
      <div style={{display:"block", width:'200px',height:'100vh' , float:"left"}}>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/cards">cards</Link></li>


            </ul>
        </div>
        <div style={{width:'100%', }}>
        <Outlet/>
        </div>

      

    </div>
  )
}

export default Container
