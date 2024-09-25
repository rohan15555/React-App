import {React,useContext,useState} from 'react'
import { TodoContext } from './TodoContext';

function TodoInput() {
    const [text, setText] = useState('');
    const { dispatch } = useContext(TodoContext);
    
  TodoContext
    const handleSubmit = e => {
      e.preventDefault();
      if (text.trim()) {
        dispatch({ type: 'ADD_TODO', payload: text });
        setText('');
      }
    };
  
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
    </div>
  )
}

export default TodoInput
