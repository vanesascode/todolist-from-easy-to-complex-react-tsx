import { configureStore } from "@reduxjs/toolkit"; // redux template
import todosReducer from "../components/todolistredux/todosSlice"; //importing the slices

export const store = configureStore({
  //redux template
  reducer: {
    //redux template
    todos: todosReducer, //importing the slices
  },
});
