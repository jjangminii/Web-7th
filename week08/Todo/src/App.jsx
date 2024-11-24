import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title, 
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id, updatedTitle, updatedDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: updatedTitle, description: updatedDescription }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <AppContainer>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </AppContainer>
  );
};

export default App;
