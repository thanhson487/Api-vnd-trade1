import * as actions from "../../../../constants/login";
export const submitLogin = (data) => {
  return {
    type: actions.SUBMIT_LOGIN,
    payload: data,
  };
};
export const loginFalse = (data) => {
  return {
    type: actions.LOGIN_FALSE,
    payload: data,
  };
};
export const loginSuccess = (data) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: data,
  };
};
