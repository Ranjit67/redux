import { createSlice, configureStore } from "@reduxjs/toolkit";
// const redux = require("redux");
// import redux from "redux";
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
// const reducer = (
//   state = {
//     counter: 0,
//     showCounter: true,
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state?.counter + action.amount,
//         showCounter: state?.showCounter,
//       };

//     case "decrement":
//       return {
//         counter: state?.counter - 1,
//         showCounter: state?.showCounter,
//       };
//     case "toggle":
//       return {
//         counter: state?.counter,
//         showCounter: !state?.showCounter,
//       };

//     default:
//       return {
//         counter: state?.counter,
//         showCounter: state?.showCounter,
//       };
//   }
// };

const store = configureStore({
  reducer: { counter: sliceCreate.reducer, auth: authSlice.reducer },
});
// const store = redux.createStore(reducer);
const counterAction = sliceCreate.actions;
const authAction = authSlice.actions;
export { store, counterAction, authAction };
