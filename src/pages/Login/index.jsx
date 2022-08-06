import React, {Fragment} from "react";
import {Component} from "react";
import "./style.css";
import {Typography, TextField, Button} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import GetService from "../../services/GetService";
import HomePage from "../Home";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                username: '',
                password: ''
            },
            open: false,
        }
    }

    loginHandle = async () => {
        let loginData = this.state.loginData;
        console.log(loginData)
        let pathUrl = "auth/login";
        let response = await GetService.createPost(loginData, pathUrl);
        if (response.status === 200) {
            console.log(response.data)
            return true
        } else {
            alert("Incorrect username & password")
            return false
        }
    }

    render() {
        return (
            <Fragment>
                <div className="login-container">
                    <div className="login-sub-container">
                        <Typography
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "blue",
                            }}
                            variant="h4"
                            gutterBottom
                            component="div"
                        >
                            Login
                        </Typography>
                        <div className="login-text-field-area">
                            <TextField
                                style={{marginBottom: "30px", marginTop: "20px"}}
                                id="outlined-password-input"
                                label="User Name"
                                type="text"
                                autoComplete="current-password"
                                fullWidth
                                onChange={(e) => {
                                    let loginData = this.state.loginData;
                                    loginData.username = e.target.value
                                    this.setState({loginData})
                                }}
                            />
                            <TextField
                                style={{marginBottom: "60px",}}
                                id="outlined-password-input"
                                label="Password"
                                type="Password"
                                autoComplete="current-password"
                                fullWidth
                                onChange={(e) => {
                                    let loginData = this.state.loginData;
                                    loginData.password = e.target.value
                                    this.setState({loginData})
                                }}
                            />
                                <Link to={"homepage"} style={{textDecoration: 'none',width:'100%'}}>
                            <Button
                                style={{marginBottom: "30px", height: "50px", fontSize: "20px", fontWeight: 'bold'}}
                                variant="contained"
                                size="medium"
                                fullWidth
                                onClick={() => {
                                    this.loginHandle().then(bool => {
                                            <Link to={"homepage"}>{bool? console.log("login"):console.log("Incorrent")}</Link>
                                    })
                                }}
                            >Login</Button>
                                </Link>
                            <Typography

                                variant="h7"
                                gutterBottom
                                component="div"
                            >
                                Do you have already an account
                                <Link to={"user"} style={{textDecoration: 'none', width: '100%'}}>
                                    <Button size="large">Click Here</Button>
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;
