import React from 'react';
import logo from './images/Scotiabank logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/login/LoginPage.js';
import LoginConfirmation from './pages/login confirmation/LoginConfirmation.js';
import DriverDash from './pages/driver dashboard/DriverDash.js';

function App() {
  return (
    <DriverDash/>  
  );
}

export default App;
