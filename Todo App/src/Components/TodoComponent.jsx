import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import Todo from './Todo'
import AddList from './AddList'


function TodoComponent() {
    const {list,task,addTask,setTask}=useContext(TodoContext)

  
    const onchange=(val)=>{
      setTask(val)
    }
    
  return(
  
    <div>
     
    <div><h1>TO DO APP</h1></div>
    <div>
      <Todo task={task} handleClick={addTask} onchange={onchange} />
    </div>
    <br />
    <br />
    <h3>List Of Items</h3>
    <AddList  />
    </div>
    
    
   
  )
}

export default TodoComponent
