import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { submitLogin } from "./redux/actions/index";
import { useHistory } from "react-router-dom";
function Login() {
  const [values, setValue] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  let history = useHistory();

  let token = useSelector((state) => state.Login.token);

  useEffect(() => {
    const tokenLocal = localStorage.getItem("tokenUser");
    if (tokenLocal) {
      history.push("/tradeVND");
    }
  }, [history, token]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitLogin(values));
  };

  return (
    <div className="container--login">
      <div className="container">
        <div className="Login">
          <img
            src="https://protrade-trial.vndirect.com.vn/static/media/pt_trial.a0934fd1.svg"
            alt=""
          />
          <div className="Login__form">
            <p className="Login__form__title">
              Đăng nhập với tài khoản VNDIRECT
            </p>
            <form action>
              <div className="form-group">
                <label htmlFor="useName">Tên đăng nhập</label>
                <input
                  type="text"
                  id="useName"
                  name="username"
                  value={values.username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group form-group--row-magin-bottom">
                <input type="checkbox" id="savelogin" />
                <label htmlFor="savelogin" className="form-group__title">
                  Ghi nhớ trạng thái đăng nhập trên trình duyệt này
                  <i className="fa fa-info-circle cPointer" />
                </label>
              </div>
              <a
                className="form-group form-group--center"
                href="https://thanhson487.github.io/protradeTrial_Cam/"
                style={{ textDecoration: "none" }}
              >
                <div
                  type="submit"
                  className="btn-action btn--orange"
                  onClick={handleSubmit}
                >
                  <span>
                    <i className="fas fa-sign-in-alt" /> Đăng nhập
                  </span>
                </div>
              </a>
            </form>
            <hr style={{ width: "100%" }} />
          </div>
          <div className="helper">
            <div className="test">
              <button className="btn-action btn--green">
                <span>
                  <i className="fal fa-lock-alt" /> Mở tài khoản
                </span>
              </button>
              <a className="help" href="#1">
                Trợ giúp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
