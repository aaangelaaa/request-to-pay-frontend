import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './LoginConfirmation.css';

class LoginConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            badLogin: false
        }
    }

    render () {
        return (
            <div className="confirmation">
                <h3 className="successful-header">Login Successful</h3>
                <h4 className="user-type">Driver</h4>
                <h4 className="dashboard">Dashboard</h4>
            </div>
        );
    }
}

export default LoginConfirmation;