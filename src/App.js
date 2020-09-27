import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed !== false))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed !== true))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [status, todos])

  return (
    <div className="App">
      <header>
        <h1>My To-Do list</h1>
      </header>
      <Form setStatus={setStatus} status={status} setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} />
      <ToDoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos} />
    </div>
  );
}

export default App;
