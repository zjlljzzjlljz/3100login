import React, {Component} from "react";
import SignupVerifyForm from "./SignupVerifyForm";

export default class SignupVerifyPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupVerifyForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}