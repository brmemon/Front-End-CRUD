import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login/login';
import SignUp from './auth/SignUp.jsx/signUp';
import Todo from './Todo/todo';
import Profile from './Profile/profile';
import ForgotPassword from './auth/ForgotPassword/forgotPassword';
import PrivateRoutes from './router/privateRoute';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Todo />} path="/" exact />
                        <Route element={<Profile />} path="/Profile" />
                    </Route>
                    <Route element={<Login />} path="/auth/login" />
                    <Route element={<SignUp />} path="/auth/SignUp" />
                    <Route element={<ForgotPassword />} path="/auth/Forgot/Password" />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

























// import React from 'react';
// import PrivateRoutes from './router/privateRoute';

// const App = () => {

//     return (
//         <>
//             <PrivateRoutes />
//         </>
//     );
// };

// export default App;
