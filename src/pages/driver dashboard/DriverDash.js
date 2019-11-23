import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import * as auth from "../../helpers/BackendAuth.js";
import { GlobalState } from "../../App";
import "./DriverDash.css";

{
  /* Driver Dashboard */
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
    this.props.history.push("/driveractiveinvoices");
  }

  handleClick2(e) {
    e.preventDefault();
    // switch pages
    this.props.history.push("/driverpastinvoices");
  }

  handleLogout(e) {
    e.preventDefault();
    // switcc pages
    console.log("logging out!");
  }

  render() {
    return (
      <div className="driver-dash">
        <h3 className="driver-header">Driver Dashboard</h3>
        <GlobalState.Consumer>
          {({ state, loading }) => loading || !state.user ? (
              <p>loading</p>
            ) : (
              <h3>
                Hello, {state.user.first_name} {state.user.last_name}!
              </h3>
            )
          }
        </GlobalState.Consumer>
        <Button variant="primary" size="lg" block onClick={this.handleClick1.bind(this)}>
          View Active Invoices
        </Button>
        <Button variant="secondary" size="lg" block onClick={this.handleClick2.bind(this)}>
          View Past Invoices
        </Button>
        <Button variant="primary" size="sm" onClick={this.handleLogout.bind(this)}>
          Logout
        </Button>
      </div>
    );
  }
}

export default DriverDash;
