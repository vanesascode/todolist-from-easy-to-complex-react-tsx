import { Todo } from "../../views/TodoListState.tsx";

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

function TodoItem({ todo, handleToggle, handleDelete }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
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
