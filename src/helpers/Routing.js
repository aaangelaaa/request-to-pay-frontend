import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from '../pages/login/LoginPage.js';
import DriverDash from '../pages/driver dashboard/DriverDash.js';
import DriverActiveInvoices from '../pages/driver active invoices/DriverActiveInvoices.js';
import DriverPastInvoices from '../pages/driver past invoices/DriverPastInvoices.js';
import Invoice from '../pages/invoice/Invoice.js';
import SBODash from '../pages/sbo dashboard/SBODash.js';
import SBOActiveInvoices from '../pages/sbo active invoices/SBOActiveInvoices.js';
import SBOPastInvoices from '../pages/sbo past invoices/SBOPastInvoices.js';
import InteracConfirmation from '../pages/interac confirmation/InteracConfirmation.js';
import CompanyDash from '../pages/company dashboard/CompanyDash.js';
import CompanyActiveInvoices from '../pages/company active invoices/CompanyActiveInvoices.js';
import CompanyPastInvoices from '../pages/company past invoices/CompanyPastInvoices.js';
import CreateInvoice from '../pages/company create invoice/CreateInvoice.js';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/driverdash">
            <DriverDash />
          </Route>
          <Route path="/driveractiveinvoices">
            <DriverActiveInvoices />
          </Route>
          <Route path="/driverpastinvoices">
            <DriverPastInvoices />
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/sbodash">
            <SBODash />
          </Route>
          <Route path="/sboactiveinvoices">
            <SBOActiveInvoices />
          </Route>
          <Route path="/sbopastinvoices">
            <SBOPastInvoices />
          </Route>
          <Route path="/interacconf">
            <InteracConfirmation />
          </Route>
          <Route path="/companydash">
            <CompanyDash />
          </Route>
          <Route path="/companyactiveinvoices">
            <CompanyActiveInvoices />
          </Route>
          <Route path="/companypastinvoices">
            <CompanyPastInvoices />
          </Route>
          <Route path="/createinvoice">
            <CreateInvoice />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
