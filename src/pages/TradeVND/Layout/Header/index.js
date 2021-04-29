import React from "react";
import "./style.scss";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
function Header(props) {
  const token = localStorage.getItem("tokenUser");
  let userName = "";
  if (token) {
    let dataUser = jwt_decode(token);
    userName = dataUser.username;
  } else {
    userName = "";
  }

  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("tokenUser");
    history.push("/");
  };
  return (
    <>
      <header className="titleHeader">
        <div className="titleHeader__left">
          <img
            src="https://protrade-trial.vndirect.com.vn/static/media/pt_trial.a0934fd1.svg"
            className="imgLogo"
            alt="logo"
          />
          <div className="dayTime">
            <p className="dayTime__time ">04:08:43</p>
            <p className="dayTime__date ">2021/04/07</p>
            <a className="nav nav--checked dayTime--width" href="#1">
              Trang chủ
            </a>
            <a className="nav dayTime--width" href="#1">
              Tài sản
            </a>
            <a className="nav dayTime--width" href="#1">
              Hướng dẫn
            </a>
            <p className="nav revenue dayTime--width" href="#">
              Lãi/Lỗ: 0
            </p>
          </div>
          <div className="titleHeader__middle--color">
            <i className="fa fa-trophy iconTop" />
            <span>Top cao thủ phái sinh</span>
          </div>
        </div>
        <div className="titleHeader__right">
          <p className="version">Bản Trial</p>
          <a className="upgrade__user" href="0">
            Nâng cấp tài khoản
          </a>
          <div className="user">
            <i className="fa fa-user icon-user" />
            <p className="user__name">{userName}</p>
            <i className="fa fa-caret-down down" />
            <div className="user__logout" onClick={handleLogout}>
              <i className="fa fa-sign-out" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
