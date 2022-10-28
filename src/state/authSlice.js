import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: 1, isLoggedIn: true },
  reducers: {},
});

export default authSlice.reducer;
