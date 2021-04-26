import React from "react";
import ClosePositionItems from "./ClosePositionItems";

function ClosePosition(props) {
  return (
    <>
      <div className="title-table ">
        <p>Mã</p>
        <p>KL</p>
        <p>Giá mua</p>
        <p>Giá bán</p>
        <p>Lãi/Lỗ đã thực hiện</p>
      </div>
      <div className="data-show">
        <ClosePositionItems />
      </div>
    </>
  );
}

export default ClosePosition;
