import React, { KeyboardEvent } from "react";

interface TodoInputProps {
  newTodoText: string;
  setNewTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

function TodoInput({ newTodoText, setNewTodoText, handleAdd }: TodoInputProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && event.currentTarget.value.trim()) {
      handleAdd();
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="useState in 3"
        value={newTodoText}
        onChange={(event) => setNewTodoText(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
