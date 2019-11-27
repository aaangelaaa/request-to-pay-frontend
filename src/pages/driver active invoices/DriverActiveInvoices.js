import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import InvoiceAccordionItem from '../../components/InvoiceAccordionItem';
import {GlobalState} from '../../App';
import DataProvider from '../../helpers/DataProvider';
import './DriverActiveInvoices.css';
import logo from "../../images/Scotiabank_White.png";

{/* Active Invoices */}


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
        this.props.history.push("/invoice");
    }

    handleClick2 (e) {
        e.preventDefault();
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
            <div className="active">
                <h3 className="active-title">View Active Invoices</h3>
                <div className="list-invoices">
                  <h6>Invoice# Status</h6>
                    <Accordion>
                        <Card>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            XXXXX UNDELIVERED
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Not Delivered<br></br><br></br>
                            <Button variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick2}>
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
                          <Card.Body style={{wordSpacing:"1px"}}>
                            <strong>Status:</strong> Paid, Not Delivered<br></br><br></br>
                            <Button variant="outline-danger" size="sm" onClick={this.handleClick1}>
                            View Invoice
                            </Button>
                            <Button className="set-delivered" variant="outline-danger" size="sm" onClick={this.handleClick2}>
                            Set Delivered
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

export default DriverActiveInvoices;