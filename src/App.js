import "./index.css"
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './auth/Login/login'
import SignUp from './auth/SignUp.jsx/signUp'
import Todo from './auth/Todo'

const App = () => {
    return (
        <div>
            <Router> 
                <Routes>
                    <Route path='/auth/Login' element={<Login />}/>
                    <Route path='/auth/SignUp' element={<SignUp />}/>
                    <Route exact path='/' element={<Todo />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

