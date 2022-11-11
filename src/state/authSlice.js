import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: 1, isLoggedIn: false },
  reducers: {},
});

export default authSlice.reducer;
