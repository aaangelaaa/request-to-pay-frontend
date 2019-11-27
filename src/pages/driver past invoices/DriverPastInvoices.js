import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import './DriverPastInvoices.css';
import logo from "../../images/Scotiabank_White.png";

{/* Past Invoices */}

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
          <Fragment>
            <div id="rectangle">
            </div>
            <div className="header-container">
              <img className="header-logo" src={logo} alt=""/>
            </div>
            <div className="past">
                <h3 className="past-title">View Past Invoices</h3>
                <div className="list-invoices">
                  <h6>Invoice# Date</h6>
                    <Accordion>
                      <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX YYYY-MM-DD
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Button variant="outline-danger" size="sm" onClick={this.handleClick}>
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
                            <Button variant="outline-danger" size="sm" onClick={this.handleClick}>
                            View Invoice
                            </Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                </div>
                <div className="back-button">
                  <Button 
                    variant="outline-secondary" 
                    size="lg" 
                    onClick={this.handleBack}>
                    Back
                    </Button>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default DriverPastInvoices;