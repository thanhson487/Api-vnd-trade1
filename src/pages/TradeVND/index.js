import React, { useEffect } from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import { useHistory } from "react-router-dom";
function TradeViews(props) {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    if (!token) {
      history.push("/");
    }
  }, [history]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default TradeViews;
