import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import './CompanyPastInvoices.css';

{/* Company's Past Invoices*/}

class CompanyPastInvoices extends Component {
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
    }

    handleClick2 (e) {
        e.preventDefault();
    }

    handleBack (e) {
        e.preventDefault();
        window.location.href = "/companydash";
    }

    render () {
        return (
            <div className="company-pg">
                <h3 className="company-header">View Past Invoices</h3>
                <h6>Invoice# CustomerID</h6>
                <div className="list-invoices">
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX XXXXXXXX
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick1}>
                              View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            XXXXX XXXXXXXX
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick1}>
                              View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            XXXXX XXXXXXXX
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick1}>
                              View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                            XXXXX XXXXXXXX
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick1}>
                              View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                            XXXXX XXXXXXXX
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Delivered<br></br>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick1}>
                              View Invoice
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

export default CompanyPastInvoices;