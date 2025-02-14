import React from "react";
import { Todo } from "./Todo";
import { DELETE } from "../constants";

interface TableProps {
  todos: Todo[];
  toggleCheck: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ todos, toggleCheck, deleteTodo }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">TODO</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <th scope="row">{todo.id}</th>
            <td className={todo.checked ? "checked" : ""}>{todo.todo}</td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                style={{ marginRight: "10px", marginTop: "7px" }}
                onChange={() => toggleCheck(todo.id)}
                checked={todo.checked}
              />
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                {DELETE}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
