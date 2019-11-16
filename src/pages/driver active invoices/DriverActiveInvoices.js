import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import './DriverActiveInvoices.css';

{/* Driver's Active Invoices*/}

class DriverActiveInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    handleClick (e) {
        e.preventDefault();
        // switch pages
        console.log("hello!");
    }

    handleBack (e) {
        e.preventDefault();
        // switcc pages
        console.log("logging out!");
    }

    render () {
        return (
            <div className="driver-pg">
                <h3 className="driver-header">View Undelivered Invoices</h3>
                <h6>Invoice# Status</h6>
                <div className="invoice">
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick}>
                            Delivered
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick}>
                            Delivered
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                </div>
                <Button variant="secondary" size="sm" onClick={this.handleBack}>Back</Button>
            </div>
        );
    }
}

export default DriverActiveInvoices;