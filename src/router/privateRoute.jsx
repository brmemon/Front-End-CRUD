import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let uid = sessionStorage.getItem('id');
    return (
        uid ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

export default PrivateRoutes



























// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from '../auth/Login/login';
// import SignUp from '../auth/SignUp.jsx/signUp';
// import Todo from '../Todo/todo';
// import Profile from '../Profile/profile';
// import ForgotPassword from '../auth/ForgotPassword/forgotPassword';

// const privateRoute = () => {
//     const uid = sessionStorage.getItem("id");
//     const location = window?.location.pathname

//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path={'/'} element={uid ? <Todo /> : <Navigate to={'/auth/Login'} />} />
//                     <Route path={'/Profile'} element={uid ? <Profile /> : <Navigate to={'/auth/Login'} />} />
//                     <Route path={'/auth/login'} element={uid ? <Navigate to={'/'} /> : <Login />} />
//                     <Route path={'/auth/signUp'} element={uid ? <Navigate to={'/'} /> : <SignUp />} />
//                     <Route path={'/auth/Forgot/Password'} element={uid ? <Navigate to={'/'} /> : <ForgotPassword />} />
//                     <Route path={location} element={uid ? <Navigate to={'/'} /> : <Navigate to={'/auth/login'} />} />
//                 </Routes>
//             </Router>
//         </div>
//     )
// }

// export default privateRoute