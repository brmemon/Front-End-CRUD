import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { Button, TextField } from "@mui/material";
import "./todo.css";
import Table from "../../components/table";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";

const Todo = () => {
  let id = sessionStorage.getItem("id")
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };



  const submit = async () => {
    if (input.title === "" || input.body === "") {
      toast.error("All Fields Are Required");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/todo/add", {
          title: input.title,
          body: input.body,
          id: id
        });
        console.log(response);
        setArray([...array, input])
        setInput({ title: "", body: "" });
        toast.success(response.data.message);
      } catch (err) {
        // console.error("Error:", err.response.data.message);
        toast.error(err.response);
      }
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/todo/${id}`)
      .then((response) => {
        setArray(response.data.todo)
      }).catch((err) => {
        console.log(err?.response?.data?.message, "error.response.data.message");
      })
  }, [])

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ToastContainer />
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar text={"Home"} />
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
          <Table data={array} setData={setArray} />
        </div>
      </div>

    </div>
  );
};

export default Todo;
