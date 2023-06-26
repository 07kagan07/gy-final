import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: ""
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = userInfoSlice.actions;

export default userInfoSlice.reducer;