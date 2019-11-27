import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./helpers/Routing.js";

import StateProvider from './helpers/StateProvider';

export const DEBUG = true;


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
