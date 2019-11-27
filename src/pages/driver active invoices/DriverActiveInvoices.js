import React, { Fragment, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import InvoiceAccordionItem from "../../components/InvoiceAccordionItem";
import { GlobalState } from "../../App";
import withGlobalState from "../../helpers/withGlobalState";
import DataProvider from "../../helpers/DataProvider";
import "./DriverActiveInvoices.css";
import logo from "../../images/Scotiabank_White.png";

{
  /* Active Invoices */
}

class DriverActiveInvoices extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.active = props.location.search.includes("active");

    // this.handleClick1 = this.handleClick1.bind(this);
    // this.handleClick2 = this.handleClick2.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClick1(e) {
    e.preventDefault();
    this.props.history.push("/invoice");
  }

  handleViewInvoice(id){
    return (e) => {
      e.preventDefault();
      this.props.history.push("/invoice/"+id);
    }
  }

  handlePayInvoice(id) {
    return (e) => {
      e.preventDefault();
      alert('pay up!')
    }
  }

  handleBack(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    const {
      state: { user }
    } = this.props.context;

    const title = this.active ? "View Active Invoices" : "View Past Invoices";
    let URL = "/api/invoices/?";

    const query = [];

    if (this.active) {
      query.push("status=A");
    } else {
      query.push("status=D");
    }

    switch (user.user_type) {
      case "D":
        query.push("driver=" + user.id);
        break;
      case "C":
        query.push("customer=" + user.id);
        break;
      default:
        break;
    }

    return (
      <Fragment>
        <div id="rectangle"></div>
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />
        </div>
        <div className="active">
          <h3 className="active-title">{title}</h3>
          <DataProvider href={URL + query.join("&")}>
            {({ data = [] }) => (
              <div className="list-invoices">
                <h6>Invoice# Status</h6>
                <Accordion>
                  {data.map((data, i) => (
                    <InvoiceAccordionItem
                      key={i}
                      invoice={data}
                      handleView={this.handleViewInvoice(data.id).bind(this)}
                      handlePay={this.handlePayInvoice(data.id).bind(this)}
                      i={i}
                    />
                  ))}
                  {/* <Card>
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
                        </Card> */}
                </Accordion>
              </div>
            )}
          </DataProvider>
          <div className="back-button">
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={this.handleBack}
            >
              Back
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withGlobalState(DriverActiveInvoices);
