import { useReducer, useState } from "react";
import TodoItem from "../components/todolistreducer/TodoItem";
import TodoInput from "../components/todolistreducer/TodoInput";

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

  return (
    <div>
      {/* INPUT */}
      <TodoInput
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        handleAdd={handleAdd}
      />

      {/* LIST */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
