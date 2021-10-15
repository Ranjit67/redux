import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: true,
};
const sliceCreate = createSlice({
  name: "container",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },

    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterAction = sliceCreate.actions;
export default sliceCreate.reducer;
