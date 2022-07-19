import { todoApi } from "../api/todo.api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  todoList: [],
};

export const getTodoList = createAsyncThunk("todo/getTodoList", async () => {
  const response = await todoApi.getTodoListApi();

  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
    builder.addCase(getTodoList.rejected, (state) => {
      state.todoList = [];
    });
  },
});

export const todoReducer = todoSlice.reducer;
