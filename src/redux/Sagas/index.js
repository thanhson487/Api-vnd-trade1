import { call, put, takeLatest } from "redux-saga/effects";
import apiLogin from "../../apis/apiLogin";
import tradeApi from "../../apis/tradeApi";
import * as actionsLogin from "../../constants/login";
import * as actionsDataDeal from "../../constants/dataDeal";
import { loginFalse, loginSuccess } from "../../pages/Login/redux/actions";
import { toast } from "react-toastify";
import {
  fetchDataDealFalse,
  fetchDataDealSuccess,
} from "../../pages/TradeVND/redux/action";

function* submitLogin({ payload }) {
  try {
    const res = yield call(apiLogin.fetchUser, payload);
    yield put(loginSuccess(res.token));
  } catch {
    yield put(loginFalse());
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
    const res = yield call(tradeApi.postDataForm, payload);
  } catch {
    toast.error("Lệnh đặt không thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
function* rootSaga() {
  yield takeLatest(actionsLogin.SUBMIT_LOGIN, submitLogin);
  yield takeLatest(actionsDataDeal.FETCH_DATA_DEAL, fetchDataDeal);
  yield takeLatest(actionsDataDeal.SUBMIT_FORM, submitForm);
}
export default rootSaga;
