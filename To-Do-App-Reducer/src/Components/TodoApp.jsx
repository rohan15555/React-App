
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';


function TodoApp() {
  return (
    
<TodoProvider>
<div>
<h1>Todo App</h1>
<TodoInput />
<TodoList />
</div>
    </TodoProvider>
  )
}

export default TodoApp
