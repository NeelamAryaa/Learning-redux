import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  usersname: [],
  isLoading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      return {
        ...state,
        usersname: action.payload,
      };
    case UsersActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
