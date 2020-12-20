import CounterActionTypes from "./counter.types";

export const Increment = () => ({
  type: CounterActionTypes.INCREMENT,
});

export const Decrement = () => ({
  type: CounterActionTypes.DECREMENT,
});

export const Reset = () => ({
  type: CounterActionTypes.RESET,
});
