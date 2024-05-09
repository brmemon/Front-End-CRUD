import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login/login';
import SignUp from './auth/SignUp.jsx/signUp';
import Todo from './auth/Todo/todo';
import { CircularProgress } from '@mui/material';
import Profile from './Profile/profile';
import ForgotPassword from './auth/ForgotPassword/forgotPassword';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const id = sessionStorage.getItem('id');
        setIsLoggedIn(id);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [isLoggedIn]);

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         sessionStorage.clear();
    //     }
    // }, [isLoggedIn]);

    const location = window.location.pathname;

    console.log(isLoggedIn ? 'User is logged in' : 'User is not logged in');
    console.log('User ID:', sessionStorage.getItem('id'));

    return (
        <div>
            {isLoading ? (
                <div style={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                <Router>
                    <Routes>
                        <Route
                            path={'/'}
                            element={isLoggedIn ? <Todo /> : <Navigate to={'/auth/login'} />}
                        />
                        <Route path='/auth/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                        <Route path='/auth/SignUp' element={<SignUp />} />
                        <Route path='/auth/Forgot/Password' element={<ForgotPassword />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route
                            path={location}
                            element={isLoggedIn ? <Navigate to={'/'} /> : <Navigate to={'/auth/login'} />}
                        />
                    </Routes>
                </Router>
            )}
        </div>
    );
};

export default App;
