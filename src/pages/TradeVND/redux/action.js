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
export const submitForm = (data) => {
  return {
    type: types.SUBMIT_FORM,
    payload: data,
  };
};
export const submitFormSuccess = (data) => {
  return {
    type: types.SUBMIT_FORM_SUCCESS,
    payload: data,
  };
};
export const submitFormFalse = () => {
  return {
    type: types.SUBMIT_FORM_FALSE,
  };
};
