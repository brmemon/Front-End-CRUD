import React from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
const Login = () => {
  return (
    <div className="main_container">
      <div className="sub_container_two">
        <h1 className="login_logo"> Login </h1>
        <h2 className="login_welcome">Welcome Back! Login To Your Account</h2>
        <div className="login_input">
          <Input
            label="Email"
            type={"email"}
            className={"input"}
            name="email"
            id="email"
          />
          <Input
            label="password"
            type={"password"}
            className={"input"}
            name="password"
            id="password"
          />
        </div>
        <div className="MainButton_Parent">
        <Button className="button" variant="contained">Login</Button>
        </div>
        <p className="sinUp_text">
          Don't Have An Account?
          <a className="link" href="/auth/SignUp">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
