import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const InvoiceAccordionItem = ({ invoice, handleView, handleClick, userType, i }) => {
  const statusLabel = invoice.status === "D" ? "DELIVERED" : "UNDELIVERED";
  const statusVerbose = {
    "P": "Paid, not delivered",
    "A": "Not paid, not delivered", // TODO: ??
    "D": "Paid and delivered"
  }[invoice.status];



  let extraButton = null;

  console.log(userType, invoice.status);
  

  if (userType === "D" && invoice.status === "P"){
    extraButton = "Set Delivered";
    console.log("this should be it chief");
    
  } else if (userType === "C" && invoice.status === "A"){
    extraButton = "Pay Now";
  }
  
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
        {extraButton && (
          <Button
          className="set-delivered"
          variant="outline-danger"
          size="sm"
          onClick={handleClick}
        >
          {extraButton}
        </Button>
        )}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)};

export default InvoiceAccordionItem;
