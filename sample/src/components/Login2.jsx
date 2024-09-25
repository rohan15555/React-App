import React from 'react'

function Login2() {
    console.log(JSON.parse(localStorage.getItem("register")))
  return (
    <div>
      <form action="">
        <input type="text"placeholder='Enter Name' />
        <input type="number" placeholder='Enter Your Number' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login2
