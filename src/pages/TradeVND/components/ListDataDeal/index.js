import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowData from "./ShowData";
import "./style.scss";
import { fetchDataDeal } from "../../redux/action.js";
function ListDataDeal(props) {
  const dispatch = useDispatch();
  const [dataDeal, setDataDeal] = useState([]);

  const dataDealRedux = useSelector((state) => state.DataTrade.dataDeal);

  useEffect(() => {
    dispatch(fetchDataDeal());
  }, [dispatch]);

  useEffect(() => {
    setDataDeal(dataDealRedux);
  }, [dataDealRedux]);

  const getData = () => {
    let xhtml = [];
    if (dataDeal) {
      xhtml = dataDeal.map((arr, index) => {
        return (
          <ShowData
            key={index}
            code={arr.code}
            price={arr.open}
            change={arr.change}
            pctChange={arr.pctChange}
            nmVolume={arr.nmVolume}
          />
        );
      });
    }
    return xhtml;
  };
  return (
    <div className="listDataDeal">
      <div className="wrap1">
        <div className="listDataDeal__title">
          <p>Mã</p>
          <p>Giá</p>
          <p className="flex flex-align-center">
            <i className="fal fa-caret-left" />
            +/- <i className="fal fa-caret-right" />
          </p>
          <p>Lệch</p>
          <p>Tổng KL</p>
        </div>
        <div
          className="containerShowData"
          style={{ overflow: "auto", height: "86%" }}
        >
          {getData()}
        </div>
      </div>
    </div>
  );
}

export default ListDataDeal;
