import { useSelector } from "react-redux";
import { selectTodos } from "../components/todolistredux/todosSlice";
import TodoInput from "../components/todolistredux/TodoInput";

import { useDispatch } from "react-redux";

import { todoRemoved } from "../components/todolistredux/todosSlice"; // action imported

const TodoListRedux = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const renderedTodos = todos.map((todo: any) => (
    <div key={todo.id}>
      <p> {todo.title} </p>
      <button onClick={() => dispatch(todoRemoved(todo.id))}>Remove</button>
    </div>
  ));

  return (
    <section>
      <TodoInput />
      {renderedTodos}
    </section>
  );
};

export default TodoListRedux;
