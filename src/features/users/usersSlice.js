import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "ali" },
  { id: "1", name: "ahmad" },
  { id: "2", name: "asghar" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.usersss;

export default usersSlice.reducer
