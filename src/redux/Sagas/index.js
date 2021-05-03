import { call, put, takeLatest } from "redux-saga/effects";
import apiLogin from "../../apis/apiLogin";
import tradeApi from "../../apis/tradeApi";
import { toastError } from "../../common/Toast";
import * as actionsDataDeal from "../../constants/Action";
import * as actionsLogin from "../../constants/login";
import { loginSuccess } from "../../pages/Login/redux/actions";
import {
  fetchDataDealFalse,
  fetchDataDealSuccess,
  fetchDataOrderBookSuccess
} from "../../pages/TradeVND/redux/action";

function* submitLogin({ payload }) {
  try {
    const res = yield call(apiLogin.fetchUser, payload);
    yield put(loginSuccess(res.token));
  } catch {
    toastError();
  }
}
function* fetchDataDeal() {
  try {
    const res = yield call(tradeApi.fetchDataDeal);
    yield put(fetchDataDealSuccess(res.data));
  } catch {
    yield put(fetchDataDealFalse());
  }
}
function* submitForm({ payload }) {
  try {
    yield call(tradeApi.postDataForm, payload);
  } catch {
    toastError();
  }
}
function* fetchDataOrderBook() {
  try {
    const res = yield call(tradeApi.fetchOrderBookDay);
    yield put(fetchDataOrderBookSuccess(res));
  } catch {
    toastError();
  }
}
function* rootSaga() {
  yield takeLatest(actionsLogin.SUBMIT_LOGIN, submitLogin);
  yield takeLatest(actionsDataDeal.FETCH_DATA_DEAL, fetchDataDeal);
  yield takeLatest(actionsDataDeal.SUBMIT_FORM, submitForm);
  yield takeLatest(actionsDataDeal.FETCH_DATA_ORDER_BOOK, fetchDataOrderBook);
}
export default rootSaga;
