import * as types from "../../../constants/dataDeal";
export const fetchDataDeal = () => {
  return {
    type: types.FETCH_DATA_DEAL,
  };
};
export const fetchDataDealSuccess = (data) => {
  return {
    type: types.FETCH_DATA_DEAL_SUCCESS,
    payload: data,
  };
};
export const fetchDataDealFalse = (data) => {
  return {
    type: types.FETCH_DATA_DEAL_FALSE,
    payload: data,
  };
};
