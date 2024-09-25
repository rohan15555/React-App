import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function AddList() {
  const {list,onDelete}=useContext(TodoContext)
    const handlleDelete=(item)=>{
        onDelete(item)
    }
  return (
    <div>
      {
        list.map((item,index)=><>
        <li key={index}>{item}</li>
     <button onClick={()=>handlleDelete(index)}>delete</button> </>)
      }
    </div>
  )
}

export default AddList
