
import Todo from "./ToDo/Todo";
import { TodoProvider } from "./ToDo/TodoContext";

function App() {
    return (
        <TodoProvider>
            <Todo />
        </TodoProvider>
    );
}

export default App;
