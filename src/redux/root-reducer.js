import { combineReducers } from "redux";

import CounterReducer from "./counter/counter.reducer";

const rootReducer = combineReducers({
  counterfeature: CounterReducer,
});

export default rootReducer;
