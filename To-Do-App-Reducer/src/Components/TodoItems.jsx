import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

function TodoItems({ todo }) {
    const { dispatch } = useContext(TodoContext);
  return (
  
       <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button>
    </li>
   
  )
}

export default TodoItems
