import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Button, TextField } from "@mui/material";
import "./todo.css";
import Table from "../../components/table";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Todo = () => {
  let id = sessionStorage.getItem("id");
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    if (input.title === "" || input.body === "") {
      toast.error("Please Fill Title And Body");
    } else {
      if (id) {
        await axios
          .post("http://localhost:5000/api/v2/addTask",{})
          .then((response) => console.log(response));
      }
    }
  };
  setArray([...array, input]);
  setInput({ title: "", body: "" });
  toast.error("Task Added Successfully");

  return (
    <>
      <div>
        <Navbar />
        <ToastContainer />
        <div className="main">
          <div className="todo_input">
            <TextField
              className="todo_text_filed"
              label="Title"
              type={"title"}
              onChange={change}
              name="title"
              id="title"
              value={input.title}
            />
            <TextField
              className="todo_text_filed"
              label="Body"
              type={"body"}
              onChange={change}
              name="body"
              id="body"
              value={input.body}
            />
          </div>
          <Button className="todo_butoon" variant="contained" onClick={submit}>
            Add
          </Button>
        </div>
      </div>

      <Table data={array} />
    </>
  );
};

export default Todo;
