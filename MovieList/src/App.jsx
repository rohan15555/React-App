import { useState } from 'react'
import Movies from './assets/Components/Movies'
import AddList from './assets/Components/AddList'
import './App.css'




function App() {

  const[task,setTask]=useState("0")
  const[list,setLIst]=useState(["Avengers","Avengers EndGame"])
  const handleClick=()=>{
    setLIst([...list,task])
    console.log(list)
  }
  const onchange=(val)=>{
    setTask(val)
  }
  const onDelete =(index)=>{
    console.log(index);
    
    const tempList=[...list];

    tempList.splice(index,1);

    setLIst(tempList);


  }
  return(
    <>
    <div className='mo'><h1>Movies list</h1></div>
    <div>
      <Movies task={task} handleClick={handleClick} onchange={onchange} />
    </div>
    <br />
    <br />
    <h3>list item</h3>
    <AddList list={list} onDelete={onDelete} />
    </>
  )

}

export default App
