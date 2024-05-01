import "./index.css"
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from './auth/Login/login'
import SignUp from './auth/SignUp.jsx/signUp'
import Todo from './auth/Todo'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { authActions } from "./store"
import { CircularProgress } from "@mui/material"

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        console.log(sessionStorage.getItem("id"));
        dispatch(authActions?.login());
    }, [dispatch]);

    const location = window.location.pathname
    return (
        <div>
            {isLoading ? (
                <div style={{ display: "flex", height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}><CircularProgress /></div>
            ) : (
                <Router>
                    <Routes>
                        <Route path={'/'} element={isLoggedIn ? <Todo /> : <Navigate to={'/auth/login'} />} />
                        <Route path='/auth/login' element={<Login />} />
                        <Route path='/auth/SignUp' element={<SignUp />} />
                        <Route path={location} element={isLoggedIn ? <Navigate to={'/'} /> : <Navigate to={'/auth/login'} />} />
                    </Routes>
                </Router>
            )}
        </div>
    )
}

export default App
