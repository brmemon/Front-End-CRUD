import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_VERCEL_BACKEND_URL}/api/user/signin`, input)
      .then((response) => {
        const responseData = response.data.message;
        if (responseData === "Sign In Successfull") {
          sessionStorage.setItem("id", response.data.others._id);
          console.log("Login page id", response.data.others._id);
          console.log("Login page response", responseData);
          history("/");
          toast.success(responseData);
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
        <h1 className="login_logo"> Login </h1>
        <h2 className="login_welcome"> Welcome Back! Login To Your Account </h2>
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
          <Button className="button" variant="contained" onClick={submit}> Login </Button>
        </div>

        <div style={{ margin: "10px 0" }}>
          <Link to="/auth/Forgot/Password" className="link"> Forgot Password </Link>
        </div>

        <p className="sinUp_text"> Don't Have An Account?
          <Link to="/auth/SignUp" className="link"> Sign Up </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
