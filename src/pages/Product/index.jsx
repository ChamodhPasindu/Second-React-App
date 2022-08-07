import React from "react";
import {Fragment, Component} from "react";
import "./style.css";
import {TextField, Button} from "@mui/material";
import NavBar from '../NavBar'
import ProductService from "../../services/ProductService";

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productForm: {
                title: '',
                price: '',
                category: '',
                image: '',
                description: '',

            }
        }
    }

    clearFields = () => {
        this.setState({
            productForm: {
                title: '',
                price: '',
                category: '',
                image: '',
                description: '',
            }
        })
    }

    saveProduct = async () => {
        console.log(this.state.productForm)
        let form = this.state.productForm;
        let response = await ProductService.postProduct(form)
        if (response.status === 200) {
            this.clearFields();
            alert("Product Saved Successfully");
        } else {
            alert("Product Saving Failed");
        }
    }

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
                                    value={this.state.productForm.title}
                                    onChange={(e) => {
                                        let form = this.state.productForm;
                                        form.title = e.target.value;
                                        this.setState({form})
                                    }}
                                />
                                <TextField
                                    sx={{marginTop: "30px"}}
                                    id="outlined-basic"
                                    label="Category"
                                    variant="outlined"
                                    fullWidth
                                    value={this.state.productForm.category}
                                    onChange={(e) => {
                                        let form = this.state.productForm;
                                        form.category = e.target.value;
                                        this.setState({form})
                                    }}
                                />
                                <Button variant="contained" component="label" sx={{marginTop: "30px"}}
                                        fullWidth>
                                    Choose Image
                                    <input hidden accept="image/*" multiple type="file"
                                     onChange={(e)=>{
                                         let form = this.state.productForm;
                                         form.image = e.target.value;
                                         this.setState({form})
                                     }}/>
                                </Button>

                            </div>
                            <div className="manage-form-detail-col1">
                                <TextField
                                    id="outlined-basic"
                                    label="Price"
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    value={this.state.productForm.price}
                                    onChange={(e) => {
                                        let form = this.state.productForm;
                                        form.price = e.target.value;
                                        this.setState({form})
                                    }}
                                />
                                <TextField
                                    sx={{marginTop: "30px"}}
                                    id="outlined-basic"
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    value={this.state.productForm.description}
                                    onChange={(e) => {
                                        let form = this.state.productForm;
                                        form.description = e.target.value;
                                        this.setState({form})
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{marginTop: '50px'}} className="manage-form-btn">
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
                            <Button variant="outlined" size="large"
                                    onClick={() => {
                                        this.saveProduct();
                                    }}>
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
