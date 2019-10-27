import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        //add action
    }

    render () {
        return (
            <div className="login">
                <h3 className="login-header">Login</h3>
                //<div className="container">
                    <Form onSubmit={this.handleClick}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type="text" placeholder="Username" 
                            onChange={this.handleUsername} value={ this.state.username }
                        />

                        <div className="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" 
                                onChange={this.handlePassword} value={ this.state.password }
                            />
                        </div>

                        <div className="login-button">
                            <Button variant="secondary" type="submit">
                                Enter
                            </Button>
                        </div>
                    </Form>
                //</div>
            </div>
        );
    }
}

export default LoginPage;