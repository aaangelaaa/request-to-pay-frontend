import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage.js";
import SignUp from "../pages/signup/SignUp.js";
import Dashboard from "../pages/driver dashboard/DriverDash.js";
import DriverActiveInvoices from "../pages/driver active invoices/DriverActiveInvoices.js";
import DriverPastInvoices from "../pages/driver past invoices/DriverPastInvoices.js";
import Invoice from "../pages/invoice/Invoice.js";
import SBODash from "../pages/sbo dashboard/SBODash.js";
import SBOActiveInvoices from "../pages/sbo active invoices/SBOActiveInvoices.js";
import SBOPastInvoices from "../pages/sbo past invoices/SBOPastInvoices.js";
import InteracConfirmation from "../pages/interac confirmation/InteracConfirmation.js";
import CompanyDash from "../pages/company dashboard/CompanyDash.js";
import CompanyActiveInvoices from "../pages/company active invoices/CompanyActiveInvoices.js";
import CompanyPastInvoices from "../pages/company past invoices/CompanyPastInvoices.js";
import CreateInvoice from "../pages/company create invoice/CreateInvoice.js";

import withGlobalState from "../helpers/withGlobalState";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const Routing = ({ context: { state } }) => {
  return state.loggedIn && state.user ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route exact path="/driverdash" component={DriverDash} /> */}
        {/* <Route
        exact
        path="/driveractiveinvoices"
        component={DriverActiveInvoices}
      />
      <Route exact path="/driverpastinvoices" component={DriverPastInvoices} />
      <Route exact path="/invoice" component={Invoice} />
      <Route exact path="/sbodash" component={SBODash} />
      <Route exact path="/sboactiveinvoices" component={SBOActiveInvoices} />
      <Route exact path="/sbopastinvoices" component={SBOPastInvoices} />
      <Route exact path="/interacconf" component={InteracConfirmation} />
      <Route exact path="/companydash" component={CompanyDash} />
      <Route
        exact
        path="/companyactiveinvoices"
        component={CompanyActiveInvoices}
      />
      <Route
        exact
        path="/companypastinvoices"
        component={CompanyPastInvoices}
      />
      <Route exact path="/createinvoice" component={CreateInvoice} /> */}
      </Switch>
    </Router>
  ) : (
    <LoginPage />
  );
};

export default withGlobalState(Routing);
