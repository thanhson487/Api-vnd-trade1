import { combineReducers } from "redux";
import Login from "../../pages/Login/redux/store";
const rootReducer = combineReducers({
  Login: Login,
});
export default rootReducer;
