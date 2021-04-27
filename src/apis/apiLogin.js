// api/productApi.js
import axiosClientLogin from "./axiosClientLogin";

class ApiLogin {
  fetchUser = (params) => {
    const url = "";
    return axiosClientLogin.post(url, params);
  };
}
const apiLogin = new ApiLogin();
export default apiLogin;
