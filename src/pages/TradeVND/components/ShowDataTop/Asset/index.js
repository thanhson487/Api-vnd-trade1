import React from "react";
import "./style.scss";
function Asset(props) {
  return (
    <div id="datachangeasset">
      <div className="title-header">
        <p>Thông tin tài sản</p>
        <div className="list-icons">
          <div>
            <i
              className="fa fa-sync"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <i
              className="fa fa-external-link"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          </div>

          <i className="fa fa-minus close hideTabRight" id=""></i>
        </div>
      </div>
      <div>
        <div className="title-group">
          <p>Tài sản ròng</p>
          <p>40,000,000</p>
        </div>
        <div className="title-group">
          <p>Số dư ký quỹ</p>
          <p>40,000,000</p>
        </div>
        <div className="title-group">
          <p>Thuế và phí</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Asset;
