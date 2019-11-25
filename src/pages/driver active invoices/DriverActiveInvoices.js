import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import InvoiceAccordionItem from '../../components/InvoiceAccordionItem';
import {GlobalState} from '../../App';
import DataProvider from '../../helpers/DataProvider';
import './DriverActiveInvoices.css';

{/* Driver's Active Invoices*/}


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
          <GlobalState.Consumer>
          {({ state }) => state.user && (
            <div className="driver-pg">
              <h3 className="driver-header">View Active Invoices</h3>
              <h6>Invoice# Date</h6>
              <div className="list-invoices">
                <Accordion>
                  <DataProvider href={`/api/invoices/?driver=${state.user.id}&status=A`}>
                    {({ data = [] }) =>
                      <React.Fragment>
                        {data.map((invoice, i) => (
                          <InvoiceAccordionItem
                            i={i}
                            invoice={invoice}
                            onClick={this.handleClick2.bind(this)}
                          />
                        ))}
                      </React.Fragment>
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

export default DriverActiveInvoices;