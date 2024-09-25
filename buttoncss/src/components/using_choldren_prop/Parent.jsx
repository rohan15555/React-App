import React from 'react'
import Chiled from './Chiled'

function Parent() {
    const name="raj"
  return (
  <div>
    <Chiled name={name}>
    <h1>heading</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque dicta, quibusdam corrupti sed consectetur vel ipsam adipisci veritatis itaque id, voluptatibus nihil eveniet? Earum, fugit ipsam. Cumque, veniam nisi?</p>
  </Chiled>
  <Chiled>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vitae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam nam quae laborum, vero amet consequatur inventore ex et natus.</p>
  </Chiled>

  </div>

  )
}

export default Parent
