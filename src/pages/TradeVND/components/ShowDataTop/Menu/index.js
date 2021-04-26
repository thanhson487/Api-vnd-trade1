import React, { useState } from "react";
import ClosePosition from "./ClosePosition";
import OpenPosition from "./OpenPosition";
import "./style.scss";
function Menu(props) {
  const [checked, setChecked] = useState(1);

  const handleClick = (value) => {
    setChecked(value);
  };

  return (
    <div className="datachangeMenu">
      <div className="title-header">
        <p
          className={`openPosition ${checked === 1 ? "comeinandDay" : ""}`}
          onClick={() => handleClick(1)}
        >
          Vị thế mở
        </p>
        <p
          className={`closePosition ${checked === 2 ? "comeinandDay" : ""}`}
          onClick={() => handleClick(2)}
        >
          Vị thế đóng
        </p>
        <p className="title-header__icon">
          <i
            className="fa fa-sync"
            style={{ marginRight: "1rem", cursor: "pointer" }}
          />

          <i
            className="fa fa-minus close hideTabRight"
            style={{ cursor: "pointer" }}
            id
          />
        </p>
      </div>

      {checked === 1 ? <OpenPosition /> : <ClosePosition />}
    </div>
  );
}

export default Menu;
