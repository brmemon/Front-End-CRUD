import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { Button, CircularProgress, TextField } from "@mui/material";
import "./todo.css";
import Table from "../../components/table";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";

const Todo = () => {
  let id = sessionStorage.getItem("id");
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const [updateArray, setUpdateArray] = useState(null);
  const [loading, setLoading] = useState(true);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  ///  ADD
  const submit = async () => {
    if (input.title === "" || input.body === "") {
      toast.error("All Fields Are Required");
    } else {
      try {
        await axios
          .post("http://localhost:5000/api/todo/add", {
            title: input.title,
            body: input.body,
            id: id,
          })
          .then((response) => {
            setArray([...array, response.data.list]);
            toast.success("Task Added successfully");
            setInput({ title: "", body: "" });
          });
      } catch (err) {
        toast.error(err.response);
      }
    }
  };
  ///

  /// UPDATE  
  const onSubmit = async () => {

    if (input.title === "" || input.body === "") {
      toast.error("All Fields Are Required");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/todo/update/${updateArray._id}`, {
        title: input.title,
        body: input.body
      })
        .then((response) => {
          toast.success(response.data.message);
          setInput({ title: "", body: "" });
        })
        .catch((error) => {
          toast.error("Failed to update task");
          console.error("Error:", error.response.data);
        });
    } catch (err) {
      toast.error("Failed to update task");
      console.error("Error:", err.response);
    }
  };
  ///

  /// GET
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/todo/${id}`)
      .then((response) => {
        setArray(response.data.todo);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        setLoading(false);
      });
  }, []);
  ///

  useEffect(() => {
    if (updateArray) {
      setInput({ title: updateArray.title, body: updateArray.body });
    }
  }, [updateArray]);

  return (
    <>
      {
        loading ? (
          <div style={{ display: "flex", height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}><CircularProgress /></div>
        ) : (
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
                {updateArray ? (
                  <Button className="todo_button" variant="contained" onClick={onSubmit}>
                    Update
                  </Button>
                ) : (
                  <Button className="todo_button" variant="contained" onClick={submit}>
                    Add
                  </Button>
                )}

                <Table
                  data={array}
                  setData={setArray}
                  updateArray={updateArray}
                  setUpdateArray={setUpdateArray}
                />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Todo;
