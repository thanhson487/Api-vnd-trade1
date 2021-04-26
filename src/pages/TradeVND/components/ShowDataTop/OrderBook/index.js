import React, { useState } from "react";
import "./style.scss";
function OrderBook(props) {
  const [openView, setopenView] = useState(1);

  const handleClick = (value) => {
    setopenView(value);
  };

  return (
    <div className="datachangeorderBook">
      <div className="title-header">
        <p
          className={`comeinandDay--action  ${
            openView === 1 ? "comeinandDay" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Lệnh trong ngày
        </p>
        <p
          className={`conditionalOrder--action  ${
            openView === 2 ? "comeinandDay" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Lệnh điều kiện
        </p>
        <p className="title-header__icon">
          <i
            className="fa fa-sync"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />

          <i
            className="fa fa-minus close hideTabRight"
            style={{ cursor: "pointer" }}
            id
          />
        </p>
      </div>

      {openView === 1 ? (
        <div className="title-table conditionalOrder-day">
          <p>Lệnh</p>
          <p>Mã</p>
          <p>KL Khớp</p>
          <p>Giá</p>
          <p>TT</p>
        </div>
      ) : openView === 2 ? (
        <div className="title-table conditionalOrder-menu">
          <p>Lệnh</p>
          <p>Mã</p>
          <p>Giá kích hoạt</p>
          <p>KL</p>
          <p>Giá</p>
          <p>Ngày hết hạn</p>
          <p>TT</p>
        </div>
      ) : (
        ""
      )}

      <div className="data-show">
        <div className="data-show__detail">
          <p>Mua</p>
          <p>VN30F2104</p>
          <p>
            <span>0/</span>21
          </p>
          <p>1,111.0</p>
          <p>
            <i className="fa fa-minus-circle"></i>
          </p>
        </div>
        <div className="data-show__detail">
          <p>Mua</p>
          <p>VN30F2104</p>
          <p>
            <span>0/</span>21
          </p>
          <p>1,111.0</p>
          <p>
            <i className="fa fa-minus-circle"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
