import React from 'react'

function AddList ({list,onDelete}) {
    const handlleDelete=(item)=>{
        onDelete(item)
    }
  return (
    <div>
      {
        list.map((item,index)=><>
        <li key={index}>{item}</li>
     <button className='bu' onClick={()=>handlleDelete(index)}>delete</button> </>)
      }
    </div>
  )
}

export default AddList
