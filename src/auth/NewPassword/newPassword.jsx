import { Button } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Input from '../../components/Input'

const NewPassword = () => {

    return (
        <div className="main_container" >
            <ToastContainer />
            <div className="sub_container">
                <h1 className="login_logo">Add New Password</h1>
                <div className="login_input">
                    {/* <div className='otp_input'> */}
                        <Input
                            label="New Password"
                            type={"password"}
                            className={"input"}
                            name="password"
                            id="password"
                        />
                    {/* </div> */}
                </div>
                <div className="MainButton_Parent">
                    <Button className="button" variant="contained" >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NewPassword