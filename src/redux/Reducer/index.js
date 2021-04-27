import { combineReducers } from "redux";
import Login from "../../pages/Login/redux/store";
import DataTrade from "../../pages/TradeVND/redux/dataTrade";
const rootReducer = combineReducers({
  Login: Login,
  DataTrade: DataTrade,
});
export default rootReducer;
