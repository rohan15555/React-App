import {React,useContext} from 'react'
import { TodoContext } from './TodoContext';
import TodoItems from './TodoItems';

function TodoList() {
    const { state } = useContext(TodoContext);
  return (
    <ul>
    {state.todos.map(todo => (
      <TodoItems key={todo.id} todo={todo} />
     
    ))}
  </ul>
  )
}

export default TodoList
