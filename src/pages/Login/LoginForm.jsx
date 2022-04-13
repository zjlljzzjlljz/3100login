import React, {Component} from "react";
import classnames from "classnames";
import "../form.css"
import logo from "../../Images/1.jpeg"

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            errors:{}
        }
    }

    onSubmit = (e) => {
        console.log(this.state);
        this.setState({errors:this.state});
        fetch("http://localhost:8080/login", {
            method: 'post',
            //body:`email=${this.state.email}&password=${this.state.password}`
            headers:{'Content-Type':'application/json'},
            body: 
                JSON.stringify({
                    "email":this.state.email,
                    "password":this.state.password,
                })
        }).then(res => {
            console.log('服务器',res)
            if (res.status === 200){
                 window.location = "/main";
            }
            else{
                console.log("login failed!")
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
        var emreg=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
        const {email, password, errors} = this.state;
        return(
            <div className="form-horizontal">
                <form onSubmit={this.onSubmit}> 
                    <div className="logo-wrapper">
                        <img src={logo} className="logo" alt="背景图" />
                        <span className="title">Login</span>
                    </div>
                    <div className="clearfix">
                    <div className="form-group">
                        <i class="bi bi-envelope-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':emreg.test(errors.email) === ""})}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandle}
                            placeholder="email address"
                        />
                        { errors.email === "" ? 
                        <span style={{color:'red', fontSize:'10px'}}>Email address is invalid.</span> : ''}
                    </div>
                    </div>
                    <div className="form-group">
                        <i class="bi bi-key-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.password===""})}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandle}
                            placeholder="password"
                        />
                        { errors.password==="" ? 
                        <span style={{color:'red', fontSize:'10px'}}>Password should not be empty.</span> : ''}
                    </div>
                    <div className="form-group">
                        <button class="btn btn-primary" type="submit" className="submitbutton">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
