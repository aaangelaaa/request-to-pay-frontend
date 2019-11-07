import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import BackendAuth from '../../helpers/BackendAuth.js'
import './DriverDash.css';

{/* Driver Dashboard */}

class DriverDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 (e) {
        e.preventDefault();
        // switch pages
        console.log("hello!");
    }

    handleClick2 (e) {
        e.preventDefault();
        // swithc pages
        console.log("goodbye!");
    }

    render () {
        return (
            <div className="driver-dash">
                <h3 className="driver-header">Driver Dashbaord</h3>
                <Button variant="primary" size="lg" block onClick={this.handleClick1}>View Active Invoices</Button>
                <Button variant="secondary" size="lg" block onClick={this.handleClick2}>View Past Invoices</Button>
            </div>
        );
    }
}

export default DriverDash;