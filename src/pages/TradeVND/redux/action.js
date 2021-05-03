import * as types from "../../../constants/Action";
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
export const fetchDataOrderBook = () => {
  return {
    type: types.FETCH_DATA_ORDER_BOOK,
  };
};
export const fetchDataOrderBookSuccess = (data) => {
  return {
    type: types.FETCH_DATA_ORDER_BOOK_SUCCESS,
    payload: data,
  };
};
export const fetchDataOrderBookFalse = () => {
  return {
    type: types.FETCH_DATA_ORDER_BOOK_FALSE,
  };
};
export const addDataOrderBook = (data) => {
  return {
    types: types.ADD_DATA_ORDER_BOOK,
    payload: data,
  };
};
