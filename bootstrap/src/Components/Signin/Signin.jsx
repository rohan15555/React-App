import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h1>Login</h1>

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member?<Link to="/Signup">Register</Link></p>
        
      </div>

    </MDBContainer>
  );
}

export default Signin;