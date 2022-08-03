import { Component, Fragment } from "react";
import NavBar from "../NavBar";
import "./style.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="home-container">
          <div className="home-sub-container">
            <div className="home-card-div-container">
              <div className="home-card-div">
                <h1>PRODUCT</h1>
                <h1>00</h1>
              </div>
              <div className="home-card-div">
                <h1>CART</h1>
                <h1>00</h1>
              </div>
              <div className="home-card-div">
                <h1>USERS</h1>
                <h1>00</h1>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
