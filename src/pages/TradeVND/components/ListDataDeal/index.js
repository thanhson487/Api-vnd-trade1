import React from "react";
import ShowData from "./ShowData";
import "./style.scss";
function ListDataDeal(props) {
  return (
    <div className="listDataDeal">
      <div className="wrap1">
        <div className="listDataDeal__title">
          <p>Mã</p>
          <p>Giá</p>
          <p className="flex flex-align-center">
            <i className="fal fa-caret-left" />
            +/- <i className="fal fa-caret-right" />
          </p>
          <p>Lệch</p>
          <p>Tổng KL</p>
        </div>
        <ShowData />
        <ShowData />
        <ShowData />
        <ShowData />
      </div>
    </div>
  );
}

export default ListDataDeal;
