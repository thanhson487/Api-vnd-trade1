import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataOrderBook } from "../../../redux/action";
import "./style.scss";

function OrderBook(props) {
  const [openView, setopenView] = useState(1);
  const [comeinandDayData, setComeinandDayData] = useState([]);
  const dispatch = useDispatch();
  const comeinandDayData1 = useSelector(
    (state) => state.DataTrade.comeinandDayData
  );

  const handleClick = (value) => {
    setopenView(value);
  };

  useEffect(() => {
    dispatch(fetchDataOrderBook());
  }, [dispatch]);

  useEffect(() => {
    setComeinandDayData(comeinandDayData1);
  }, [comeinandDayData1]);

  const renderConditionalOrder = () => {
    let xhtml = [];

    xhtml = comeinandDayData.map((item, index) => {
      const {
        cancelable,
        symbol,
        matchedQuantity,
        quantity,
        orderType,
        status,
      } = item;
      return (
        <div className="data-show__detail" key={index}>
          <p>{cancelable ? "Mua" : "Bán"}</p>
          <p>{symbol}</p>
          <p>
            <span>{matchedQuantity}/</span>
            {quantity}
          </p>
          <p>{orderType}</p>
          <p>
            {status === "Rejected" ? (
              <i className="fa fa-minus-circle"></i>
            ) : status === "New" ? (
              <i className="fa fa-hourglass-start" aria-hidden="true"></i>
            ) : (
              ""
            )}
          </p>
        </div>
      );
    });

    return xhtml;
  };

  return (
    <div className="datachangeorderBook">
      <div className="title-header">
        <p
          className={`comeinandDay--action  ${
            openView === 1 ? "comeinandDay" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Lệnh trong ngày
        </p>
        <p
          className={`conditionalOrder--action  ${
            openView === 2 ? "comeinandDay" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Lệnh điều kiện
        </p>
        <p className="title-header__icon">
          <i
            className="fa fa-sync"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />

          <i
            className="fa fa-minus close hideTabRight"
            style={{ cursor: "pointer" }}
            id
          />
        </p>
      </div>

      {openView === 1 ? (
        <>
          <div className="title-table conditionalOrder-day">
            <p>Lệnh</p>
            <p>Mã</p>
            <p>KL Khớp</p>
            <p>Giá</p>
            <p>TT</p>
          </div>

          <div className="data-show">{renderConditionalOrder()}</div>
        </>
      ) : openView === 2 ? (
        <div className="title-table conditionalOrder-menu">
          <p>Lệnh</p>
          <p>Mã</p>
          <p>Giá kích hoạt</p>
          <p>KL</p>
          <p>Giá</p>
          <p>Ngày hết hạn</p>
          <p>TT</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default OrderBook;
