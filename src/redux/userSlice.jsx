import { createSlice } from "@reduxjs/toolkit";
import UserData from "../ListOfUser";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: UserData },
  reducers: {
    addUser: (state, action) => {
      state.value.push({ ...action.payload });
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
    updateUsername: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
  },
});
export default userSlice;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;

export const getListUserSelector = (state) => state.userSlice.value;
