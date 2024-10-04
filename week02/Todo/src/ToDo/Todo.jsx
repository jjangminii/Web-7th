import  { useState } from "react";


function Todo() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

  // 할 일 추가
    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    };

  // 할 일 완료 -> 해낸 일로 이동
    const completeTodo = (index) => {
        const completedItem = todos.splice(index, 1);
        setCompletedTodos([...completedTodos, ...completedItem]);
        setTodos([...todos]);
    };

  // 해낸 일 삭제
    const deleteTodo = (index) => {
        const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
        setCompletedTodos(newCompletedTodos);
    };

  // Enter 키로 할 일 추가
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
        addTodo();
        }
    };

    return (
        <div>
        <div className="nav">
        <h2>Todo List</h2>
        <input
            type="text"
            id="todo"
            placeholder="할 일을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
        />
        </div>
        <hr />
        <div className="inven">
        <div className="todo" id="todo-list">
            <span>할 일</span>
            <div id="list">
                {todos.map((todo, index) => (
                <div key={index} className="todo-item">
                <span>{todo}</span>
                <button onClick={() => completeTodo(index)}>완료</button>
                </div>
            ))}
            </div>
        </div>
        <div className="todo" id="my-Todo">
            <span>내가 해냄</span>
            <div id="clear">
            {completedTodos.map((todo, index) => (
                <div key={index} className="todo-item">
                <span>{todo}</span>
                <button onClick={() => deleteTodo(index)}>삭제</button>
                </div>
                ))}
            </div>
        </div>
        </div>
    </div>
    );
}

export default Todo;
