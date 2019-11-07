import React from 'react';
import logo from './images/Scotiabank logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/login/LoginPage.js';
import LoginConfirmation from './pages/login confirmation/LoginConfirmation.js';

function App() {
  return (
    <LoginPage/>  
  );
}

export default App;
