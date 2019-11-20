import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';
import './Invoice.css';

{/* Invoice */}

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleBack = this.handleBack.bind(this);

    }

    handleBack (e) {
        e.preventDefault();
        // switcc pages
        console.log("logging out!");
    }

    render () {
        return (
            <div className="invoice">
                <p>The Coca Cola Company</p>
                <p className="invoice-header2">INVOICE</p>
                <p style={{fontSize: "10px"}}>1234 Road Rd.<br></br>City, PR 1A2 B3C</p>
                <p style={{fontSize: "10px"}}>
                  <strong>Bill To</strong>
                  <br></br>
                  Jane Doe
                  <br></br>
                  1234 Road Rd.
                  <br></br>
                  City, PR 1A2 B3C
                </p>
                <p className="invoice-titles">
                  <strong>Invoice #:</strong>
                  <br></br>
                  <strong>Invoice Date:</strong>
                </p>
                <p className="invoice-data" id="invoice-data">
                  XXXXX
                  <br></br>
                  YYYY-MM-DD
                </p>
                <Table striped bordered hover style={{fontSize:"10px"}}>
                  <thead>
                    <tr>
                      <th>QTY</th>
                      <th>Item</th>
                      <th>Unit Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XX</td>
                      <td>Item 1</td>
                      <td>$X.XX</td>
                      <td>$X.XX</td>
                    </tr>
                    <tr>
                      <td>XX</td>
                      <td>Item 2</td>
                      <td>$X.XX</td>
                      <td>$X.XX</td>
                    </tr>
                    <tr>
                      <td>XX</td>
                      <td>Item 3</td>
                      <td>$X.XX</td>
                      <td>$X.XX</td>
                    </tr>
                    <tr>
                      <td colSpan="3" style={{textAlign:"right"}}>Subtotal</td>
                      <td>$XX.XX</td>
                    </tr>
                    <tr>
                      <td colSpan="3" style={{textAlign:"right"}}>Sales Tax 13%</td>
                      <td>$XX.XX</td>
                    </tr>
                    <tr>
                      <td colSpan="3" style={{textAlign:"right", fontWeight:"bold"}}>Total</td>
                      <td>$XX.XX</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="secondary" size="sm" onClick={this.handleBack}>Back</Button>
            </div>
        );
    }
}

export default Invoice;