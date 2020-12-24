import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Spinner from "./components/spinner";
import { Decrement, Increment, Reset } from "./redux/counter/counter.actions";
import { GetUsers } from "./redux/users/users.actions";

class App extends Component {
  render() {
    const {
      counter,
      increment,
      decrement,
      reset,
      usersname,
      isLoading,
      users,
    } = this.props;
    return (
      <div className="App">
        <div className="card">
          <h1>Counter App</h1>
          <h2>{counter}</h2>
          <button onClick={increment}>&#x2b;</button>
          <button onClick={decrement}>&#x2212;</button>
          <button onClick={reset}>Reset</button>
        </div>
        <br />
        <div className="card">
          <button onClick={users}>Get UsersName</button>
          {isLoading ? (
            <Spinner />
          ) : (
            usersname.map((user, index) => <h3 key={index}>{user.name}</h3>)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterfeature.counter,
  usersname: state.users.usersname,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(Increment()),
  decrement: () => dispatch(Decrement()),
  reset: () => dispatch(Reset()),
  users: () => dispatch(GetUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
