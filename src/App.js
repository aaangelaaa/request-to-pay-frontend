import React from "react";
import logo from "./images/Scotiabank logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import Routing from "./helpers/Routing.js";
import LoginPage from "./pages/login/LoginPage.js";
import DriverDash from "./pages/driver dashboard/DriverDash.js";
import DriverActiveInvoices from "./pages/driver active invoices/DriverActiveInvoices.js";
import DriverPastInvoices from "./pages/driver past invoices/DriverPastInvoices.js";
import Invoice from "./pages/invoice/Invoice.js";
import SBODash from "./pages/sbo dashboard/SBODash.js";
import SBOActiveInvoices from "./pages/sbo active invoices/SBOActiveInvoices.js";
import SBOPastInvoices from "./pages/sbo past invoices/SBOPastInvoices.js";
import InteracConfirmation from "./pages/interac confirmation/InteracConfirmation.js";
import CompanyDash from "./pages/company dashboard/CompanyDash.js";
import CompanyActiveInvoices from "./pages/company active invoices/CompanyActiveInvoices.js";
import CompanyPastInvoices from "./pages/company past invoices/CompanyPastInvoices.js";
import CreateInvoice from "./pages/company create invoice/CreateInvoice.js";

const GlobalState = React.createContext();

class App extends React.Component {
  state = {
    user: null
  };

  render() {
    return (
      <GlobalState.Provider
        value={{
          state: this.state,
          update: this.setState.bind(this)
        }}
      >
        <Routing />
      </GlobalState.Provider>
    );
  }
}

export default App;
export { GlobalState };
