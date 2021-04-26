import React, { useState } from "react";
import "./style.scss";
function Footer(props) {
  let { openView } = props;

  const [checked, setChecked] = useState(1);
  const handleClick = (value) => {
    openView(value);
    setChecked(value);
  };

  return (
    <div className="footer">
      <ul>
        <li
          id="orderBook"
          className={checked === 1 ? "checked" : ""}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(1)}
        >
          Sổ lệnh
        </li>
        <li
          id="listfooter"
          className={checked === 2 ? "checked" : ""}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(2)}
        >
          Danh mục
        </li>
        <li
          id="asset"
          className={checked === 3 ? "checked" : ""}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(3)}
        >
          Tài Sản
        </li>
      </ul>
    </div>
  );
}

export default Footer;
