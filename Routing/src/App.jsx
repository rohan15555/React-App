import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router      ,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Container from './Components/Container'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Container/>
      <div>
        <Routes>
          <Route path='/home'  Component={Home}/>
          <Route path='/about'  Component={About}/>
          <Route path='/contact'  Component={Contacts}/>
          <Route path='/cards' Component={Cards}/>

        </Routes>
      </div>
    </Router>

  )
}

export default App
