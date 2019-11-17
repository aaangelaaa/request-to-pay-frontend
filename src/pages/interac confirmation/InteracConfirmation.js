import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class InteracConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            badLogin: false
        }
    }

    render () {
        return (
            <div>
                <p style={{textAlign:"center"}}>Interac payment successful.</p>
            </div>
        );
    }
}

export default InteracConfirmation;