import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';

{/* Driver's Active Invoices*/}

class DriverActiveInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    handleClick1 (e) {
        e.preventDefault();
        // switch pages
        console.log("hello!");
    }

    handleClick2 (e) {
        e.preventDefault();
        // switch pages
        console.log("hello2!");
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
                <div className="list-invoices">
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick1}>
                            Set Delivered
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
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick1}>
                            Set Delivered
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick1}>
                            Set Delivered
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick1}>
                            Set Delivered
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-primary" size="sm" onClick={this.handleClick1}>
                            Set Delivered
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