import { useReducer, KeyboardEvent, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
}

//The | symbol in TypeScript represents a union type:

type TodoAction =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "delete"; id: number }
  | { type: "startEditing"; id: number }
  | { type: "edit"; id: number; text: string }
  | { type: "save"; id: number };

function todoReducer(todos: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
          isEditing: false,
        },
      ];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    case "startEditing":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: true } : todo
      );
    case "edit":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "save":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: false } : todo
      );
    default:
      throw new Error("Unknown action type");
  }
}

function TodoList() {
  //useREDUCER

  //The todoReducer function is passed as the first argument, and an empty array [] is passed as the initial state value.

  const [todos, dispatch] = useReducer(todoReducer, []);

  //useSTATE

  const [newTodoText, setNewTodoText] = useState("");

  //Funtions

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

  function handleStartEditing(id: number) {
    dispatch({ type: "startEditing", id });
  }

  function handleEdit(id: number, newText: string) {
    dispatch({ type: "edit", id, text: newText });
  }

  function handleSave(id: number) {
    dispatch({ type: "save", id });
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
          placeholder="useReducer in 1"
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
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.text}
                onChange={(event) => handleEdit(todo.id, event.target.value)}
                onBlur={() => handleSave(todo.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSave(todo.id);
                  }
                }}
              />
            ) : (
              <span onClick={() => handleStartEditing(todo.id)}>
                {todo.text}
              </span>
            )}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
