import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'

import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            badLogin: false
        }
    }

    submitCredentials (e) {
        e.preventDefault()
        const form = e.currentTarget

        if (form.checkValidity() === false) {
            e.stopPropagation()
        }

        console.log(form)
        const username = form.getElementsByClassName("form-control")[0].value
        const password = form.getElementsByClassName("form-control")[1].value

        this.props.checkCredentials(username, password).then((result) => {
            console.log("success")
        }).catch((error) => {
            console.log(error)
        })
    }

    render () {
        return (
            <div className="login">
                <h3 className="login-header">Login</h3>
                <Form onSubmit={this.submitCredentials.bind(this)} validated={this.state.validated}>
                </Form>
                <div className="container">
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <div className="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </div>
                        </Form.Group>
                        <div className="login-button">
                            <Button variant="secondary" type="submit">
                                Enter
                            </Button>
                        </div>
                        {
                            this.state.badLogin ? 
                            (<p className="bad-login">Invalid username or password.</p>) : null
                        }
                </div>
            </div>
        );
    }
}

export default LoginPage;