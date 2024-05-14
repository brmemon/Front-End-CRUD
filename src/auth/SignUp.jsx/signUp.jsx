import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import axios from "axios";
import "../../auth/auth.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

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
      .post(`${process.env.REACT_APP_VERCEL_BACKEND_URL}/api/user/register`, input)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          sessionStorage.setItem("id", response.data.user._id);
          setInput({ username: "", email: "", password: "" });
          history("/");
        }
      });
  };

  let uid;
  useEffect(() => {
    uid = sessionStorage.getItem('id')
    if (uid) return (history('/'))
  })

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
          <Link to="/auth/login" className="link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
