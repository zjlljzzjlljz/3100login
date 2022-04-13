import React, {Component} from "react";
import classnames from "classnames";
import "../form.css"
import logo from "../../Images/1.jpeg"
import { queryAllByAttribute } from "@testing-library/react";

export default class SignUpForm extends Component{
    constructor(){
        super();
        this.state = {
            email:"",
            errors:{}
        }
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({errors:this.state});
        fetch("http://localhost:8080/forget", {
            method: 'post',
            //body:`email=${this.state.email}&password=${this.state.password}
            headers:{'Content-Type':'application/json'},
            body: 
                JSON.stringify({
                    "email":this.state.email
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
                window.location = "/#/forget/verify";}
            //window.location = "/#/signup/verify"; 邮箱正确跳转
            if (emreg.test(this.state.email) === false) {
                alert("Invalid email address!")
                window.location = "/#/forget"; 
            }
          } catch (e) {
            if (emreg.test(this.state.email) === false) {
                window.location = "/#/"; 
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
        const { email, errors} = this.state;
        return(
            <div className="form-horizontal">
                <form onSubmit={this.onSubmit}>
                    <div className="logo-wrapper">
                        <img src={logo} className="logo" alt="背景图" />
                        <span className="title">Forget Password</span>
                    </div>
                    <div className="form-group">
                        <i class="bi bi-envelope-fill"></i>
                        <input
                            className={ classnames('form-control', {'is-invalid':errors.email===""})}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandle}
                            placeholder="email"
                        />
                        { errors.email === ""?
                        <span style={{color:'red', fontSize:'10px'}}>Email address is invalid.</span> : ''}
                    </div>
                    <div className="form-group">
                        <button class="btn btn-primary" type="submit" className="submitbutton">Forget password</button>
                    </div>
                </form>
            </div>
        )
    }
}