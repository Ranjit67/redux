import { createSlice } from "@reduxjs/toolkit";

const authInitiator = {
  auth: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState: authInitiator,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logOut(state) {
      state.auth = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
