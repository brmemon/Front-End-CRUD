import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import Input from "../../components/Input";
import "../../auth/auth.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import NewPassword from '../NewPassword/newPassword';

const Otp = ({email}) => {
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const location = useLocation();
    console.log("location: ", location)
    // const { email } = location.state || {};
    console.log(otp);
    console.log(newPassword);
    console.log(email);
    useEffect(() => {
        console.log("Email:", email);
    }, [email]);

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
        console.log("EMail: ", email)
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_BACKEND_PORT}/api/user/forgot/password`, {
                otp: otp,
                password: newPassword,
                email: email
            }).then((response) => {
                const responseData = response.data.message;
                if (responseData === "Password Changed successfully") {
                    toast.success(responseData);
                    setOtp('');
                    setNewPassword('');
                } else {
                    toast.error(responseData);
                }
            })
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("An error occurred while sending OTP.");
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
