import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import BackendAuth from '../../helpers/BackendAuth.js'
import LoginConfirmation from '../login confirmation/LoginConfirmation.js'
import './LoginPage.css';

{/* Login Page */}

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: ''
        }
        
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsername (e) {
        e.preventDefault();
        this.setState({ username: e.target.value });
        this.username = e.target.value;
        console.log(this.username);
    }

    handlePassword (e) {
        e.preventDefault();
        this.setState({ password: e.target.value });
        this.password = e.target.value;
        console.log(this.password);
    }

    handleClick (e) {
        e.preventDefault();
        // get info from backend here
        if (this.username == "driver@gmail.com") {
            this.userType = "Driver";
        } else if (this.username == "sbo@gmail.com") {
            this.userType = "SBO";
        } else {
            this.userType = "Company";
        };
        
        console.log(this.userType + " Dashboard");

        if (this.userType == "Driver") {
            window.location.href = "/driverdash";
        } else if (this.userType == "SBO") {
            window.location.href = "/sbodash";
        } else {
            window.location.href = "/companydash";
        };

    }

    handleSignUp (e) {
        window.location.href = "/signup";
    }

    render () {
        return (
            <div className="login">
                <h3 className="login-header">Login</h3>
                <Form onSubmit={this.handleClick}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleUsername}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePassword}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Button variant="primary" type="submit" block onClick={this.handleSignUp}>
                        Sign Up
                </Button>
            </div>
        );
    }
}

export default LoginPage;