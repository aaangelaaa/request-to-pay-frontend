import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./helpers/Routing.js";

import StateProvider from './helpers/StateProvider';

export const DEBUG = false;


class App extends React.Component {

  render() {
    return (
      <StateProvider>
        <Routing/>
      </StateProvider>
    )
  }
}


export default App;
