import React, { useState, useEffect } from "react";
import Asset from "./Asset";
import Menu from "./Menu";
import OrderBook from "./OrderBook";
import "./style.scss";
function ShowDataTop(props) {
  const { view } = props;
  const [Open, setOpenView] = useState(1);

  useEffect(() => {
    setOpenView(view);
  }, [view]);


  return (
    <div className="data1">
      {Open === 1 ? (
        <OrderBook />
      ) : Open === 2 ? (
        <Menu />
      ) : Open === 3 ? (
        <Asset />
      ) : (
        ""
      )}
    </div>
  );
}

export default ShowDataTop;
