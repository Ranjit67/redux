const redux = require("redux");
// import redux from "redux";

const reducer = (
  state = {
    counter: 0,
  },
  action
) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state?.counter + 1,
      };

    case "decrement":
      return {
        counter: state?.counter - 1,
      };

    default:
      return {
        counter: state?.counter,
      };
  }
};
const store = redux.createStore(reducer);

export { store };
