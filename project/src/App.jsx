import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router   , Route,Routes} from "react-router-dom"
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import About from './Components/About'
import Container from './Components/Container'
import Slidebar from './Components/Slidebar'
import Slidebar2 from './Components/Slidebar2'
import SidebarLink from './Components/SidebarLink'
import Productlist from './Components/Productsandcategroylist/Productlist'
import Categorylist from './Components/Productsandcategroylist/Categorylist'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
     <Container/>
      <div>
        <Routes>
        
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contacts' Component={Contacts}/>
      

        </Routes>
      </div>
      <div>
       <Routes>       
        <Route path='/Slidebar' Component={Slidebar}/>
        <Route path='/Slidebar2' Component={Slidebar2}/>

       </Routes>
      </div>
    </Router>
    <div>
      <Router>
        <div className='app-container'>
         
          <div className='content'>
            <Routes>
              <Route path='/products' Component={Productlist}/>
              <Route path='/category' Component={Categorylist}/>
            </Routes>

          </div>

        </div>
      </Router>
    </div>
    </div>

    
    
  )
}

export default App
