import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const history = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/signin", input)
      .then((response) => {
        const responseData = response.data.message;
        if (responseData === "Sign In Successfull") {
          sessionStorage.setItem("id", response.data.others._id);
          toast.success(responseData);
          history("/");
          setInput({ email: "", password: "" });
        } else {
          toast.error(responseData);
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
        <h1 className="login_logo"> Forgot Password </h1>
        <div className="login_input">
          <Input
            label="Email"
            type={"email"}
            className={"input"}
            onChange={change}
            name="email"
            id="email"
            value={input.email}
          />
        </div>
        <div className="MainButton_Parent">
          <Button className="button" variant="contained" onClick={submit}>
            Forgot
          </Button>
        </div>
        <p className="sinUp_text">
          Back To Login
          <Link className="link" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
