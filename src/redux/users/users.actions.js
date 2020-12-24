import UsersActionTypes from "./users.types";
import axios from "axios";

export const Loading = (bool) => {
  return {
    type: UsersActionTypes.IS_LOADING,
    payload: bool,
  };
};

export const GetUsers = () => {
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({
          type: UsersActionTypes.GET_USERS,
          payload: res.data,
        });

        dispatch(Loading(false));
      })

      .catch((error) => {
        alert(error.message);
        dispatch(Loading(false));
      });
  };
};
