import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./helpers/Routing.js";

import LoginPage from "./pages/login/LoginPage";

import * as auth from "./helpers/BackendAuth";

const GlobalState = React.createContext();
const DEBUG = true;

class App extends React.Component {
  constructor(props) {
    const loggedIn = !!localStorage.getItem("token");
    super(props);
    this.state = {
      user: null,
      loggedIn,
      loading: loggedIn
    };
  }

  onStorageChange() {
    const {loggedIn} = this.state;
    this.setState({
      loggedIn: !!localStorage.getItem("token")
    });

    if (!loggedIn && this.state.loggedIn){
      this._loadUser();
    }
  }

  onStorageAdd() {
    this.onStorageChange();
    // any other business goes here
  }

  onStorageRemove() {
    this.onStorageChange();
    // any other business goes here
  }

  _loadUser() {
    this.setState({ loading: true }, () =>
      auth
        .profile()
        .then(user => this.setState({ user, loggedIn: true, loading: false }))
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this._loadUser();
    } else {
      this.setState({ loading: false });
    }

    window.addEventListener("set-item", this.onStorageAdd.bind(this));
    window.addEventListener("remove-item", this.onStorageRemove.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("set-item", this.onStorageAdd.bind(this));
    window.removeEventListener("remove-item", this.onStorageRemove.bind(this));
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
        {this.state.loggedIn ? <Routing /> : <LoginPage />}
      </GlobalState.Provider>
    );
  }
}

const withGlobalState = ({children}) => <GlobalState.Consumer>{value => children(...value)}</GlobalState.Consumer>

export default App;
export { GlobalState, DEBUG, withGlobalState };
