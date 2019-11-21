import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './CompanyDash.css';

{/* Company Dashboard */}

class CompanyDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleClick1 (e) {
        e.preventDefault();
        this.props.history.push("/companyactiveinvoices");
    }

    handleClick2 (e) {
        e.preventDefault();
        this.props.history.push("/companypastinvoices");
    }

    handleClick3 (e) {
        e.preventDefault();
        this.props.history.push("/createinvoice");
    }

    handleLogout (e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    render () {
        return (
            <div className="company-dash">
                <h3 className="company-header">Company Dashboard</h3>
                <Button variant="primary" size="lg" block onClick={this.handleClick1}>View Active Invoices</Button>
                <Button variant="secondary" size="lg" block onClick={this.handleClick2}>View Past Invoices</Button>
                <Button variant="primary" size="lg" block onClick={this.handleClick3}>Create New Invoice</Button>
                <Button variant="primary" size="sm" onClick={this.handleLogout}>Logout</Button>
            </div>
        );
    }
}

export default CompanyDash;