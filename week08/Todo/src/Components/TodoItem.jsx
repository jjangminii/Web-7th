import React, { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Content = styled.div`
    display: flex;
    
    align-items: center;
    text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: ${({ isEdit }) => (isEdit ? "#4CAF50" : "#ff6f61")};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    background-color: ${({ isEdit }) => (isEdit ? "#45a049" : "#ff3d2e")};
    }
`;

const TodoItem = ({ todo, toggleComplete, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedDescription, setUpdatedDescription] = useState(todo.description);

    const handleUpdate = () => {
    updateTodo(todo.id, updatedTitle, updatedDescription);
    setIsEditing(false);
    };

    return (
    <ItemContainer>
        <Content completed={todo.completed}>
        <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
            <>
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
                type="text"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            </>
        ) : (
            <div>
            <p>{todo.title}</p>
            <small>{todo.description}</small>
            </div>
        )}
        </Content>
        <div>
        {isEditing ? (
            <Button isEdit onClick={handleUpdate}>
            저장
            </Button>
        ) : (
            <Button onClick={() => setIsEditing(true)}>수정</Button>
        )}
        <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
        </div>
    </ItemContainer>
    );
};

export default TodoItem;
