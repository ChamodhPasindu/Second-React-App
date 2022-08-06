import React from "react";
import { Fragment, Component } from "react";
import "../Product/style.css";
import { TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NavBar from "../NavBar";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <div className="manage-container">
          <div className="manage-sub-container">
            <div className="manage-form-title">
              <h1>Cart Manage</h1>
            </div>
            <div className="manage-form-detail">
              <div className="manage-form-detail-col1">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    User Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="User Name"
                    label="User Name"
                  >
                    <MenuItem value={"10"}>001</MenuItem>
                    <MenuItem value={"20"}>002</MenuItem>
                    <MenuItem value={"30"}>003</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ marginTop: "30px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Product Title
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Product Title"
                    label="Product Title"
                  >
                    <MenuItem value={"10"}>001</MenuItem>
                    <MenuItem value={"20"}>002</MenuItem>
                    <MenuItem value={"30"}>003</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="manage-form-detail-col1">
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  sx={{ marginTop: "30px" }}
                  id="outlined-basic"
                  label="Qty"
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
export default Cart;
