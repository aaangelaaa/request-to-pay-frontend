import React from "react";
import * as auth from './BackendAuth';

export const GlobalState = React.createContext();

export default class StateProvider extends React.Component {
  constructor(props) {
    const loggedIn = !!localStorage.getItem("token");
    super(props);
    this.state = {
      user: null,
      loggedIn,
      loading: loggedIn
    };
  }

  getUser(){
      auth.profile()
      .then(user => this.setState({user}))
  }

  componentDidMount(){
      const {loggedIn, user} = this.state;
      if (loggedIn && !user){
        this.getUser();
      }
  }

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
