import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import BackendAuth from '../../helpers/BackendAuth.js'
import './SignUp.css';

{/* Signup Page */}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            userType: ''
        }
        
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleFirstName (e) {
        e.preventDefault();
        this.setState({ firstName: e.target.value });
        this.firstName = e.target.value;
        console.log(this.firstName);
    }
    
    handleLastName(e) {
        e.preventDefault();
        this.setState({ lastName: e.target.value });
        this.lastName = e.target.value;
        console.log(this.lastName);
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
        window.location.href = "/";
    }

    render () {
        return (
            <div className="signup">
                <h3 className="signup-header">Sign Up</h3>
                <Form onSubmit={this.handleClick}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="John" onChange={this.handleFirstName}/>
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Smith" onChange={this.handleLastName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="john.smith@gmail.com" onChange={this.handleUsername}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="sm" type="password" placeholder="secure123" onChange={this.handlePassword}/>
                    </Form.Group>

                    <DropdownButton id="dropdown-user" title="User Type">
                      <Dropdown.Item href="#/action-1">Truck Driver</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Business Owner</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Supplier Company</Dropdown.Item>
                    </DropdownButton>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SignUp;