import React, { Fragment } from "react";
import { Component } from "react";
import "./style.css";
import { Typography, TextField, Button } from "@mui/material";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
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
                style={{ marginBottom: "30px", marginTop: "20px" }}
                id="outlined-password-input"
                label="User Name"
                type="text"
                autoComplete="current-password"
                fullWidth="100%"
              />
              <TextField
              style={{ marginBottom: "60px",}}
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
                fullWidth="100%"
              />
               <Link to={"homepage"} style={{textDecoration: 'none',width:'100%'}}>
              <Button
              style={{ marginBottom: "30px",height:"50px", fontSize:"20px",fontWeight:'bold'}} 
              variant="contained"
              fullWidth="100%"
              size="medium"
              >Login</Button>
              </Link>
               <Typography
       
              variant="h7"
              gutterBottom
              component="div"
            >
              Do you have already an accout
              <Link to={"user"} style={{textDecoration: 'none',width:'100%'}}>
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
