import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'

function App() {
  const name="aaaa"
  
  return (
    <div>

      {/* <h1>hello world</h1>
      <h1> name : {name}</h1>

      <Home a={"abc"}/>
       */}
       <Register />
       {/* <Login2 /> */}

      {<Login3/>}

    </div>
    
  )
}

export default App
