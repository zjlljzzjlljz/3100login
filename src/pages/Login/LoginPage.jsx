import React, {Component} from "react";
import LoginForm from "./LoginForm";

export default class LoginPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <LoginForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}