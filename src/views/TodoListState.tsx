import { useState } from "react";
import TodoInput from "../components/todoliststate/TodoInput";
import TodoItem from "../components/todoliststate/TodoItem";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>("");

  function handleAdd() {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText("");
    }
  }

  function handleToggle(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <TodoInput
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        handleAdd={handleAdd}
      />
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
