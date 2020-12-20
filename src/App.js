import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Decrement, Increment, Reset } from "./redux/counter/counter.actions";

class App extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div className="App">
        <div className="card">
          <h1>Counter App</h1>
          <h2>{counter}</h2>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterfeature.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(Increment()),
  decrement: () => dispatch(Decrement()),
  reset: () => dispatch(Reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
