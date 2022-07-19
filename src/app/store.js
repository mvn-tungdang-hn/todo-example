import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "features/todo/redux/todo.slice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
