
import {BrowserRouter as Router   , Route,Routes} from "react-router-dom"
import './App.css'
import Container from './Components/container'
import Signup from "./Components/Signup"
import Signin from "./Components/Signin"





function App() {
 
  return (
    <div className="signin">
   <Router>
    <Container/>
    <div>
      <Routes>
        <Route path='/Signin' Component={Signin}></Route>
        <Route path='/Signup' Component={Signup}></Route>
      </Routes>
    </div>
   </Router>
   </div>
   

   
     
  )
}

export default App
