import React from "react";
import OpenPosititonItems from "./OpenPositionItems/index";

function OpenPosition(props) {
  return (
    <>
      <div className="title-table ">
        <p>Mã</p>
        <p>KL</p>
        <p>Giá vốn</p>
        <p>Giá hiện tại</p>
        <p>+/-</p>
      </div>
      <div className="data-show">
        <OpenPosititonItems />
      </div>
    </>
  );
}

export default OpenPosition;
