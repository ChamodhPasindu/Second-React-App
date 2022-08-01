import {Component, Fragment} from "react";
import NavBar from "../NavBar";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Fragment>
            <NavBar/>
        </Fragment>
        )
    }
}

export default HomePage