import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from "axios"




function SignUp() {
  const [user,setUser] = useState({
    email:'',
    username:"",
    password:"",
    confirmpassword:""
  })
  
  const handlechange = (e) =>{
  const {name,value} =e.target;
  setUser({
    ...user,
    [name]:value,
  })
  }
  // console.log(user);
const formSubmit =async (e) =>{
  e.preventDefault();
    try{
      const response = await axios.post("http://localhost:4000/signup",user)
      console.log(response.data)

    }
    catch(err){
      console.log(err)
    }
  
}
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h1>Signup</h1>
    <form action="/signup" method='post' onSubmit={formSubmit}>
      <MDBInput wrapperClass='mb-4' label='Email address' value={user.email} id='form1' type='email' onChange={handlechange} name="email"/>
      <MDBInput wrapperClass='mb-4' label='UserName' id='form2' value={user.username} type='Text' onChange={handlechange} name="username"/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='Password' value={user.password} onChange={handlechange} name="password"/>
      <MDBInput wrapperClass='mb-4' label=' Conform Password' id='form2' type='password' value={user.confirmpassword} onChange={handlechange} name="confirmpassword"/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
       
      </div>

      <MDBBtn className="mb-4">Sign up</MDBBtn>

      <div className="text-center">
        
        <p>or sign up with:</p>

        
      </div>
      </form>

    </MDBContainer>
  );
}

export default SignUp;