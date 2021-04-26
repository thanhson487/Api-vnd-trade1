import React from "react";
import PriceSteps from "./PriceSteps";
import "./style.scss";

function Historydeal(props) {
  return (
    <>
      <div className="historydeal">
        <ul>
          <li>
            <p>VN30F2104</p>
          </li>
          <li>
            <span>Sàn: </span>
            <br />
            <span className="san">1090.9</span>
          </li>
          <li>
            <span>TC: </span>
            <br />
            <span className="tc">2253.9</span>
          </li>
          <li>
            <span>Trần: </span>
            <br />
            <span className="tran">5623.9</span>
          </li>
        </ul>
        <div className="historydeal__title-row">
          <a className="price" href="#0">
            Bước giá
          </a>
          <a className="historyData" href="#0">
            Lịch sử khớp lệnh
          </a>
        </div>
        <PriceSteps />
      </div>
    </>
  );
}

export default Historydeal;
