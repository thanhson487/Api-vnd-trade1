import { call, put, takeLatest } from "redux-saga/effects";
import productApi from "../../apis/productApi";
import * as actions from "../../constants/login";
import { loginFalse, loginSuccess } from "../../pages/Login/redux/actions";

function* submitLogin({ payload }) {
  try {
    const res = yield call(productApi.fetchUser, payload);
    yield put(loginSuccess(res.token));
  } catch {
    yield put(loginFalse());
  }
}
function* rootSaga() {
  yield takeLatest(actions.SUBMIT_LOGIN, submitLogin);
}
export default rootSaga;
