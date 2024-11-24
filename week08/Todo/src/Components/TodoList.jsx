import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TodoList = ({ todos, toggleComplete, updateTodo, deleteTodo }) => {
    return (
    <ListContainer>
        {todos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
        />
        ))}
    </ListContainer>
    );
};

export default TodoList;
