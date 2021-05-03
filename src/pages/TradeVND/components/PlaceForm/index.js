import React, { useState } from "react";
import "./style.scss";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { fetchDataOrderBook, submitForm } from "../../../TradeVND/redux/action";
function PlaceForm(props) {
  const token = localStorage.getItem("tokenUser");

  let dataUser = {};
  if (token) {
    dataUser = jwt_decode(token);
  }

  let userName = dataUser.username;

  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    symbol: "VN30F2105",
    userName: userName,
    price: 0,
    quantity: "",
    priceType: "MPL",
    side: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const onSubmit = (param) => {
    const data = {
      symbol: dataForm.symbol,
      userName: dataForm.userName,
      price: dataForm.price,
      quantity: parseInt(dataForm.quantity),
      priceType: "MPL",
      side: param,
    };
    dispatch(submitForm(data));
    dispatch(fetchDataOrderBook());
  };
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
          <select
            name="symbol"
            id="cars"
            className="input-value"
            onChange={handleOnChange}
            value={dataForm.symbol}
          >
            <option value="VN30F2105">VN30F2105</option>
            <option value="VN30F2105">VN30F2105</option>
            <option value="VN30F2105">VN30F2105</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor className="label-title">
            Giá đặt
          </label>
          <input
            name="priceType"
            value={dataForm.priceType}
            type="number"
            placeholder="Giá"
            className="input-value"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor className="label-title">
            Khối lượng
          </label>
          <input
            name="quantity"
            type="number"
            value={dataForm.quantity}
            placeholder="KL"
            className="input-value"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group form-group--flexend">
          <button
            className="button button--green"
            onClick={() => onSubmit("NB")}
          >
            Mua
          </button>
          <button className="button button--red" onClick={() => onSubmit("NS")}>
            Bán
          </button>
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
