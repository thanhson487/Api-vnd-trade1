import React from "react";
import "./style.scss";
function TradeViewCardBottom(props) {
  return (
    <div className="testaaa">
      <div className="tradingview-widget-container tradingview">
        <div id="tradingview_2343b"></div>
      </div>

      <div className="version">
        <p className="version--vnd">
          Bản quyền thuộc về VNDIRECT © 2021. v2.2.2
        </p>
        <div className="clone" />

        <div className="chart-icon">
          <p style={{ cursor: "pointer" }} id="icon1">
            VN30 INTRADAY
          </p>
          <p style={{ cursor: "pointer" }} id="icon2">
            VN30
          </p>
          <i
            className="fas fa-chart-bar"
            id="icon3"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fa fa-chart-pie"
            style={{ cursor: "pointer" }}
            id="icon4"
          />
        </div>
      </div>
    </div>
  );
}

export default TradeViewCardBottom;
