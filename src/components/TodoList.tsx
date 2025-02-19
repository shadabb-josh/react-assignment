import React from "react";
import { Todo } from "../App";
import { Link } from "react-router-dom";

interface TodoListProps {
  todos: Todo[];
  toggleCheck: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
}) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todo List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...todos].reverse().map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td
                className={todo.checked ? "text-decoration-line-through" : ""}
              >
                {todo.todo}
              </td>
              <td>{todo.date}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/" className="btn btn-link">
        Add More Todos
      </Link>
    </div>
  );
};

export default TodoList;
