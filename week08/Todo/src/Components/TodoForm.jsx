import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 200px;

    &:focus {
    border-color: #ff6f61;
    outline: none;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #ff6f61;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
    background-color: #ff3d2e;
    }
`;

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
    };

    return (
    <Form onSubmit={handleSubmit}>
        <Input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <Input
        type="text"
        placeholder="내용을 입력해주세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">ToDo 생성</Button>
    </Form>
    );
};

export default TodoForm;
