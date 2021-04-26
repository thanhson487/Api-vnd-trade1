import React from "react";
import PriceStepItems from "../PriceStepItems";
import "./style.scss";
function PriceSteps(props) {
  return (
    <>
      <div className="historydeal__row">
        <div className="historydeal__row--buy">
          <div>
            <p>KL Mua</p>
          </div>
          <div>Giá Mua</div>
        </div>
        <div className="historydeal__row--sell">
          <div>Giá Bán</div>
          <div>KL Bán</div>
        </div>
      </div>
      <div className="historydeal__row--data">
        <div className="historydeal__row--data--buy--data">
          <PriceStepItems />
        </div>
      </div>
    </>
  );
}

export default PriceSteps;
