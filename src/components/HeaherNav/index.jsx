import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./style.css"

export default class App extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-faded">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Mind Forest</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/forget">Forget password</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}