import React from "react";
import "./table.css";
import { GiPencil } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";

const Table = ({ data }) => {
  return (
    <div className="main_card_div">
      {data.map((item) => (
        <ul className="ul_card">
          <div className="card">
            <li className="li_card">
              <h1 className="card_h1" style={{ color: "#1976d2", fontSize: "30px" }}>
                {"Title"} <GiPencil />
              </h1>
              {item.title}
            </li>
            <li className="li_card">
              <h1 className="card_h1" style={{ color: "#1976d2", fontSize: "30px" }}>
                {"Body"} <MdOutlineDelete />
              </h1>
              {item.body}
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Table;
