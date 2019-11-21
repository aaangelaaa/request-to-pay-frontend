import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import * as auth from "../../helpers/BackendAuth.js";
import LoginConfirmation from "../login confirmation/LoginConfirmation.js";
import { GlobalState } from "../../App";
import "./LoginPage.css";

{
  /* Login Page */
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userType: "",
      error: null,
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleClick(update) {
    const { username, password } = this.state;
    
    auth.login(username, password)
    .then(auth.profile)
    .then(data => update({...data}));
    
  }

  render() {
    return (
      <GlobalState.Consumer>
        {({ update }) => (
          <div className="login">
            <h3 className="login-header">Login</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.username}
                  placeholder="Enter email"
                  onChange={this.handleUsername}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handlePassword}
                />
              </Form.Group>

              <Button variant="primary"
                onClick={this.handleClick.bind(this, update)}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </GlobalState.Consumer>
    );
  }
}

export default LoginPage;
