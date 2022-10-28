import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice";
import auth from "./authSlice";

const store = configureStore({
  reducer: { posts, auth },
});

export default store;
