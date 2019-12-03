import React from "react";
import { Toast, ToastHeader, ToastBody } from "react-bootstrap";
import icon from "../images/Scotiabank_Icon.png";

const ToastNotification = ({ }) => {
  const [showPaid, setShowPaid] = useState(true);
  const [showDelivered, setShowDelivered] = useState(true);

  const toggleShowPaid = () => setShowPaid(!showPaid);
  const toggleShowDelivered = () => setShowDelivered(!showDelivered);

  return (
    <Toast show={showPaid} onClose={setShowPaid}>
    <Toast.Header>
      <img
        src=icon
        className="toast-paid"
        alt="" />
      <strong className="mr-auto">Scotiabank RTP</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>An invoice has been paid.</Toast.Body>
  </Toast>

  <Toast show={showDelivered} onClose={setShowDelivered}>
    <Toast.Header>
      <img
        src=icon
        className="toast-delivered"
        alt="" />
      <strong className="mr-auto">Scotiabank RTP</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>An order has been delivered.</Toast.Body>
  </Toast>
)};

export default ToastNotification;