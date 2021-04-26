// api/productApi.js
import axiosClient from "./axiosClient";

class ProductApi {
  fetchUser = (params) => {
    const url = "";
    return axiosClient.post(url, params);
  };
}
const productApi = new ProductApi();
export default productApi;
