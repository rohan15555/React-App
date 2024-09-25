import React from 'react'

function List({todoList,handleDelete}) {

  return (
    <div>
        <h1>List items</h1>
         <ul>
            
            {
             todoList.map((item,index)=>(
                 <li key={index}>
                     {item}  
                 <span><button onClick={()=>handleDelete(index)}  >delete</button></span>
                 </li>
             ) )
            }
         </ul>
      
    </div>
  )
}

export default List