import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const InvoiceAccordionItem = ({ invoice, handleView, handleClick, userType, i }) => {
  const statusLabel = invoice.status === "D" ? "DELIVERED" : "UNDELIVERED";
  const statusVerbose = {
    "P": "Paid, not delivered",
    "A": "Not paid, not delivered", // TODO: ??
    "D": "Paid and delivered"
  }[invoice.status];
  
  return(
  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey={i}>
      {invoice.id} {statusLabel}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={i}>
      <Card.Body style={{ wordSpacing: "1px" }}>
        <strong>Status:</strong> {statusVerbose} <br></br>
        <br></br>
        <Button variant="outline-danger" size="sm" onClick={handleView}>
          View Invoice
        </Button>
        {(userType === 'D') && (<Button
          className="set-delivered"
          variant="outline-danger"
          size="sm"
          onClick={handleClick}
        >
          Set Delivered
        </Button>)}
        {(userType === 'C') && (<Button
          className="set-delivered"
          variant="outline-danger"
          size="sm"
          onClick={handleClick}
        >Pay Now</Button>)}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)};

export default InvoiceAccordionItem;
