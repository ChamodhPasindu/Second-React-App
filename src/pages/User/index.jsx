import React from "react";
import { Component, Fragment } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    return (
      <Fragment>
        <div className="user-container">
          <div className="user-sub-detail-container">
            <div className="user-form-title">
            <Link to={"/"} style={{ textDecoration: "none",marginRight:'28%',marginTop:'10px' }}>
                <Button
                  style={{
                    textTransform: "none",
                    color: "white",
                    background: "black",
                    borderRadius: "15px",
                    marginLeft: "0",
                    fontSize: "medium",
                  }}
                >
                  back
                </Button>
              </Link>
              <h1 style={{marginRight:'30%' }}>User Registration From</h1> 
            </div>
            <div className="user-from-detail">
              <div className="user-form-detail-col1">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Street"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Long Value"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="user-form-detail-col1">
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Streen No"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Lat Value"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Mobile No"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
            <div className="user-form-detail-btn">
              <Button
                variant="outlined"
                color="error"
                size="large"
                sx={{ marginRight: "10px" }}
              >
                Clear
              </Button>
              <Button variant="outlined" size="large">
                Save
              </Button>
            </div>
          </div>
          <div className="user-sub-table-container">
            <div className="user-form-title">
              <h1>Current Users</h1>
            </div>
            <div></div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default User;
