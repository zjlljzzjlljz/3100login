import React, {Component} from "react";
import ForgetForm from "./ForgetForm";

export default class ForgetPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <ForgetForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}