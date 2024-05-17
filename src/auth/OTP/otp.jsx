import React, { useState } from 'react';
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useNavigate } from 'react-router-dom';
import NewPassword from '../NewPassword/newPassword';

const Otp = ({ email }) => {
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useNavigate()

    const handleChange = (newValue) => {
        setOtp(newValue);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const submit = async () => {
        if (!otp || !newPassword) {
            toast.error("All inputs are required");
            return;
        }
        console.log("EMail: ", { email: email })
        try {
            await axios.post(`${process.env.REACT_APP_VERCEL_BACKEND_URL}/api/user/forgot/password`, {
                otp: otp,
                password: newPassword,
                email: email
            }).then((response) => {
                const responseData = response.data.message;
                if (responseData === "Password changed successfully") {
                    toast.success(responseData, "hellow");
                    setOtp('');
                    setNewPassword('');
                    history("/auth/login")
                } else {
                    toast.error(responseData);
                }
            })
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="main_container">
            <ToastContainer />
            <div className="sub_container_otp">
                <h1 className="login_logo">OTP</h1>
                <div className="login_input">
                    <div className='otp_input'>
                        <MuiOtpInput value={otp} onChange={handleChange} />
                    </div>
                    <Input
                        label="New Password"
                        type="password"
                        className="input"
                        name="newPassword"
                        id="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                    />
                </div>
                <div className="MainButton_Parent">
                    <Button className="button" variant="contained" onClick={submit}>
                        OTP
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Otp;
