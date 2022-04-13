import React, {Component, useState} from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/SignUp/SignUpPage.jsx";
import App from "../pages/App.jsx";
import HeaderNav from "../components/HeaherNav"
import LoginPage from "../pages/Login/LoginPage.jsx";
import ForgetPage from "../pages/Forget/ForgetPage.jsx";
import SignupVerifyPage from "../pages/SignupVerify/SignupVerifyPage.jsx";
import ForgetVerifyPage from "../pages/ForgetVerify/ForgetVerifyPage.jsx"
import "./index.css"



export default class index extends Component{
    render(){
        return(
            <div  className = "bg">
            <Router>
                <HeaderNav />
                <Routes>
                    <Route exact path="/signup" element={<SignUpPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/forget" element={<ForgetPage />} />
                    <Route exact path="/signup/verify" element={<SignupVerifyPage />} />
                    <Route exact path="/forget/verify" element={<ForgetVerifyPage />} />
                    <Route exact path="/" element={<App />} />
                </Routes>
            </Router>
            </div>
        );
    }
}