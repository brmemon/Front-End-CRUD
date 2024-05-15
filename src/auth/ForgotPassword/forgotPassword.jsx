import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import OTP from "../OTP/otp";
// import React, { useState } from "react";

const ForgotPassword = ({email, setEmail}) => {
  const history = useNavigate()
  // const [email, setEmail] = useState(null);
  // const [otpForm, setOtpForm] = useState(null);

  const sendOTP = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_BACKEND_PORT}/api/user/send/email`, { email });
      const responseData = response.data.message;
      if (responseData === "Success Please Check Your Email") {
        toast.success(responseData);
        // setOtpForm(false)
        history("/auth/Otp", { email })
        // setEmail("");
      } else {
        toast.error(responseData);
      }
    } catch (error) {
      toast.error("An error occurred while sending OTP.");
    }
  };

  return (
    <>
      {/* {otpForm ? */}
      <div className="main_container" >
        <ToastContainer />
        <div className="sub_container_two">
          <h1 className="login_logo"> Forgot Password </h1>
          <div className="login_input">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              name="email"
              id="email"
            />
          </div>
          <div className="MainButton_Parent">
            <Button className="button" variant="contained" onClick={sendOTP}>
              Send OTP
            </Button>
          </div>
        </div>
      </div>
      {/* : <OTP />
      } */}
    </>
  );
};

export default ForgotPassword;
