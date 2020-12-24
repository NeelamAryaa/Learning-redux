import { combineReducers } from "redux";

import CounterReducer from "./counter/counter.reducer";
import UsersReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  counterfeature: CounterReducer,
  users: UsersReducer,
});

export default rootReducer;
