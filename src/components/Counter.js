import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const increment = () => {
    dispatch(counterAction.increment({ amount: 1 }));
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };
  const increment5 = () => {
    dispatch(counterAction.increment({ amount: 5 }));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {allState?.counter.showCounter && (
        <div className={classes.value}>{allState?.counter.counter}</div>
      )}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increment5}>Increment of 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// import React, { Component } from "react";
// import classes from "./Counter.module.css";
// import { connect } from "react-redux";

// class Counter extends Component {
//   increment = () => {
//     this.props.increment();
//   };
//   decrement = () => {
//     this.props.decrement();
//   };
//   toggleCounterHandler = () => {};
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increment.bind(this)}>Increment</button>
//           <button onClick={this.decrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToPops = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToPops, mapDispatchToProps)(Counter);
