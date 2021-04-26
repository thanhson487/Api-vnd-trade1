import React from "react";
import "./style.scss";
function PlaceForm(props) {
  return (
    <div className="data2">
      <div className="select-check">
        <ul>
          <li>
            <input type="radio" name="test" id="test1" defaultChecked="true" />
            <label htmlFor="test1">Lệnh thường</label>
          </li>
          <li>
            <input type="radio" name="test" id="test2" />
            <label htmlFor="test2">Lệnh Stop</label>
          </li>
          <li>
            <input type="radio" name="test" id="test3" />
            <label htmlFor="test3">Lệnh trailing</label>
          </li>
          <li>
            <input type="radio" name="test" id="test4" />
            <label htmlFor="test4">Lệnh OSO</label>
          </li>
        </ul>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor className="label-title">
            Mã HĐTL
          </label>
          <select name="cars" id="cars" className="input-value">
            <option value="volvo">VND49F2016</option>
            <option value="volvo">VND49F2016</option>
            <option value="volvo">VND49F2016</option>
            <option value="volvo">VND49F2016</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor className="label-title">
            Giá đặt
          </label>
          <input type="number" placeholder="Giá" className="input-value" />
        </div>
        <div className="form-group">
          <label htmlFor className="label-title">
            Khối lượng
          </label>
          <input type="number" placeholder="KL" className="input-value" />
        </div>
        <div className="form-group form-group--flexend">
          <button className="button button--green">Mua</button>
          <button className="button button--red">Bán</button>
          <div className="saveCommand">
            <input type="checkbox" id="saveCommand" />
            <label htmlFor="saveCommand">lưu lệnh</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceForm;
