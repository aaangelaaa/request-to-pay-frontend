import React from 'react';
import logo from './images/Scotiabank logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/login/LoginPage.js';
import DriverDash from './pages/driver dashboard/DriverDash.js';
import DriverActiveInvoices from './pages/driver active invoices/DriverActiveInvoices.js';
import DriverPastInvoices from './pages/driver past invoices/DriverPastInvoices.js';
import Invoice from './pages/invoice/Invoice.js';
import SBODash from './pages/sbo dashboard/SBODash.js';

function App() {
  return (
    <LoginPage/>  
  );
}

export default App;
