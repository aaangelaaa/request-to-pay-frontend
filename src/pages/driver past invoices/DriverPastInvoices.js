import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import { GlobalState } from "../../App";
import DataProvider from "../../helpers/DataProvider";
import InvoiceAccordionItem from '../../components/InvoiceAccordionItem';

import "./DriverPastInvoices.css";

{
  /* Driver's Past Invoices*/
}


class DriverPastInvoices extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/invoice");
  }

  handleBack(e) {
    e.preventDefault();
    this.props.history.push("/driverdash");
  }

  render() {
    return (
      <GlobalState.Consumer>
        {({ state }) => state.user && (
          <div className="driver-pg">
            <h3 className="driver-header">View Past Invoices</h3>
            <h6>Invoice# Date</h6>
            <div className="list-invoices">
              <Accordion>
                <DataProvider href={`/api/invoices/?driver=${state.id}&status=D`}>
                  {({ data }) =>
                    data.map(invoice => (
                      <InvoiceAccordionItem
                        invoice={invoice}
                        onClick={this.handleClick.bind(this)}
                      />
                    ))
                  }
                </DataProvider>
              </Accordion>
            </div>
            <Button variant="secondary" size="sm" onClick={this.handleBack}>
              Back
            </Button>
          </div>
        )}
      </GlobalState.Consumer>
    );
  }
}

export default DriverPastInvoices;
