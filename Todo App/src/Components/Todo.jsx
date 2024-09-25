import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

function Todo() {

   const {addTask,setTask}=useContext(TodoContext)

  const handleTask=(e)=>{
    console.log(e.target.value)
   
    setTask(e.target.value)
  }
 

  return (
    <div>
       
        <div>
        <input type="text" placeholder='Enter a new to-do' onChange={handleTask} />
            <button onClick={addTask}>Add Item</button>
        
        </div>

    </div>
  )
}

export default Todo
