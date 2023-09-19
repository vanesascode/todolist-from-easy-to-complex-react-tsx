import { useReducer, KeyboardEvent, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "delete"; id: number };

function todoReducer(todos: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action type");
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodoText, setNewTodoText] = useState("");

  function handleAdd() {
    if (newTodoText.trim()) {
      dispatch({ type: "add", text: newTodoText });
      setNewTodoText("");
    }
  }

  function handleToggle(id: number) {
    dispatch({ type: "toggle", id });
  }

  function handleDelete(id: number) {
    dispatch({ type: "delete", id });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && event.currentTarget.value.trim()) {
      handleAdd();
    }
  }

  return (
    <div>
      {/*INPUT*/}
      <div>
        <input
          type="text"
          placeholder="Add todo"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/*LIST*/}

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
