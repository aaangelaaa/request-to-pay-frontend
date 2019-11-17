import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './SBODash.css';

{/* SBO Dashboard */}

class SBODash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleClick1 (e) {
        e.preventDefault();
        // switch pages
        console.log("hello!");
    }

    handleClick2 (e) {
        e.preventDefault();
        // switcc pages
        console.log("goodbye!");
    }

    handleLogout (e) {
        e.preventDefault();
        // switcc pages
        console.log("logging out!");
    }

    render () {
        return (
            <div className="sbo-dash">
                <h3 className="sbo-header">Business Dashbaord</h3>
                <Button variant="primary" size="lg" block onClick={this.handleClick1}>View Undelivered Invoices</Button>
                <Button variant="secondary" size="lg" block onClick={this.handleClick2}>View Past Invoices</Button>
                <Button variant="primary" size="sm" onClick={this.handleLogout}>Logout</Button>
            </div>
        );
    }
}

export default SBODash;