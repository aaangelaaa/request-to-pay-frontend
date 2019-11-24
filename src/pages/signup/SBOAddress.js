import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Button } from 'react-bootstrap';
import BackendAuth from '../../helpers/BackendAuth.js'
import './SBOAddress.css';

{/* SBO's Address Signup Page */}

class SBOAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            province: '',
            postalCode: '',
        }
        
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleProvince = this.handleProvince.bind(this);
        this.handlePostal = this.handlePostal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleAddress (e) {
        e.preventDefault();
        this.setState({ address: e.target.value });
        this.address = e.target.value;
        console.log(this.address);
    }
    
    handleCity(e) {
        e.preventDefault();
        this.setState({ city: e.target.value });
        this.city = e.target.value;
        console.log(this.city);
    }

    handleProvince (e) {
        e.preventDefault();
        this.setState({ province: e.target.value });
        this.province = e.target.value;
        console.log(this.province);
    }

    handlePostal (e) {
        e.preventDefault();
        this.setState({ postalCode: e.target.value });
        this.postalCode = e.target.value;
        console.log(this.postalCode);
    }

    handleClick (e) {
        e.preventDefault();
        window.location.href = "/";
    }

    render () {
        return (
            <div className="signup">
                <h3 className="signup-header">Sign Up</h3>
                <Form>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        placeholder="1234 Main St"
                        onChange={this.handleAddress}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control onChange={this.handleCity}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Province</Form.Label>
                      <Form.Control as="select" onChange={this.handleProvince}>
                        <option>Choose...</option>
                        <option>AB</option>
                        <option>BC</option>
                        <option>ON</option>
                        <option>QC</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPostal">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control onChange={this.handlePostal}/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I confirm that this information is accurate." />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={this.handleClick}>
                    Submit
                  </Button>
                </Form>
            </div>
        );
    }
}

export default SBOAddress;