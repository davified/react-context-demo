import React, { Component } from "react";
import MyContext from "./MyContext";

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      viewer: null
    };
  }

  logIn = name => {
    this.setState({ viewer: name });
  };

  logOut = name => {
    this.setState({ viewer: null });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          viewer: this.state.viewer,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;
