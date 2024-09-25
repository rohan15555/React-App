import React from 'react'

function Login3() {
    console.log(JSON.parse(localStorage.getItem('register')))
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter your Name' />
        <input type="password" placeholder='Enter Your Password'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login3
