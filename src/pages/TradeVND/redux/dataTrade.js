import * as types from "../../../constants/dataDeal";
const initialState = {
  dataDeal: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_DEAL_SUCCESS: {
      const { payload } = action;

      return {
        dataDeal: payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
