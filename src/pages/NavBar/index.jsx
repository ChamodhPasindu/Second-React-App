import React, {Component,Fragment} from "react";
import {AppBar, Button, Tabs, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";


class NavBar extends Component{

    render() {
        return(
            <Fragment>
                <AppBar sx={{backgroundColor: 'blue', position: "static", boxShadow: 'none'}}>
                    <Toolbar>
                        <Link to="/homepage" style={{textDecoration: 'none'}}>
                            <Button style={{
                                textTransform: 'none',
                                color: 'white',
                                background: 'black',
                                borderRadius: '15px',
                                marginLeft: '5px',
                                fontSize: 'medium'
                            }}>Dashboard</Button> </Link>
                        <Tabs sx={{margin: 'auto', mr: 5, display: 'flex', alignItems: "center"}} >
                            <Link to={"/product"} style={{textDecoration: 'none'}}>
                                <Button style={{
                                    textTransform: 'none',
                                    color: 'white',
                                    background: 'black',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Product</Button>
                            </Link>
                            <Link to={"/cart"} style={{textDecoration: 'none'}}>
                                <Button style={{
                                    textTransform: 'none',
                                    color: 'white',
                                    background: 'black',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Cart</Button>
                            </Link>
                           
                        </Tabs>
                        <Tabs textColor="white" sx={{margin: 'auto', mr: 5, display: 'flex', alignItems: "center"}}>

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 1,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '25px',
                                    marginRight: '10px',
                                }}
                            >{this.props.username}
                            </Typography>
                            <Link to={"/"} style={{textDecoration: 'none'}}>
                                <Button style={{
                                    textTransform: 'none',
                                    color: 'white',
                                    background: 'red',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Logout</Button>
                            </Link>
                        </Tabs>
                    </Toolbar>
                </AppBar>

            </Fragment>
        )
    }

}
export default NavBar
