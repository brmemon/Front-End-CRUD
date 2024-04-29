import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Button, TextField } from "@mui/material";
import "./todo.css";

const Todo = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="todo_input">
          <TextField
            className="todo_text_filed"
            id="standard-basic"
            label="Title"
            variant="filled"
          />
          <TextField
            className="todo_text_filed"
            id="standard-basic"
            label="Body"
            variant="filled"
          />
        </div>
        <Button className="todo_butoon" variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
};

export default Todo;
