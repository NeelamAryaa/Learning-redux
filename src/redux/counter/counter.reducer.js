import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CounterActionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
