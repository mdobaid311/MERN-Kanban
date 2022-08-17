import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => (state.value = action.value),
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
