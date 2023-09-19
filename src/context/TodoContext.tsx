import React, { useState, createContext, ReactNode } from "react";

// INTERFACE OF THE OBJECT:

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// INTERFACE OF THE CONTEXT:

interface TodoContextType {
  todos: Todo[] | null;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// CONTEXT

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});

//PROVIDER

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      console.log(todos);
    }
  }

  function toggleTodo(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const todoContextValue: TodoContextType = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

export default TodoProvider;
