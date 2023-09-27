import { createSlice } from "@reduxjs/toolkit";

interface initialStateTodo {
  id: number;
  text: string;
}

const initialState: initialStateTodo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoRemoved(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

//push, in this case, is possible thanks to Immer.js (https://immerjs.github.io/immer/)

export const { todoAdded, todoRemoved } = todosSlice.actions;

export const selectTodos = (state: any) => state.todos;

export default todosSlice.reducer;
