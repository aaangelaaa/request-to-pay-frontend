import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./helpers/Routing.js";

import * as auth from "./helpers/BackendAuth";

const GlobalState = React.createContext();
const DEBUG = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      loading: !!localStorage.getItem("token")
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ loading: true }, () =>
        auth.profile().then(data => this.setState({ ...data, loading: false }))
      );
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    return this.state.loading ? (
      <p>loading...</p>
    ) : (
      <GlobalState.Provider
        value={{
          state: this.state,
          update: this.setState.bind(this)
        }}
      >
        <Routing />
      </GlobalState.Provider>
    );
  }
}

export default App;
export { GlobalState, DEBUG };
