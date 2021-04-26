import React from "react";
import "./style.scss";
function PriceStepItems(props) {
  return (
    <div className="rowData">
      <div className="rowData__buy">
        <p>15</p>
        <p>3242.23</p>
      </div>
      <div className="rowData__sell">
        <p>3242.23</p>
        <p>15</p>
      </div>
    </div>
  );
}

export default PriceStepItems;
