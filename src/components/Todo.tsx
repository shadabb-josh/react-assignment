import React, { useState } from "react";
import Table from "./Table";
import { ADD } from "../constants";

export interface Todo {
  id: number;
  todo: string;
  checked: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    const todoObj: Todo = {
      id: todos.length + 1,
      todo: text,
      checked: false,
    };
    setTodos([...todos, todoObj]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const toggleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="todoInput" className="form-label">
          What you are going TO-DO?
        </label>
        <input
          type="text"
          className="form-control"
          id="todoInput"
          placeholder="What are you gonna do today?"
          value={text}
          onChange={(e) => setTodoText(e)}
        />
        <button className="mt-2 btn btn-primary" onClick={addTodo}>
          {ADD}
        </button>
      </div>
      <Table todos={todos} toggleCheck={toggleCheck} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
