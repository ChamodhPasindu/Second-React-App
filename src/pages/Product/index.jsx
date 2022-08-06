import React from "react";
import { Fragment, Component } from "react";
import "./style.css";
import { TextField, Button } from "@mui/material";
import NavBar from '../NavBar'

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

class Product extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <div className="manage-container">
          <div className="manage-sub-container">
            <div className="manage-form-title">
              <h1>Product Manage</h1>
            </div>
            <div className="manage-form-detail">
              <div className="manage-form-detail-col1">
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ marginTop: "30px" }}
                  id="outlined-basic"
                  label="First Company"
                  variant="outlined"
                  fullWidth
                />
                <Button 
                   sx={{ marginTop: "30px" }}
                   variant="contained" fullWidth>
                  Choose Image 
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
            
              </div>
              <div className="manage-form-detail-col1">
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ marginTop: "30px" }}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
            <div className="manage-form-btn">
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
        </div>
      </Fragment>
    );
  }
}
export default Product;
