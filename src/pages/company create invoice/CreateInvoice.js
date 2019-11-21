import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown, DropdownButton, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import './CreateInvoice.css';

{/* Login Page */}

class CreateInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Items'
        }
        
        this.handleBack = this.handleBack.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBack (e) {
        e.preventDefault();
        this.props.history.push("/companydash");
    }

    handleClick (e) {
        e.preventDefault();
    }

    handleChange (e) {
        e.preventDefault();
    }

    render () {
        return (
            <div className="create-invoice">
                <h3 className="create-invoice-header">Create Invoice</h3>

                <InputGroup size="sm" className="mb-3">
                    <FormControl
                      placeholder="Customer ID"
                      aria-label="Customer ID"
                      aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <ListGroup variant="flush">
                      <ListGroup.Item>Product 1 x X</ListGroup.Item>
                      <ListGroup.Item>Product 2 x X</ListGroup.Item>
                      <ListGroup.Item>Product 3 x X</ListGroup.Item>
                </ListGroup>

                <InputGroup size="sm" className="mb-3">

                <DropdownButton
                  alignRight
                  variant="secondary"
                  title="Select Item"
                  id="dropdown-menu-align-right"
                  block
                  select onChange={this.handleChange}
                >
                  <Dropdown.Item eventKey="1">Product 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Product 2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Product 3</Dropdown.Item>
                </DropdownButton>

                    <FormControl
                      placeholder="Quantity"
                      aria-label="Quantity"
                      aria-describedby="basic-addon1"
                    />

                </InputGroup>
                <Button variant="primary" size="sm" onClick={this.handleClick}>Add Order</Button>
                <div></div>
                <Button variant="primary" size="sm" block onClick={this.handleClick}>Create Invoice</Button>
                <div></div>

                <Button variant="secondary" size="sm" onClick={this.handleBack}>Back</Button>

            </div>
        );
    }
}

export default CreateInvoice;