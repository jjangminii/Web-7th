import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

function Todo() {
    const { todos, setTodos, completedTodos, setCompletedTodos } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const addTodo = () => {
        if (!inputValue.trim()) return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    const completeTodo = (index) => {
        const completedItem = todos.splice(index, 1);
        setCompletedTodos([...completedTodos, ...completedItem]);
        setTodos([...todos]);
    };

    const deleteTodo = (index) => {
        setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    };

    const editTodo = (index) => {
        setEditingIndex(index);
        setEditValue(todos[index]);
    };

    const saveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = editValue;
        setTodos(updatedTodos);
        setEditingIndex(null);
        setEditValue("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addTodo}>추가</button>
            {/* 할 일 목록 */}
            {todos.map((todo, index) => (
                <div key={index}>
                    {editingIndex === index ? (
                        <input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    ) : (
                        <span>{todo}</span>
                    )}
                    <button onClick={() => completeTodo(index)}>완료</button>
                    <button onClick={() => editTodo(index)}>수정</button>
                    {editingIndex === index && (
                        <button onClick={() => saveTodo(index)}>저장</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Todo;
