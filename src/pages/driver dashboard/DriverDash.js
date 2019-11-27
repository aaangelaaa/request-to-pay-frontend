import React, { Fragment, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import * as auth from "../../helpers/BackendAuth.js";
import { GlobalState } from "../../App";
import "./DriverDash.css";
import logo from "../../images/Scotiabank_White.png";

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
    this.props.history.push("/driveractiveinvoices");
  }

  handleClick2(e) {
    e.preventDefault();
    // switch pages
    this.props.history.push("/driverpastinvoices");
  }

  handleLogout(e) {
    e.preventDefault();
    // switch pages
    console.log("logging out!");
  }

  render() {
    return (
      <Fragment>
      <div id="rectangle">
      </div>
      <div className="header-container">
        <img className="header-logo" src={logo} alt=""/>
      </div>
      <div className="dashboard">
      <h3 className="dash-title">Dashboard</h3>
      <GlobalState.Consumer>
          {({ state, loading }) => loading && state.user ? (
              <p>loading</p>
            ) : (
              <h3>
                Hello, {state.user.first_name} {state.user.last_name}!
              </h3>
            )
          }
      </GlobalState.Consumer>
        <div className="dash-active-invoices">
          <Button 
            variant="danger" 
            size="lg" 
            block
            style={{backgroundColor: "#EC111A", alignItems: 'center', 
                      justifyContent: 'center', borderRadius: 30}}
            onClick={this.handleClick1.bind(this)}>
            View Active Invoices
          </Button>
        </div>
        <div className="dash-past-invoices">
          <Button 
            variant="danger" 
            size="lg" 
            block 
            style={{backgroundColor: "#EC111A", alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 30}}
            onClick={this.handleClick2.bind(this)}>
            View Past Invoices
          </Button>
        </div>
        <div className="log-out-button">
          <Button 
            variant="outline-danger" 
            size="lg"
            onClick={this.handleLogout.bind(this)}>
            Logout
          </Button>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default DriverDash;
