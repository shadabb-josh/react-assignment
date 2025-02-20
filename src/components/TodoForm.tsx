import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface TodoFormProps {
  addTodo: (todoText: string, date: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!text || !date) return alert("Please enter a todo and a date");
    addTodo(text, date);
    setText("");
    setDate("");
    navigate('/todos')
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add a Todo</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Add Todo</button>
      <br />
      <Link to="/todos" className="btn btn-link mt-2">View Todos</Link>
    </div>
  );
};

export default TodoForm;
