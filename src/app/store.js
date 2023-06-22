import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/PostsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    postsss: postsReducer,
    usersss:usersReducer
  },
});
