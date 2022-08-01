import React, {Component,Fragment} from "react";
import {AppBar, Button, Grid, Link, Tabs, Toolbar, Typography,Tab} from "@mui/material";


class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <AppBar sx={{backgroundColor: 'blue', position: "static", boxShadow: 'none'}}>
                    <Toolbar>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button style={{
                                textTransform: 'none',
                                color: 'white',
                                background: 'black',
                                borderRadius: '15px',
                                marginLeft: '5px',
                                fontSize: 'medium'
                            }}>Dashboard</Button> </Link>
                        <Tabs sx={{margin: 'auto', mr: 5, display: 'flex', alignItems: "center"}} >
                            <Link to={"/customerDashboard"} style={{textDecoration: 'none'}}>
                                <Button style={{
                                    textTransform: 'none',
                                    color: 'white',
                                    background: 'black',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Product</Button>
                            </Link>
                            <Link to={"/reservation"} style={{textDecoration: 'none'}}>
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
                                href="/"
                                sx={{
                                    mr: 1,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '25px',
                                    marginRight: '10px'
                                }}
                            >User
                            </Typography>
                        </Tabs>
                    </Toolbar>
                </AppBar>

            </Fragment>
        )
    }

}
export default NavBar
