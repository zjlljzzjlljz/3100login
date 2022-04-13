import React, {Component} from "react";
import classnames from "classnames";
import "../form.css"
import logo from "../../Images/1.jpeg"

export default class SignUpForm extends Component{
    constructor(){
        super();
        this.state = {
            username:"",
            email:"",
            password:"",
            errors:{}
        }
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({errors:this.state});
        fetch("http://localhost:8080/signup", {
            method: 'post',
            //body:`email=${this.state.email}&password=${this.state.password}
            headers:{'Content-Type':'application/json'},
            body: 
                JSON.stringify({
                    "email":this.state.email,
                    "username":this.state.username,
                    "password":this.state.password
                })
        }).then(res => {
            console.log('服务器',res)
            if (res.status === 200){
                
            }
            else{
                console.log("signup failed!")
            }
        }).catch(err => {
            console.log(err)
        });
        var emreg=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
        try {
            const { data } = this.state;
            if (emreg.test(this.state.email) === true) {
                window.location = "/#/signup/verify";}
            //window.location = "/#/signup/verify"; 邮箱正确跳转
          } catch (e) {
            const { data } = this.state;
            if (emreg.test(this.state.email) === false) {
                window.location = "/"; 
            }
        }
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        var emreg=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
        const {username, email, password, errors} = this.state;
        return(
            <div className="form-horizontal">
                <form onSubmit={this.onSubmit}>
                    <div className="logo-wrapper">
                        <img src={logo} className="logo" alt="背景图" />
                        <span className="title">Sign Up</span>
                    </div>
                    <div className="form-group">
                        <i class="bi bi-person-circle"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.username===""})}
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.changeHandle}
                            placeholder="username"
                        />
                        { errors.username==="" ?
                        <span style={{color:'red', fontSize:'10px'}}>Email address is invalid.</span> : ''}
                    </div>
                    <div className="form-group">
                        <i class="bi bi-envelope-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.email === ""})}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandle}
                            placeholder="email address"
                        />
                        { errors.email === "" ? 
                        <span style={{color:'red', fontSize:'10px'}}>Email address is invalid.</span> : ''}
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
                        <button class="btn btn-primary" type="submit" className="submitbutton">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}