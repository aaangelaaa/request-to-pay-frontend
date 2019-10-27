import React from 'react';
import logo from './images/Scotiabank logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/login/LoginPage.js';
import LoginConfirmation from './pages/login confirmation/LoginConfirmation.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Scotiabank-logo" alt="logo" />
        <LoginPage/>;
      </header>
    </div>
  );
}

export default App;
