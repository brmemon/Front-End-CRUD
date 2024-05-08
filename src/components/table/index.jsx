import React from "react";
import "./table.css";
import { GiPencil } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Table = ({ data, setData, updateArray, setUpdateArray }) => {
  let userId = sessionStorage.getItem("id");

  const del = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`, {
        data: { id: userId }
      });
      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);
      toast.success("Task Deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const upd = (index) => {
    const updatedArray = data[index];
    setUpdateArray(updatedArray);
  };

  return (
    <div className="main_card_div">
      {data.map((item, index) => (
        <ul key={index} className="ul_card">
          <div className="card">
            <div className="name_icon">
              <li className="li_card">
                <h1 className="card_h1" style={{ color: "#1976d2", fontSize: "30px" }}>
                  {"Title"}
                </h1>
              </li>
              <li className="li_card">
                <Button
                  onClick={() => upd(index)}
                  className="card_h1"
                  style={{
                    color: "#1976d2",
                    fontSize: "30px",
                    width: "10%",
                    pointerEvents: updateArray ? "none" : "auto",
                    opacity: updateArray ? 0.5 : 1
                  }}
                  disabled={updateArray ? true : false}
                >
                  <GiPencil />
                </Button>
              </li>
            </div>
            <p style={{ wordBreak: "break-all", overflow: "auto", height: "25%" }}>{item?.title}</p>

            <div className="name_icon">
              <li className="li_card">
                <h1 className="card_h1" style={{ color: "#1976d2", fontSize: "30px" }}>
                  {"Body"}
                </h1>
              </li>
              <li className="li_card">
                <Button
                  onClick={() => del(item._id)}
                  className="card_h1"
                  style={{
                    color: "#1976d2",
                    fontSize: "30px",
                    width: "10%",
                    pointerEvents: updateArray ? "none" : "auto",
                    opacity: updateArray ? 0.5 : 1
                  }}
                  disabled={updateArray ? true : false}
                >
                  <MdOutlineDelete />
                </Button>
              </li>
            </div>
            <p style={{ wordBreak: "break-all", overflow: "auto", height: "25%" }}>{item?.body}</p>
          </div>
        </ul>
      ))}
    </div>
  );
};
export default Table;
