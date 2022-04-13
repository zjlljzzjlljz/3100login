import React, {Component} from "react";
import ForgetVerifyForm from "./ForgetVerifyForm";

export default class ForgetVerifyPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <ForgetVerifyForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}