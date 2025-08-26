import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// Correctly exporting actions
export const { addUser, removeUser } = userSlice.actions;

// Correctly exporting reducer
export default userSlice.reducer;
