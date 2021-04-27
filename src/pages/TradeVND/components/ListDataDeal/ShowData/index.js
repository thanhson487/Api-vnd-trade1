import React from "react";
import "./style.scss";
function ShowData({ code, price, change, pctChange, nmVolume }) {
  let data = (parseFloat(pctChange) * 100).toFixed(2);

  return (
    <div className="listDataDeal__data">
      <p>{code}</p>
      <p>{price}</p>
      <p>{change}</p>
      <p>{data}</p>
      <p className="colorffff">{nmVolume}</p>
    </div>
  );
}

export default ShowData;
