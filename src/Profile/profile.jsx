import React, { useState } from 'react'
import Input from '../components/Input'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Button } from '@mui/material';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';
import "./profile.css"

const Profile = () => {
    const [input, setInput] = useState({ email: "", oldPassword: "", newPassword: "" });
    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post(`${process.env.REACT_APP_VERCEL_BACKEND_URL}/api/user/forget/password`, input)
            .then((response) => {
                const responseData = response.data.message;
                if (responseData === "Password Changed Successfully") {
                    toast.success(responseData);
                    setInput({ email: "", oldPassword: "", newPassword: "" });
                }
                if (input.email === "" || input.oldPassword === "" || input.newPassword === "") {
                    toast.error("All Fields Are Required")
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            });
    };
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ToastContainer />
            <Navbar />
            <div style={{ display: "flex", width: "100%" }}>
                <Sidebar text={"Profile"} />
                <div className="login_input" style={{ display: "flex", flexDirection: "column", marginTop: "150px", alignItems: "center", width: "80%" }}>
                    <Input
                        label="Email"
                        type={"email"}
                        className={"profile_input"}
                        onChange={change}
                        name="email"
                        id="email"
                        value={input.email}
                    />
                    <Input
                        label="Old Password"
                        type={"oldPassword"}
                        className={"profile_input"}
                        onChange={change}
                        name="oldPassword"
                        id="oldPassword"
                        value={input.oldPassword}
                    />
                    <Input
                        label="New Password"
                        type={"newPassword"}
                        className={"profile_input"}
                        onChange={change}
                        name="newPassword"
                        id="newPassword"
                        value={input.newPassword}
                    />
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button style={{ width: "20%" }} variant="contained" onClick={submit}>
                            update
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile