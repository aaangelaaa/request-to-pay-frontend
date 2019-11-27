import React, { Fragment, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import * as auth from "../../helpers/BackendAuth.js";
import { GlobalState } from "../../App";
import "./DriverDash.css";
import logo from "../../images/Scotiabank_White.png";
import withGlobalState from "../../helpers/withGlobalState.js";

{
  /* Dashboard */
}

class DriverDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick1(e) {
    e.preventDefault();
    // switch pages
    this.props.history.push("/invoices/?active");
  }

  handleClick2(e) {
    e.preventDefault();
    // switch pages
    this.props.history.push("/invoices/");
  }

  handleLogout() {
    // switch pages
    const {update} = this.props.context;
    console.log("logging out!");
    auth.logout().then(() => update({ loggedIn: false, user: null }));
  }

  render() {
    const {state: {user}} = this.props.context;
    return (
      <Fragment>
        <div id="rectangle"></div>
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />
        </div>
        <div className="dashboard">
          <h3 className="dash-title">Dashboard</h3>
          <div className="dash-active-invoices">
            <Button
              variant="danger"
              size="lg"
              block
              style={{
                backgroundColor: "#EC111A",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30
              }}
              onClick={this.handleClick1.bind(this)}
            >
              View Active Invoices
            </Button>
          </div>
          <div className="dash-past-invoices">
            <Button
              variant="danger"
              size="lg"
              block
              style={{
                backgroundColor: "#EC111A",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30
              }}
              onClick={this.handleClick2.bind(this)}
            >
              View Past Invoices
            </Button>
          </div>
          <div className="log-out-button">
            <Button
              variant="outline-danger"
              size="lg"
              onClick={this.handleLogout.bind(this)}
            >
              Logout
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withGlobalState(DriverDash);
