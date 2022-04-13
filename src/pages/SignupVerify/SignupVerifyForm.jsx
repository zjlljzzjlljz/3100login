import React, {Component} from "react";
import classnames from "classnames";
import "../form.css"
import logo from "../../Images/1.jpeg"

export default class SignupVerifyForm extends Component{
    constructor(){
        super();
        this.state = {
            verification:"",
            errors:{}
        }
    }

    onSubmit = (e) => {
        console.log(this.state);
        this.setState({errors:this.state});
        fetch("http://localhost:8080/signup/verify", {
            method: 'post',
            //body:`email=${this.state.email}&password=${this.state.password}`
            headers:{'Content-Type':'application/json'},
            body: 
                JSON.stringify({
                    "verification":this.state.verification
                })
        }).then(res => {
            if (res.status === 200){
                alert("Sign-up process is completed.");
                window.location = "/#/login";
            }
            else{
                console.log("signup verification failed!")
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
        const {verification, errors} = this.state;
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
                            className={ classnames('form-control', {'is-invalid':errors.email===""})}
                            type="text"
                            name="verification"
                            value={verification}
                            onChange={this.changeHandle}
                            placeholder="verification"
                        />
                        { errors.email==="" ? 
                        <span style={{color:'red', fontSize:'10px'}}>verification should not be empty.</span> : ''}
                    </div>
                    <div className="form-group">
                        <button class="btn btn-primary" type="submit" className="submitbutton">Verify</button>
                    </div>
                </form>
            </div>
        )
    }
}
