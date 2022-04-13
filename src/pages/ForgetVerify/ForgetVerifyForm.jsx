import React, {Component} from "react";
import classnames from "classnames";
import "../form.css"
import logo from "../../Images/1.jpeg"

export default class ForgetVerifyForm extends Component{
    constructor(){
        super();
        this.state = {
            verification:"",
            password:"",
            errors:{}
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({errors:this.state})
        fetch("http://localhost:8080/forget/verify", {
            method: 'post',
            //body:`email=${this.state.email}&password=${this.state.password}`
            headers:{'Content-Type':'application/json'},
            body: 
                JSON.stringify({
                    "verification":this.state.verification,
                    "password":this.state.password,
                })
        }).then(res => {
            console.log('服务器',res)
            if (res.status === 200){
                alert("Verification process is completed.");
                window.location="/#/login";
            }
            else{
                console.log("verification wrong!")
            }
        }).catch(err => {
            console.log(err)
        });
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {verification, password, errors} = this.state;
        return(
            <div className="form-horizontal">
                <form onSubmit={this.onSubmit}>
                    <div className="logo-wrapper">
                        <img src={logo} className="logo" alt="背景图" />
                        <span className="title">Verify</span>
                    </div>
                    <div className="form-group">
                        <i class="bi bi-envelope-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.verification===""})}
                            type="text"
                            name="verification"
                            value={verification}
                            onChange={this.changeHandle}
                            placeholder="verification"
                        />
                        { errors.verification==="" ? 
                        <span style={{color:'red', fontSize:'10px'}}>verification should not be empty.</span> : ''}
                    </div>
                    <div className="form-group">
                        <i class="bi bi-key-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.password===""})}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandle}
                            placeholder="new password"
                        />
                        { errors.password==="" ? 
                        <span style={{color:'red', fontSize:'10px'}}>New password should not be empty.</span> : ''}
                    </div>
                    <div className="form-group">
                        <button class="btn btn-primary" type="submit" className="submitbutton">Verify</button>
                    </div>
                </form>
            </div>
        )
    }
}
