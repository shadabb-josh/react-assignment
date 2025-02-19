import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export interface Todo {
  id: number;
  todo: string;
  date: string;
  checked: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string, date: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, todo: todoText, date, checked: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoForm addTodo={addTodo} />} />
        <Route
          path="/todos"
          element={
            <TodoList todos={todos} toggleCheck={toggleCheck} deleteTodo={deleteTodo} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
