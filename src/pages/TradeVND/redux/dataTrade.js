import * as types from "../../../constants/Action";
const initialState = {
  dataDeal: null,
  comeinandDayData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_DEAL_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        dataDeal: payload,
      };
    }
    case types.FETCH_DATA_ORDER_BOOK_SUCCESS:{
      const {payload} =  action;
      return {
        ...state,
        comeinandDayData: payload
      }
      
    }
    default:
      return state;
  }
};
export default reducer;
