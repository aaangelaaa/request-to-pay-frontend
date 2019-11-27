import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const InvoiceAccordionItem = ({ invoice, handleView, handlePay, i }) => (
  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey={i}>
      {invoice.id} {invoice.status === "D" ? "DELIVERED" : "UNDELIVERED"}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={i}>
      <Card.Body style={{ wordSpacing: "1px" }}>
        <strong>Status:</strong> TODO <br></br>
        <br></br>
        <Button variant="outline-danger" size="sm" onClick={handleView}>
          View Invoice
        </Button>
        <Button
          className="set-delivered"
          variant="outline-danger"
          size="sm"
          onClick={handlePay}
        >
          Set Delivered
        </Button>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default InvoiceAccordionItem;
