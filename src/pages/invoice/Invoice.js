import React, { Fragment, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import DataProvider from "../../helpers/DataProvider";
import withGlobalState from "../../helpers/withGlobalState";
import "./Invoice.css";
import logo from "../../images/Scotiabank_White.png";

import moment from 'moment';

{
  /* Invoice */
}

const OrderRow = ({order}) => (
  <tr>
    <td>{order.quantity}</td>
    <td>{order.item.name}</td>
    <td>${order.item.price}</td>
    <td>${(order.item.price * order.quantity).toFixed(2)}</td>
  </tr>
);

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = props.match.params.id;

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(e) {
    e.preventDefault();
    try {
      this.props.history.goBack();
    } catch {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <DataProvider href={`/api/invoices/${this.id}/`}>
        {({ data }) => (
          <Fragment>
            <div id="rectangle"></div>
            <div className="header-container">
              <img className="header-logo" src={logo} alt="" />
            </div>
            <div className="invoice">
              <p>The Coca Cola Company</p>
              <p className="invoice-header2">INVOICE</p>
              <p style={{ fontSize: "10px" }}>
                1234 Road Rd.<br></br>City, PR 1A2 B3C
              </p>
              <p style={{ fontSize: "10px" }}>
                <strong>Bill To</strong>
                <br></br>
                {data.customer.first_name} {data.customer.last_name}
                <br></br>
                <span className="address">{data.customer.address}</span>
              </p>
              <p className="invoice-titles">
                <strong>Invoice #: </strong>
                <br></br>
                <strong>Invoice Date:</strong>
              </p>
              <p className="invoice-data" id="invoice-data">
                {data.id}
                <br></br>
                {moment().format("YYYY-MM-DD")}
              </p>
              <Table striped bordered hover style={{ fontSize: "10px" }}>
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>Item</th>
                    <th>Unit Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.orders.map((order, i) => <OrderRow order={order} key={i}/>)}
                  <tr>
                    <td colSpan="3" style={{ textAlign: "right" }}>
                      Subtotal
                    </td>
                    <td>${data.price.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan="3" style={{ textAlign: "right" }}>
                      Sales Tax 13%
                    </td>
                    <td>${(data.price * .13).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      Total
                    </td>
                    <td>${(data.price * 1.13).toFixed(2)}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="back">
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={this.handleBack}
                >
                  Back
                </Button>
              </div>
            </div>
            {(this.props.context.state.user.user_type === "C" && data.status==="A") && (
              null // <div className="pay-me">You should probably pay for this invoice.</div>
            )}
            {(data.status === "P") && (
              <h2 style={{
                marginTop: 40,
                textAlign: 'center'
              }}>PAID</h2>
            )}
            {(data.status === "D") && (
              <h2 style={{
                marginTop: 40,
                textAlign: 'center'
              }}>DELIVERED</h2>
            )}
          </Fragment>
        )}
      </DataProvider>
      
    );
  }
}

export default withGlobalState(Invoice);
