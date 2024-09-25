import { TodoProvider } from './TodoContext';
import TodoComponent from './Components/TodoComponent';

function App() {
  return (
    <TodoProvider>
      <TodoComponent />
    </TodoProvider>
  );
}

export default App;
