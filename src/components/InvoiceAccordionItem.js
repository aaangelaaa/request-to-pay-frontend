import React from 'react';
import {Card, Accordion, Button} from 'react-bootstrap';

const InvoiceAccordionItem = ({ invoice, handleClick, i }) => (
    <Card>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={i}>
        {invoice.id} YYYY-MM-DD
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card.Body>
          <Button variant="outline-primary" size="sm" onClick={handleClick}>
            View Invoice
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
  
export default InvoiceAccordionItem;