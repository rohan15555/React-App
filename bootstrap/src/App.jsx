import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/Signup/Signup';



function App() {
 

  return (
    <>
  <Routes>
    <Route path= '/signin' element={<Signin></Signin>}></Route>
    <Route path= '/signup' element={<SignUp></SignUp>}></Route>
  </Routes>
    </>
  )
}

export default App;

