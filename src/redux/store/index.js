import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../slices/todoSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;