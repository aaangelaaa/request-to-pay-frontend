import React, { Fragment, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Button } from "react-bootstrap";
import InvoiceAccordionItem from "../../components/InvoiceAccordionItem";
import * as auth from "../../helpers/BackendAuth";
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

  handleViewInvoice(id) {
    return e => {
      e.preventDefault();
      this.props.history.push("/invoice/" + id);
    };
  }

  handleSetInvoiceDelivered(id) {
    return e => {
      e.preventDefault();

      auth.deliver(id)
        .then(() => window.location.reload());
    };
  }

  handlePayInvoice(id) {
    return e => {
      e.preventDefault();
      auth.pay(id)
        .then(() => window.location.reload());
    };
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
      query.push("status__not=D");
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

    const onClick = {
      D: this.handleSetInvoiceDelivered,
      C: this.handlePayInvoice
    }[user.user_type].bind(this);

    return (
      <Fragment>
        <div id="rectangle"></div>
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />
        </div>
        <div className="active">
          <h3 className="active-title">{title}</h3>
          <DataProvider href={URL + query.join("&")}>
            {({ data = [] }) => {
              return (
                <div className="list-invoices">
                  <h6>Invoice# Status</h6>
                  <Accordion>
                    {data.map((val, i) => (
                      <InvoiceAccordionItem
                        key={i}
                        invoice={val}
                        userType={user.user_type}
                        handleView={this.handleViewInvoice(val.id).bind(this)}
                        handleClick={onClick(val.id)}
                        i={i}
                      />
                    ))}
                  </Accordion>
                </div>
              );
            }}
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
