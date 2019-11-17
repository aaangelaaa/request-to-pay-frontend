import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import './SBOPastInvoices.css';

{/* SBO's Active Invoices*/}

class SBOPastInvoices extends Component {
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
            <div className="sbo-pg">
                <h3 className="sbo-header">View Past Invoices</h3>
                <h6>Invoice# Date</h6>
                <div className="list-invoices">
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            Report Error
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            Report Error
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            Report Error
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            Report Error
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick2}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            Report Error
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

export default SBOPastInvoices;