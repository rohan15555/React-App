import {react, useState,useReducer, } from 'react'
import Reducer from './Reducer'


function App() {
  const [state,dispatch] =useReducer(Reducer,{count:0})
return (
  <div>
    <p>Count:{state.count}</p>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <button onClick={()=>dispatch({type:'decrement'})}>-</button> 
  </div>
)
}
export default App
