import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import './DriverPastInvoices.css';

{/* Driver's Past Invoices*/}

class DriverPastInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    handleClick (e) {
        e.preventDefault();
        this.props.history.push("/invoice");
    }

    handleBack (e) {
        e.preventDefault();
        this.props.history.push("/driverdash");
    }

    render () {
        return (
            <div className="driver-pg">
                <h3 className="driver-header">View Past Invoices</h3>
                <h6>Invoice# Date</h6>
                <div className="list-invoices">
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick}>
                            View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick}>
                            View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick}>
                            View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick}>
                            View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClick}>
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

export default DriverPastInvoices;