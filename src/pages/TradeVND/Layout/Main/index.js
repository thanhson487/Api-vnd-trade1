import React, { useState } from "react";
import ShowDataTop from "../../components/ShowDataTop";
import PlaceForm from "../../components/PlaceForm";
import Historydeal from "../../components/Historydeal";
import ListDataDeal from "../../components/ListDataDeal";
import TradeViewCardBottom from "../../components/TradeViewCardTop";
import TradeViewCardTop from "../../components/TradeViewCardTop";
import Footer from "../Footer";
import "./style.scss";

function Main(props) {
  const [view, setView] = useState(1);

  const openView = (value) => {
    setView(value);
  };

  return (
    <>
      <div className="main">
        <div className="main__left">
          <TradeViewCardTop />
          <Historydeal />
          <TradeViewCardBottom />
          <ListDataDeal />
        </div>
        <div className="main__right">
          <ShowDataTop view={view} />
          <PlaceForm />
        </div>
        <Footer openView={openView} />
      </div>
    </>
  );
}

export default Main;
