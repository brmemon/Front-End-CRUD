import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import axios from "axios";
import "../../auth/auth.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/register", input)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          setInput({ username: "", email: "", password: "" });
          history("/");
        }
      });
  };
  return (
    <div className="main_container">
      <ToastContainer />
      <div className="sub_container_two">
        <h1 className="login_logo"> Sign Up </h1>
        <div className="login_input">
          <Input
            label="User Name"
            type={"username"}
            className={"input"}
            onChange={change}
            name="username"
            id="username"
            value={input.username}
          />
          <Input
            label="Email"
            type={"email"}
            className={"input"}
            onChange={change}
            name="email"
            id="email"
            value={input.email}
          />
          <Input
            label="password"
            type={"password"}
            className={"input"}
            onChange={change}
            name="password"
            id="password"
            value={input.password}
          />
        </div>
        <div className="MainButton_Parent">
          <Button className="button" variant="contained" onClick={submit}>
            Sign Up
          </Button>
        </div>
        <p className="sinUp_text">
          Already Have An Account?
          <a className="link" href="/auth/Login">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
