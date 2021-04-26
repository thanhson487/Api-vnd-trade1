import * as types from "../../../constants/login";
const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const { payload } = action;
      localStorage.setItem("tokenUser", JSON.stringify(payload));
      return {
        token: payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
