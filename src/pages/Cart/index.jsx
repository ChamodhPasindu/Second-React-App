import React from "react";
import {Fragment, Component} from "react";
import "../Product/style.css";
import {TextField, Button} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NavBar from "../NavBar";
import ProductService from "../../services/ProductService";
import CartService from "../../services/CartService";
import CustomerService from "../../services/CustomerService";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const date = new Date();
const futureDate = date.getDate() + 3;
date.setDate(futureDate);
const defaultValue = date.toLocaleDateString('en-CA');

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartForm: {
                userId: '',
                date: defaultValue,
                products:[{
                    productId:'',
                    quantity:''
                }],
            },
            products: [],
            users: [],
        }
    }

    saveCart = async () => {
        let cartForm = this.state.cartForm;
        let response = await CartService.postCart(cartForm);
        if (response.status === 200) {
            this.clearFields()
            alert("Cart Saved Successfully")
        } else {
            alert("Cart Saving Failed")
        }
    }

    setProductTitle = async () => {
        let response = await ProductService.getAllProduct();
        if (response.status === 200) {
            this.setState({
                products: response.data
            })
        }
    }

    setUserName = async () => {
        let response = await CustomerService.getAllCustomer();
        if (response.status === 200) {
            this.setState({
                users: response.data
            })
        }
    }

    componentDidMount() {
        this.setProductTitle()
        this.setUserName()
    }

    clearFields = () => {
        this.setState({
            cartForm: {
                date: defaultValue,
                products: [{quantity:''}],
            }
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <ValidatorForm className="manage-sub-container"
                                   ref="form"
                                   onSubmit={this.saveCart}
                                   onError={errors => console.log(errors)}>
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
                                        label="User Name"
                                        onChange={(e) => {
                                            let cartForm = this.state.cartForm;
                                            cartForm.userId = e.target.value;
                                            this.setState({cartForm})
                                        }}
                                    >
                                        {this.state.users.map((user) => (
                                            <MenuItem
                                                value={user.id}>{user.name.firstname + " " + user.name.lastname}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl sx={{marginTop: "30px",width:'100%'}}>
                                    <InputLabel id="demo-simple-select-label">
                                        Product Title
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Product Title"
                                        onChange={(e) => {
                                            let cartForm = this.state.cartForm;
                                            cartForm.products[0].productId = e.target.value;
                                            this.setState({cartForm})
                                        }}
                                    >
                                        {this.state.products.map((product) => (
                                            <MenuItem value={product.id}>{product.title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="manage-form-detail-col1">
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    fullWidth
                                    value={this.state.cartForm.date}
                                    defaultValue={this.state.cartForm.date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => {
                                        let cartForm = this.state.cartForm;
                                        cartForm.date = e.target.value
                                        this.setState({cartForm})
                                    }}
                                />
                                <div style={{width: '100%'}}>
                                    <TextValidator
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Qty"
                                        type="number"
                                        variant="outlined"
                                        value={this.state.cartForm.products[0].quantity}
                                        onChange={(e) => {
                                            let cartForm = this.state.cartForm;
                                            cartForm.products[0].quantity = +(e.target.value)
                                            this.setState({cartForm})
                                        }}
                                        validators={['required']}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="manage-form-btn">
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                sx={{marginRight: "10px"}}
                                onClick={() => {
                                    this.clearFields()
                                }}
                            >
                                Clear
                            </Button>
                            <Button variant="outlined" size="large" type="submit">
                                Save
                            </Button>
                        </div>
                    </ValidatorForm>
                </div>
            </Fragment>
        );
    }
}

export default Cart;
