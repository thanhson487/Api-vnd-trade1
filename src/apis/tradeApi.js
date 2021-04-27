// api/productApi.js
import axiosClient from "./axiosClientTrade";
import jwt_decode from "jwt-decode";
const token = localStorage.getItem("tokenUser");
let dataUser = jwt_decode(token);
console.log(dataUser);

class TradeApi {
  fetchDataDeal = () => {
    const url = "https://finfo-api.vndirect.com.vn/v4/derivative_prices";
    return axiosClient.get(url);
  };
  fetchOrderBookDay = () => {
    let { username } = dataUser;
    const url = `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${username}`;
    return axiosClient.get(url);
  };
}
const tradeApi = new TradeApi();
export default tradeApi;
