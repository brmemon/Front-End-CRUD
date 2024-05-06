import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Button, TextField } from "@mui/material";
import "./todo.css";
import Table from "../../components/table";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { useEffect } from "react";

const Todo = () => {
  let id = sessionStorage.getItem("id")
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`http://localhost:5000/api/todo ${id}`)
        .then((response) => {
          console.log(response)
        })
    }
    fetch()
  }, [])

  const submit = async () => {
    if (input.title === "" || input.body === "") {
      toast.error("All Fields Are Required")
    } else {
      if (id) {
        await axios.post("http://localhost:5000/api/todo/add"), { title: input.title, body: input.body, id: id }
          .then((response) => {
            console.log(response);
          })
      }
      setArray([...array, input])
      setInput({ title: "", body: "" });
      toast.success(response);
    }
  }

  // const submit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post("http://localhost:5000/api/todo/add", input)
  //     .then((response) => {
  //       const responseData = response.data.message;
  //       if (responseData === "Todo Add Successfully") {
  //         toast.success(responseData);
  //         setInput({ title: "", body: "" });
  //       }
  //       if (input.title === "" || input.body === "") {
  //         toast.error("All Fields Are Required")
  //       }
  //     }).catch((error) => {
  //       toast.error(error.response.data.message)
  //     });
  // };

  // const handleSubmit = () => {
  //   if (input.title === "" || input.body === "") {
  //     toast.error("Please Fill Title And Body");
  //   } else {
  //     setArray([...array, input]);
  //     setInput({ title: "", body: "" });
  //     toast.success("Task Added Successfully");
  //   }
  // };

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
          <Table data={array} />
        </div>
      </div>

    </div>
  );
};

export default Todo;
