import React from "react";
import {Component, Fragment} from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PostService from "../../services/PostService"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userForm: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: '',
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''
            },
            data:[],
            loaded:false,
        }
    }

    userSave=async ()=>{
        let userForm=this.state.userForm;
        console.log(userForm)
        let pathUrl = "users";
        let response = await PostService.createPost(userForm, pathUrl);
        if (response.status === 200) {
            this.setState({
                data:true,
                loaded:response.data
            })
            alert("User Saved Successfully")
        } else {
            alert("User Save Failed")
        }

    }

    render() {
        return (
            <Fragment>
                <div className="user-container">
                    <div className="user-sub-detail-container">
                        <div className="user-form-title">
                            <Link to={"/"} style={{textDecoration: "none", marginRight: '28%', marginTop: '10px'}}>
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
                            <h1 style={{marginRight: '30%'}}>User Registration From</h1>
                        </div>
                        <div className="user-from-detail">
                            <div className="user-form-detail-col1">
                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.name.firstname = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.email = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.password = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Street"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.street = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Zip Code"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.zipcode = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Long Value"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.geolocation.long = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                            </div>
                            <div className="user-form-detail-col1">
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.name.lastname = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="User Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.username = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.city = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Street No"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.number = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Lat Value"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.address.geolocation.lat = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Mobile No"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => {
                                        let userForm = this.state.userForm;
                                        userForm.phone = e.target.value
                                        this.setState({userForm})
                                    }}
                                />
                            </div>
                        </div>
                        <div className="user-form-detail-btn">
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                sx={{marginRight: "10px"}}
                            >
                                Clear
                            </Button>
                            <Button variant="outlined" size="large"
                                    onClick={() => {
                                        this.userSave()
                                    }}>
                                Save
                            </Button>
                        </div>
                    </div>
                    <div className="user-sub-table-container">
                        <div className="user-form-title">
                            <h1>Current Users</h1>
                        </div>
                        <div className={"user-from-detail"}>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead style={{background: '#141212'}}>
                                        <TableRow>
                                            <TableCell style={{color: 'white', fontSize: '15px'}} align="center">First
                                                Name</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Email</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">City</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Mobile</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>

                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default User;
