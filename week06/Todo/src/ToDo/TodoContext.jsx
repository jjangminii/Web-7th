import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, completedTodos, setCompletedTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
