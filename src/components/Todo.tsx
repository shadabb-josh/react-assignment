import { useState } from "react";

interface Todo {
  id: number;
  todo: string;
  checked: boolean;
}

// const todoObject: todo = {};

const Todo: React.FC = () => {
  const [todos, SetTodos] = useState<Todo[]>([]);
  const [text, SetText] = useState<string>("");

  const addTodo = () => {
    const todoObj: Todo = {
      id: todos.length + 1,
      todo: text,
      checked: false,
    };
    SetTodos([...todos, todoObj]);
    SetText("");
  };

  const deleteTodo = (id: number) => {
    SetTodos(todos.filter((todo) => todo.id != id));
  };

  const toggleCheck = (id: number) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          What you are going TO-DO ?
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="What are you gonna do today ?"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
        <button className="mt-2 btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>
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
            <tr>
              <th scope="row">{todo.id}</th>
              <td className={todo.checked ? "checked" : ""}>{todo.todo}</td>
              <td>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  style={{ marginRight: "10px", marginTop: "7px" }}
                  onChange={() => toggleCheck(todo.id)}
                />
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
    </div>
  );
};

export default Todo;
