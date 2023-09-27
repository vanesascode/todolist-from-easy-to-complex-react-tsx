import { useState } from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit"; // it's like a uuid but from redux toolkit

import { todoAdded } from "./todosSlice"; // action imported

const TodoInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSaveTodoClicked = () => {
    if (title.trim()) {
      dispatch(
        todoAdded({
          id: nanoid(),
          title,
        })
      );
      setTitle("");
    }
  };

  return (
    <section>
      <label htmlFor="todoTitle">Todo:</label>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={title}
        placeholder="Enter a thing to do..."
        onChange={onTitleChanged}
      />
      <button onClick={onSaveTodoClicked}>Add</button>
    </section>
  );
};

export default TodoInput;
