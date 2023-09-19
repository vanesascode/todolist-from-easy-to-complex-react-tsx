interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

function TodoItem({ todo, handleToggle, handleDelete }: TodoItemProps) {
  return (
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
  );
}

export default TodoItem;
