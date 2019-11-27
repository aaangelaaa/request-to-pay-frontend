import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';
import './Loading.css';
import logo from "../../images/Scotiabank_White.png";

{/* Loading */}

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleBack = this.handleBack.bind(this);

    }

    handleBack (e) {
        e.preventDefault();
        // switcc pages
        console.log("logging out!");
    }

    render () {
        return (
          <Fragment>
            <div id="rectangle">
            </div>
            <div className="header-container">
              <img className="header-logo" src={logo} alt=""/>
            </div>
            <div className="loading">
              <div className="loading-title">
                Loading . . .
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Loading;