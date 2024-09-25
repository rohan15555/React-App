import React, { useState } from 'react'
import List from './Components/List'

function Todo() {
     const[task,setTask]=useState("0")
     const[todoList,setTodoList]=useState(["reading book","buy milk"])

    

    // let taslk="qqqqqqqqqqqq"
    const handleTask=(e)=>{
    //    console.log(e.target.value)
         setTask(e.target.value)
         
       
    }
    const handleClick=()=>{
        console.log("button clicked")
        setTodoList([...todoList,task])
    }

    const handleDelete=(index)=>{
        console.log(index)
         const uplist=todoList.filter((item)=>todoList.indexOf(item)!=index)
         console.log(uplist)
        setTodoList(uplist)
    }
  return (
    <div>  

        <h1>{task}</h1>      
        task: <input type="text" onChange={handleTask} /> 
        <button onClick={handleClick}>add</button>     
      
       <List  todoList={todoList} handleDelete={handleDelete} />

    </div>
  )
}

export default Todo

