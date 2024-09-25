import React from 'react'
import { Link,Outlet } from "react-router-dom";
import './Form.css'


function container() {
  return (
    <div>
<div style={{width:"100%"}}>
  <ul className='nav1'>
 <li> <Link to="/Signin"><button>signin</button></Link></li>
  <li><Link to="/Signup"><button>signup</button></Link></li> 
  </ul>
</div>
<div>
    <Outlet/>
</div>
    </div>
  )
}

export default container
