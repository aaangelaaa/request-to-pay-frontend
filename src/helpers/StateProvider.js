import React from "react";
import * as auth from "./BackendAuth";

export const GlobalState = React.createContext();

class StateProvider extends React.Component {
  constructor(props) {
    const loggedIn = !!localStorage.getItem("token");
    super(props);
    this.state = {
      user: null,
      loggedIn,
      loading: loggedIn
    };
  }

  getUser() {
    auth.profile().then(user => {
      this.setState({ user, loading: false });
      if (user.user_type === "D") {
        document.body.style.setProperty("--company-color", "var(--green)");
      } else {
        document.body.style.setProperty("--company-color", "#EC111A");
      }
    });
  }

  componentDidMount() {
    const { loggedIn, user } = this.state;
    if (loggedIn && !user) {
      this.getUser();
    }
  }

  // static getDerivedStateFromProps(oldProps, newState){
  //   if ()
  // }

  render() {
    return (
      <GlobalState.Provider
        value={{
          state: this.state,
          update: this.setState.bind(this)
        }}
      >
        {this.props.children}
      </GlobalState.Provider>
    );
  }
}

export default StateProvider;
