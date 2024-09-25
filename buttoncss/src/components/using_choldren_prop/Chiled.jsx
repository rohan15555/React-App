import React from 'react'

function Chiled({children,name}) {
  return (
    <div>
        <p>name: {name}</p>
      {children}
    </div>
  )
}

export default Chiled
